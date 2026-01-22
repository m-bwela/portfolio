import React, { useState, useEffect } from "react";
import "./ClientReviews.css";

const reviews = [
  {
    name: "Jane Doe",
    company: "Acme Corp",
    review: "Working with you was a fantastic experience! The project was delivered on time and exceeded our expectations.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rate: 5
  },
  {
    name: "John Smith",
    company: "Tech Solutions",
    review: "Professional, communicative, and highly skilled. I highly recommend for any web development needs.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rate: 4
  },
  {
    name: "Emily Chen",
    company: "Startup Inc.",
    review: "Great attention to detail and creative solutions. Will definitely collaborate again!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rate: 5
  },
  {
    name: "Michael Brown",
    company: "Innovatech",
    review: "A true professional! Delivered high-quality work and was a pleasure to collaborate with.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    rate: 5
  }, 
  {
    name: "Sarah Connor",
    company: "Cyberdyne Systems",
    review: "An exceptional partner! Their expertise in AI development is unmatched.",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
    rate: 4
  },
  {
    name: "David Lee",
    company: "NextGen Tech",
    review: "Delivered a robust and scalable solution that perfectly met our business needs.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rate: 5
  },
  {
    name: "Anna Kim",
    company: "Creative Minds",
    review: "Their creativity and technical skills brought our vision to life in ways we never imagined.",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    rate: 4
  }
];

export default function ClientReviews() {
  const [cardStates, setCardStates] = useState([0, 1, 2]); // Each card shows different review initially

  // Each card cycles independently with different intervals
  useEffect(() => {
    const intervals = [
      // Card 1: changes every 4 seconds
      setInterval(() => {
        setCardStates(prev => [prev[0] === reviews.length - 1 ? 0 : prev[0] + 1, prev[1], prev[2]]);
      }, 4000),
      // Card 2: changes every 5 seconds
      setInterval(() => {
        setCardStates(prev => [prev[0], prev[1] === reviews.length - 1 ? 0 : prev[1] + 1, prev[2]]);
      }, 5000),
      // Card 3: changes every 6 seconds
      setInterval(() => {
        setCardStates(prev => [prev[0], prev[1], prev[2] === reviews.length - 1 ? 0 : prev[2] + 1]);
      }, 6000)
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="client-reviews-container">
      <section className="reviews-section">
        <h2 className="reviews-title">Client Reviews</h2>
        <div className="reviews-slideshow">
          <div className="reviews-cards-container">
            {[0, 1, 2].map((cardIndex) => (
              <div key={cardIndex} className="review-card">
                <img
                  src={reviews[cardStates[cardIndex]].avatar}
                  alt={reviews[cardStates[cardIndex]].name}
                  className="review-avatar"
                />
                <div className="review-content">
                  <p className="review-text">"{reviews[cardStates[cardIndex]].review}"</p>
                  <p className="review-author">
                    {reviews[cardStates[cardIndex]].name} <span className="review-company">({reviews[cardStates[cardIndex]].company})</span>
                  </p>
                  <p className="review-rating">Rating: {"★".repeat(reviews[cardStates[cardIndex]].rate)}{"☆".repeat(5 - reviews[cardStates[cardIndex]].rate)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}