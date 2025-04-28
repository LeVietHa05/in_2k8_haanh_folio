import { sheets_v4 } from "@googleapis/sheets";
import { GoogleAuth } from "google-auth-library";
import sanitizeHtml from "sanitize-html";
import validator from "validator";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Chỉ hỗ trợ phương thức POST" });
    }

    // Debug biến môi trường
    console.log("Environment Variables:", {
        SPREADSHEET_ID: process.env.SPREADSHEET_ID,
        NODE_ENV: process.env.NODE_ENV,
        PORT: process.env.PORT,
    });

    if (!process.env.SPREADSHEET_ID) {
        return res.status(500).json({ message: "Thiếu cấu hình SPREADSHEET_ID" });
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
    try {
        // Khởi tạo Google Sheets API
        const auth = new GoogleAuth({
            keyFile: "./ggsheetKey.json", // Đường dẫn tới file JSON
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets =new sheets_v4.Sheets({ version: "v4", auth });

        // Dữ liệu để thêm vào Sheet
        const values = [
            [
                sanitizedData.name,
                sanitizedData.mail,
                sanitizedData.phone,
                sanitizedData.address,
                sanitizedData.title,
                sanitizedData.content,
                new Date().toISOString(), // Thêm timestamp
            ],
        ];

        // Thêm dữ liệu vào Sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: "sheet1!A:G", // Phạm vi cột A-G
            valueInputOption: "RAW",
            requestBody: {
                values,
            },
        });

        return res.status(200).json({ message: "Lưu dữ liệu thành công" });
    } catch (error) {
        console.error("Lỗi lưu dữ liệu vào Google Sheet:", error);
        return res.status(500).json({
            message: "Lỗi lưu dữ liệu",
            error: error.message,
        });
    }
}