import React from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';
import './Terms.css';

export default function Terms() {
  usePageTitle('Terms of Service');
  return (
    <div className="terms-container">
      <div className="home-link-wrap">
        <Link to="/" className="home-link">Home🏠</Link>
      </div>
      
      <div className="terms-content">
        <h1 className="terms-title">Terms of Service</h1>
        
        <div className="terms-section">
          <h2>1. Introduction</h2>
          <p>Welcome to Tye Nzambu's portfolio website. By accessing and using this website, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
          <p>If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>
        </div>

        <div className="terms-section">
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily view the materials on Tye Nzambu's portfolio website for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose;</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website;</li>
            <li>Remove any copyright or other proprietary notations from the materials;</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated at any time. Upon terminating your viewing of these materials, you must destroy any downloaded materials in your possession.</p>
        </div>

        <div className="terms-section">
          <h2>3. Disclaimer</h2>
          <p>The materials on Tye Nzambu's portfolio website are provided on an 'as is' basis. Tye Nzambu makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </div>

        <div className="terms-section">
          <h2>4. Limitations</h2>
          <p>In no event shall Tye Nzambu be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tye Nzambu's website, even if Tye Nzambu has been notified orally or in writing of the possibility of such damage.</p>
        </div>

        <div className="terms-section">
          <h2>5. Accuracy of Materials</h2>
          <p>The materials appearing on Tye Nzambu's website could include technical, typographical, or photographic errors. Tye Nzambu does not warrant that any of the materials on the website are accurate, complete or current. Tye Nzambu may make changes to the materials contained on the website at any time without notice.</p>
        </div>

        <div className="terms-section">
          <h2>6. Links</h2>
          <p>Tye Nzambu has not reviewed all of the sites linked to this website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Tye Nzambu of the site. Use of any such linked website is at the user's own risk.</p>
        </div>

        <div className="terms-section">
          <h2>7. Modifications</h2>
          <p>Tye Nzambu may revise these terms of service for the website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
        </div>

        <div className="terms-section">
          <h2>8. Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of Kenya and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
        </div>

        <div className="terms-section last-updated">
          <p>Last Updated: October 15, 2025</p>
        </div>
      </div>
    </div>
  );
}