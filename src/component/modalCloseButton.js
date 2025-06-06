"use client";
import { useRouter } from "next/navigation";

export default function ModalCloseButton() {
  const router = useRouter();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        router.back();
      }}
      style={{
        marginTop: "1.5rem",
        padding: "0.5rem 1.2rem",
        borderRadius: "6px",
        border: "none",
        background: "#6366f1",
        color: "#fff",
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      Close
    </button>
  );
}
