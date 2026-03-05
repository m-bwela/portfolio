import React from "react";
import { Container } from "react-bootstrap";
import "./Blog.css";

const articles = [
  {
    icon: "🧠",
    title: "How I Built a Portfolio That Actually Gets Replies",
    date: "Jun 2025",
    readTime: "5 min read",
    summary:
      "A look at the design decisions, tech stack, and iteration process behind this portfolio — from first commit to polished product.",
    tags: ["React", "Design", "Portfolio"],
    url: null,
  },
  {
    icon: "⚡",
    title: "From Vanilla JS to React: Lessons From the Rewrite",
    date: "May 2025",
    readTime: "4 min read",
    summary:
      "What I learned migrating a multi-page static site to a modern React SPA with Vite, React Router, and component-driven architecture.",
    tags: ["React", "JavaScript", "Migration"],
    url: null,
  },
  {
    icon: "🔒",
    title: "Simple Auth Patterns Every Junior Dev Should Know",
    date: "Apr 2025",
    readTime: "6 min read",
    summary:
      "Breaking down JWT, session-based auth, and OAuth flows in plain language — with code examples you can actually use.",
    tags: ["Security", "Backend", "Node.js"],
    url: null,
  },
];

function Blog() {
  return (
    <Container>
      <section className="blog-section" id="blog">
        <h2 style={{ color: "#c084fc", fontWeight: 800, textAlign: "center" }}>
          Blog &amp; Articles
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#d1c4e9",
            marginBottom: "1.5rem",
          }}
        >
          Thoughts on code, design, and building things that matter.
        </p>
        <div className="blog-grid">
          {articles.map((a, i) => {
            const Tag = a.url ? "a" : "div";
            const linkProps = a.url
              ? { href: a.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Tag key={i} className="blog-card" {...linkProps}>
                <div className="blog-card-icon">{a.icon}</div>
                <div className="blog-card-content">
                  <h3>{a.title}</h3>
                  <div className="blog-card-meta">
                    <span>{a.date}</span>
                    <span>·</span>
                    <span>{a.readTime}</span>
                  </div>
                  <p>{a.summary}</p>
                  <div className="blog-tags">
                    {a.tags.map((t) => (
                      <span key={t} className="blog-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Tag>
            );
          })}
        </div>
        <div className="blog-coming-soon">
          More articles coming soon — stay tuned ✍️
        </div>
      </section>
    </Container>
  );
}

export default Blog;
