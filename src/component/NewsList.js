import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

export default function NewsList({ news }) {
  if (!Array.isArray(news)) {
    return <div>ไม่พบข้อมูลข่าว</div>;
  }
  return (
    <ul className="news-list">
      {news.map((item) => (
        <li key={item.id}>
          <Link href={`/news/${item.slug}`}>
            <Image src={`/images/news/${item.image}`} alt={item.title} width={500} height={600} />
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
