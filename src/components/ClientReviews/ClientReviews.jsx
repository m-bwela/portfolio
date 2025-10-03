import React, { useState, useEffect } from "react";
import "./ClientReviews.css";

const reviews = [
  {
    name: "Jane Doe",
    company: "Acme Corp",
    review: "Working with you was a fantastic experience! The project was delivered on time and exceeded our expectations.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "John Smith",
    company: "Tech Solutions",
    review: "Professional, communicative, and highly skilled. I highly recommend for any web development needs.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emily Chen",
    company: "Startup Inc.",
    review: "Great attention to detail and creative solutions. Will definitely collaborate again!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Michael Brown",
    company: "Innovatech",
    review: "A true professional! Delivered high-quality work and was a pleasure to collaborate with.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  }
];

export default function ClientReviews() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="reviews-section">
      <h2 className="reviews-title">Client Reviews</h2>
      <div className="reviews-slideshow">
        <div className="review-card active">
          <img src={reviews[current].avatar} alt={reviews[current].name} className="review-avatar" />
          <div className="review-content">
            <p className="review-text">"{reviews[current].review}"</p>
            <p className="review-author">
              {reviews[current].name} <span className="review-company">({reviews[current].company})</span>
            </p>
          </div>
        </div>
        <div className="reviews-dots">
          {reviews.map((_, idx) => (
            <span
              key={idx}
              className={`dot${idx === current ? " active" : ""}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}