"use client";

import { useState } from "react";
import styles from "./NoAuthorized.module.css";

export default function NoAuthorized() {
  const [keyInput, setKeyInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Thay vì dùng router.push, ta làm mới trang với specialKey
    window.location.href = `/?specialKey=${keyInput}`;
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
