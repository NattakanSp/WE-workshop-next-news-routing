import { getAllNews } from "@/data/news";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function NewsContentPage({ params }) {
  const { slug } = await params;
  const news = await getAllNews();
  const newsItem = news.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${slug}/image`}>
          <Image src={`/images/news/${newsItem.image}`} alt={newsItem.title} width={500} height={500} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
