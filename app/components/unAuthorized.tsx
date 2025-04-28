"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import styles from "./NoAuthorized.module.css";

export default function NoAuthorized() {
  const [keyInput, setKeyInput] = useState("");
  const searchParams = useSearchParams();

  // Lấy redirect URL và invalidKey từ query parameters
  const redirectUrl = searchParams?.get("redirect") || "/";
  const isInvalidKey = searchParams?.get("invalidKey") === "true";

  // Kiểm tra invalidKey và xóa localStorage nếu cần
  useEffect(() => {
    if (isInvalidKey) {
      console.log("Invalid key detected, clearing localStorage");
      localStorage.removeItem("specialKey");
    }
  }, [isInvalidKey]);

  // Kiểm tra localStorage khi component mount
  useEffect(() => {
    const storedKey = localStorage.getItem("specialKey");
    if (storedKey && !isInvalidKey) {
      // Nếu có specialKey trong localStorage và không phải invalid, tự động thử lại
      const url = new URL(redirectUrl, window.location.origin);
      url.searchParams.set("specialKey", storedKey);
      window.location.href = url.toString();
    }
  }, [redirectUrl, isInvalidKey]);

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
        {isInvalidKey && (
          <span style={{ color: "red" }}>
            {" "}
            Invalid key entered. Please try again.
          </span>
        )}
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
