import { notFound } from "next/navigation";
import { blogPosts } from "../blogData";
import styles from "./blogcss.module.css";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const blog = blogPosts.find((post) => post.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <section className={styles.page}>
      <article className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.meta}>
            Written by <span>{blog.author}</span>
          </p>
        </header>

        {/* Content */}
        <div
          className={styles.blogContent}
          dangerouslySetInnerHTML={{ __html: blog.html }}
        />

        {/* Connect With Us */}
        <div className={styles.ctaWrapper}>
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=bids@ascentstandard.com"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.ctaButton}
>
  Connect with us
</a>

        </div>
      </article>
    </section>
  );
}
