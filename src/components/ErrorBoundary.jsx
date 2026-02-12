import React from 'react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <section style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem',
        }}>
          <div>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#e0d4ff',
              marginBottom: '1rem',
            }}>
              Something went wrong
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              marginBottom: '2rem',
              fontSize: '1.1rem',
            }}>
              An unexpected error occurred. Please try refreshing.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.href = '/';
              }}
              style={{
                padding: '0.8rem 2rem',
                background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
                color: '#fff',
                fontWeight: 600,
                borderRadius: '2rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                boxShadow: '0 4px 16px rgba(124,58,237,0.3)',
              }}
            >
              ← Back to Home
            </button>
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}
