import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <section id="home">
      <h1>About NextNews</h1>
      <p>
        NextNews is your go-to platform for concise and unbiased news. We aim to deliver information that matters
        without overwhelming you.
      </p>
      <Link href="/">Back to Home</Link>
    </section>
  );
}
