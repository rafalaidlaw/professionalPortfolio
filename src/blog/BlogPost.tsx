import { useParams, Link } from "react-router-dom";
import BlogLayout from "./BlogLayout";
import posts from "@/data/blog.json";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <BlogLayout>
        <h1
          className="text-2xl font-bold ubuntu-font mb-4"
          style={{ color: "#55575b" }}
        >
          Post not found
        </h1>
        <Link
          to="/blog"
          className="text-sm ubuntu-font no-underline transition-colors hover:text-primary"
          style={{ color: "#888a8f" }}
        >
          Back to all posts
        </Link>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <Link
        to="/blog"
        className="text-sm ubuntu-font no-underline mb-6 inline-block transition-colors hover:text-primary"
        style={{ color: "#888a8f" }}
      >
        &larr; All Posts
      </Link>
      <article>
        <h1
          className="text-3xl font-bold ubuntu-font mb-2"
          style={{ color: "#55575b" }}
        >
          {post.title}
        </h1>
        <time
          className="text-xs ubuntu-font block mb-2"
          style={{ color: "#b0b2b8" }}
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <div className="flex gap-2 flex-wrap mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs ubuntu-font px-2 py-0.5 border border-[#c2c3c7] rounded-none"
              style={{ color: "#888a8f" }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className="ubuntu-font text-base leading-relaxed"
          style={{ color: "#55575b" }}
        >
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </BlogLayout>
  );
}
