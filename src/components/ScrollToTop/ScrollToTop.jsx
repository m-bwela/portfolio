import React from 'react';
import './ScrollToTop.css';

export default function ScrollToTop() {
    return(
        <button className="scroll-to-top-btn" onClick={() => window.scrollTo(0, 0)}>
            ↑
        </button>
    )
}
