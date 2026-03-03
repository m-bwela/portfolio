import React, { useState, useEffect } from "react";
import "./ClientReviews.css";

const reviews = [
  {
    name: "Amina Odhiambo",
    company: "Safaricom PLC",
    review: "Exceptional work on our customer portal! The responsive design works flawlessly across all devices our users rely on.",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    rate: 5
  },
  {
    name: "Brian Kipchoge",
    company: "Twiga Foods",
    review: "Delivered a powerful supply chain dashboard that transformed how we track produce distribution across Nairobi.",
    avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=150&h=150&fit=crop&crop=face",
    rate: 5
  },
  {
    name: "Faith Wanjiku",
    company: "M-KOPA Solar",
    review: "Professional and highly skilled. The payment integration with M-Pesa was seamless and boosted our conversions.",
    avatar: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=150&h=150&fit=crop&crop=face",
    rate: 5
  },
  {
    name: "Kevin Mwangi",
    company: "Andela Kenya",
    review: "A true professional! Built a robust internal tool that our engineering team uses daily. Highly recommend.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rate: 5
  },
  {
    name: "Grace Akinyi",
    company: "Kenya Airways",
    review: "Great attention to detail on our booking interface redesign. User satisfaction scores went up significantly!",
    avatar: "https://images.unsplash.com/photo-1523824921871-d6f1a15151f1?w=150&h=150&fit=crop&crop=face",
    rate: 4
  },
  {
    name: "Daniel Mutua",
    company: "Cellulant",
    review: "Delivered a scalable fintech solution on time and within budget. Communication throughout was excellent.",
    avatar: "https://ui-avatars.com/api/?name=Daniel+Mutua&background=1D3557&color=fff&size=150&rounded=true",
    rate: 5
  },
  {
    name: "Lilian Chebet",
    company: "Jumia Kenya",
    review: "Their creativity and technical skills brought our e-commerce vision to life in ways we never imagined.",
    avatar: "https://ui-avatars.com/api/?name=Lilian+Chebet&background=D4A373&color=fff&size=150&rounded=true",
    rate: 4
  },
  {
    name: "James Otieno",
    company: "Equity Bank",
    review: "Reliable, efficient, and security-conscious. The online banking features they built are world-class.",
    avatar: "https://ui-avatars.com/api/?name=James+Otieno&background=006D77&color=fff&size=150&rounded=true",
    rate: 5
  },
  {
    name: "Nancy Wambui",
    company: "Sendy Logistics",
    review: "Exceeded our expectations with the real-time tracking dashboard. Our drivers and clients love it.",
    avatar: "https://ui-avatars.com/api/?name=Nancy+Wambui&background=3A0CA3&color=fff&size=150&rounded=true",
    rate: 4
  },
  {
    name: "Patrick Kamau",
    company: "iPay Africa",
    review: "A pleasure to work with! Delivered a top-notch payment gateway integration ahead of schedule.",
    avatar: "https://ui-avatars.com/api/?name=Patrick+Kamau&background=38B000&color=fff&size=150&rounded=true",
    rate: 5
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