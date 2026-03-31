import { Link } from "react-router-dom";
import BlogLayout from "./BlogLayout";
import posts from "@/data/blog.json";

export default function BlogIndex() {
  return (
    <BlogLayout>
      <h1
        className="text-3xl font-bold ubuntu-font mb-8"
        style={{ color: "#55575b" }}
      >
        All Posts
      </h1>
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block bg-white border border-[#c2c3c7] border-l-[10px] border-b-[5px] rounded-none shadow-sm px-6 py-5 no-underline transition-shadow hover:shadow-md"
          >
            <h2
              className="text-xl font-bold ubuntu-font mb-1"
              style={{ color: "#55575b" }}
            >
              {post.title}
            </h2>
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
            <p
              className="text-sm ubuntu-font leading-relaxed mb-3"
              style={{ color: "#888a8f" }}
            >
              {post.excerpt}
            </p>
            <div className="flex gap-2 flex-wrap">
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
          </Link>
        ))}
      </div>
    </BlogLayout>
  );
}
