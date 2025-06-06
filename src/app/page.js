import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <section className="home-section">
      <h1>Welcome to NextNews!</h1>
      <p>ติดตามข่าวสารล่าสุดจากทั่วโลก ครอบคลุมทุกประเด็นสำคัญ ทั้งบันเทิง กีฬา เทคโนโลยี และอื่นๆ</p>
      <div className="home-actions">
        <Link href="/news" className="home-btn">
          ดูข่าวล่าสุด
        </Link>
        <Link href="/archive" className="home-btn secondary">
          คลังข่าวย้อนหลัง
        </Link>
      </div>
    </section>
  );
}
