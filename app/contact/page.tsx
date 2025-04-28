"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";
import * as Yup from "yup";

// Định nghĩa schema validation với Yup
const formSchema = Yup.object().shape({
  name: Yup.string()
    .required("Họ tên là bắt buộc")
    .min(2, "Họ tên phải có ít nhất 2 ký tự"),
  mail: Yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
  phone: Yup.string()
    .min(10, "Số điện thoại phải có 10 tý tự")
    .max(10, "Số điện thoại phải có 10 tý tự")
    .matches(/^[0-9+\-\s]*$/, "Số điện thoại không hợp lệ")
    .nullable(),
  address: Yup.string().nullable(),
  title: Yup.string()
    .required("Tiêu đề là bắt buộc")
    .min(3, "Tiêu đề phải có ít nhất 3 ký tự"),
  content: Yup.string()
    .required("Nội dung là bắt buộc")
    .min(10, "Nội dung phải có ít nhất 10 ký tự"),
});

export default function Contact() {
  // save form data
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    phone: "",
    address: "",
    title: "",
    content: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  //handle submit
  const [isSubmitting, setIsSubmitting] = useState(false);
  //message on submit
  const [message, setMessage] = useState("");

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate từng trường khi người dùng nhập
    try {
      const schema = Yup.reach(formSchema, name) as Yup.AnySchema;
      await schema.validate(value);
      setErrors((prev) => ({ ...prev, [name]: "" }));
    } catch (err) {
      const validationError = err as Yup.ValidationError;
      setErrors((prev) => ({ ...prev, [name]: validationError.message }));
    }
  };
  const handleReset = () => {
    setFormData({
      name: "",
      mail: "",
      phone: "",
      address: "",
      title: "",
      content: "",
    });
    setErrors({});
    setMessage("");
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      // Validate toàn bộ form trước khi gửi
      await formSchema.validate(formData, { abortEarly: false });

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Gửi thông tin thành công! Chúng tôi sẽ liên hệ sớm.");
        handleReset();
      } else {
        setMessage(`Lỗi: ${result.message}`);
      }
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors: Record<string, string> = {};
        error.inner.forEach((err) => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        setMessage("Đã có lỗi xảy ra. Vui lòng thử lại.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="max-w-[1060px] bg-white/30 backdrop-blur-sm p-4 sm:px-20 sm:py-10 mx-auto flex flex-col sm:flex-row sm:items-start items-center gap-10 leading-loose font-['Montserrat'] text-base text-slate-700">
      <div className="self-stretch inline-flex flex-col items-start gap-4">
        <div className="self-stretch text-xl font-medium leading-9">
          All questions and support requests, please leave your information
          here, we will review and respond soon
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <input
              className="relative block w-full p-3 rounded-lg placeholder:text-gray-700 border border-zinc-950/10 bg-gray-50"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              className="relative block w-full p-3 rounded-lg placeholder:text-gray-700 border border-zinc-950/10 bg-gray-50"
              placeholder="Email"
              name="mail"
              type="email"
              value={formData.mail}
              onChange={handleChange}
            />
            {errors.mail && (
              <p className="text-red-600 text-sm mt-1">{errors.mail}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              className="relative block w-full p-3 rounded-lg placeholder:text-gray-700 border border-zinc-950/10 bg-gray-50"
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              className="relative block w-full p-3 rounded-lg placeholder:text-gray-700 border border-zinc-950/10 bg-gray-50"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && (
              <p className="text-red-600 text-sm mt-1">{errors.address}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              className="relative block w-full p-3 rounded-lg placeholder:text-gray-700 border border-zinc-950/10 bg-gray-50"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && (
              <p className="text-red-600 text-sm mt-1">{errors.title}</p>
            )}
          </div>
          <div className="mb-4">
            <textarea
              className="relative block w-full p-3 rounded-lg placeholder:text-gray-700 border border-zinc-950/10 bg-gray-50"
              placeholder="Content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={5}
            />
            {errors.content && (
              <p className="text-red-600 text-sm mt-1">{errors.content}</p>
            )}
          </div>
          {message && (
            <div
              className={`mb-4 text-center ${
                message.includes("thành công")
                  ? "text-green-600"
                  : "text-red-600"
              }`}>
              {message}
            </div>
          )}
          <div className="w-96 inline-flex items-center gap-4">
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 px-4 py-2 flex justify-center items-center gap-2 border border-gray-300 rounded-[44px] hover:bg-gray-100">
              <div className="text-slate-600 text-xl font-semibold">Redo</div>
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 px-4 py-2 bg-lime-700 rounded-[44px] flex justify-center items-center gap-2 ${
                isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-lime-800"
              }`}>
              <div className="text-gray-50 text-xl font-semibold">
                {isSubmitting ? "Sending..." : "Send"}
              </div>
            </button>
          </div>
        </form>
      </div>
      <div className="rounded-lg pb-3 ">
        <div className="w-full sm:w-96 p-4 sm:p-0 inline-flex justify-center items-center gap-2">
          <div className="flex-1 text-lime-700 text-2xl font-semibold leading-9">
            Contact
          </div>
        </div>
        <div className="w-full sm:w-96 p-4 sm:p-0 flex flex-col items-start gap-2">
          <div className="self-stretch text-slate-800 text-2xl font-semibold leading-9">
            Nguyen Ha Anh
          </div>
          <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-neutral-300"></div>
          <div className="self-stretch py-2 inline-flex items-center gap-2">
            <Image
              src={"/icons/home.svg"}
              width={24}
              height={24}
              alt="icon home"></Image>
            <div className="text-slate-800 font-medium ">
              289A Khuat Duy Tien, Hanoi, Vietnam
            </div>
          </div>
          <div className="self-stretch py-2 inline-flex items-center gap-2">
            <Image
              src={"/icons/_WhatsApp.png"}
              width={24}
              height={24}
              alt="icon home"></Image>
            <div className="text-slate-800 font-medium ">
              Phone number: +84 857781385
            </div>
          </div>
          <div className="self-stretch py-2 inline-flex items-center gap-2">
            <Image
              src={"/icons/_Google.png"}
              width={24}
              height={24}
              alt="icon home"></Image>
            <div className="justify-start">
              <span className="text-slate-800 font-medium ">Email: </span>
              <span className="text-slate-800 font-medium underline ">
                evelyn.anhnh@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
