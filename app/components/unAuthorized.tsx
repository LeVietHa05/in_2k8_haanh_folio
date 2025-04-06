"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation"; // Để lấy redirect query parameter
import styles from "./NoAuthorized.module.css";

export default function NoAuthorized() {
  const [keyInput, setKeyInput] = useState("");
  const searchParams = useSearchParams();

  // Lấy redirect URL từ query parameters
  const redirectUrl = searchParams.get("redirect") || "/"; // Mặc định là '/' nếu không có redirect

  // Kiểm tra localStorage khi component mount
  useEffect(() => {
    const storedKey = localStorage.getItem("specialKey");
    if (storedKey) {
      // Nếu đã có specialKey trong localStorage, tự động thử lại
      const url = new URL(redirectUrl, window.location.origin);
      url.searchParams.set("specialKey", storedKey);
      window.location.href = url.toString();
    }
  }, [redirectUrl]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lưu specialKey vào localStorage
    localStorage.setItem("specialKey", keyInput);
    // Tạo URL mới với redirectUrl và thêm specialKey
    const url = new URL(redirectUrl, window.location.origin);
    url.searchParams.set("specialKey", keyInput);
    // Làm mới trang với URL mới
    window.location.href = url.toString();
  };

  return (
    <div className={styles.container}>
      <h1>No Authorized</h1>
      <p>
        You are not authorized to access this page. Please provide a valid
        special key.
      </p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={keyInput}
          onChange={(e) => setKeyInput(e.target.value)}
          placeholder="Enter special key"
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}
