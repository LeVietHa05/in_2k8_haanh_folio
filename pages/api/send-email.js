import nodemailer from "nodemailer";
import sanitizeHtml from "sanitize-html";
import validator from "validator";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Chỉ hỗ trợ phương thức POST" });
    }

    const { name, mail, phone, address, title, content } = req.body;

    // Server-side validation
    if (!name || !mail || !title || !content) {
        return res.status(400).json({ message: "Vui lòng điền đầy đủ các trường bắt buộc" });
    }

    if (!validator.isEmail(mail)) {
        return res.status(400).json({ message: "Email không hợp lệ" });
    }

    if (phone && !validator.matches(phone, /^[0-9+\-\s]*$/)) {
        return res.status(400).json({ message: "Số điện thoại không hợp lệ" });
    }

    if (name.length < 2 || title.length < 3 || content.length < 10) {
        return res.status(400).json({ message: "Dữ liệu không đáp ứng yêu cầu độ dài tối thiểu" });
    }

    // Sanitization
    const sanitizedData = {
        name: sanitizeHtml(name, { allowedTags: [], allowedAttributes: {} }),
        mail: sanitizeHtml(mail, { allowedTags: [], allowedAttributes: {} }),
        phone: phone ? sanitizeHtml(phone, { allowedTags: [], allowedAttributes: {} }) : "",
        address: address ? sanitizeHtml(address, { allowedTags: [], allowedAttributes: {} }) : "",
        title: sanitizeHtml(title, { allowedTags: [], allowedAttributes: {} }),
        content: sanitizeHtml(content, {
            allowedTags: ["p", "br", "strong", "em"],
            allowedAttributes: {},
        }),
    };

    // Cấu hình transporter với Gmail
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL,
            pass: process.env.APPPASSWORD,
        },
    });

    // Nội dung email
    const mailOptions = {
        from: process.env.MAIL,
        to: process.env.RECEIVER_EMAIL,
        subject: `Yêu cầu hỗ trợ mới: ${sanitizedData.title}`,
        html: `
      <h2>Yêu cầu hỗ trợ mới</h2>
      <p><strong>Họ tên:</strong> ${sanitizedData.name}</p>
      <p><strong>Email:</strong> ${sanitizedData.mail}</p>
      <p><strong>Số điện thoại:</strong> ${sanitizedData.phone || "Không cung cấp"}</p>
      <p><strong>Địa chỉ:</strong> ${sanitizedData.address || "Không cung cấp"}</p>
      <p><strong>Tiêu đề:</strong> ${sanitizedData.title}</p>
      <p><strong>Nội dung:</strong> ${sanitizedData.content}</p>
    `,
    };

    // Gửi email cho người nhận
    const userMailOptions = {
        from: process.env.MAIL,
        to: mail,
        subject: "Xác nhận yêu cầu hỗ trợ",
        html: `<p>Cảm ơn bạn đã liên hệ! Chúng tôi đã nhận được yêu cầu của bạn và sẽ phản hồi sớm.</p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(userMailOptions);
        return res.status(200).json({ message: "Gửi email thành công" });
    } catch (error) {
        console.error("Lỗi gửi email:", error);
        return res.status(500).json({ message: "Lỗi gửi email, vui lòng thử lại" });
    }
}