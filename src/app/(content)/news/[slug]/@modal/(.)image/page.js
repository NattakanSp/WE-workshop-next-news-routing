import ModalBackdrop from "@/component/modal-backdrop";
import { getNewsItem } from "@/data/news";
import { notFound } from "next/navigation";
import Image from "next/image";
import ModalCloseButton from "@/component/modalCloseButton";

export default async function InterceptedImageModal({ params }) {
  const { slug } = await params;

  const newsItem = await getNewsItem(slug);

  if (!newsItem) notFound();

  return (
    <ModalBackdrop>
      <div
        className="modal-backdrop"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
      >
        <dialog
          open
          className="modal"
          style={{
            border: "none",
            borderRadius: "12px",
            padding: "1.5rem",
            background: "#fff",
            boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={600} height={500} />
          <br />
          <ModalCloseButton />
        </dialog>
      </div>
    </ModalBackdrop>
  );
}
