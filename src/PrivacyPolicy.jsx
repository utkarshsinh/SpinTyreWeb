import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <Link to="/" className="nav-back">Back to Home</Link>
        
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <section className="policy-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to SpinTyre ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our social video platform for car enthusiasts.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the "Service").
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Information We Collect</h2>
          
          <h3>2.1 Personal Information</h3>
          <p>We may collect personal information that you voluntarily provide to us, including:</p>
          <ul>
            <li>Account information (username, email address, profile picture)</li>
            <li>Authentication data (when you sign in with Google, Apple, or email)</li>
            <li>Profile information (bio, car details, preferences)</li>
            <li>User-generated content (videos, comments, likes)</li>
            <li>Communication preferences</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <p>We automatically collect certain information when you use our Service:</p>
          <ul>
            <li>Device information (device type, operating system, unique device identifiers)</li>
            <li>Usage data (app features used, time spent, interactions)</li>
            <li>Log data (IP address, browser type, access times)</li>
            <li>Location data (if you grant permission)</li>
            <li>Analytics data (app performance, crash reports)</li>
          </ul>

          <h3>2.3 Third-Party Information</h3>
          <p>We may receive information from third-party services when you:</p>
          <ul>
            <li>Sign in using Google or Apple authentication</li>
            <li>Connect social media accounts</li>
            <li>Use third-party features integrated into our app</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li><strong>Provide and maintain the Service:</strong> To deliver our social video platform and ensure it functions properly</li>
            <li><strong>User authentication:</strong> To verify your identity and secure your account</li>
            <li><strong>Personalization:</strong> To customize your experience and show relevant content</li>
            <li><strong>Communication:</strong> To send notifications, updates, and respond to your inquiries</li>
            <li><strong>Analytics and improvement:</strong> To analyze usage patterns and improve our Service</li>
            <li><strong>Safety and security:</strong> To detect and prevent fraud, abuse, and violations of our terms</li>
            <li><strong>Legal compliance:</strong> To comply with applicable laws and regulations</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
          
          <h3>4.1 With Your Consent</h3>
          <p>We may share your information when you explicitly consent to such sharing.</p>

          <h3>4.2 Service Providers</h3>
          <p>We may share information with trusted third-party service providers who assist us in:</p>
          <ul>
            <li>Hosting and maintaining our infrastructure</li>
            <li>Processing payments</li>
            <li>Analyzing usage data</li>
            <li>Providing customer support</li>
            <li>Delivering notifications</li>
          </ul>

          <h3>4.3 Legal Requirements</h3>
          <p>We may disclose your information if required by law or in response to valid legal requests.</p>

          <h3>4.4 Safety and Security</h3>
          <p>We may share information to protect the safety and security of our users and the public.</p>

          <h3>4.5 Business Transfers</h3>
          <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</p>
        </section>

        <section className="policy-section">
          <h2>5. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
        </section>

        <section className="policy-section">
          <h2>6. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to provide our Service and fulfill the purposes outlined in this Privacy Policy. We may retain certain information for longer periods if required by law or for legitimate business purposes.</p>
        </section>

        <section className="policy-section">
          <h2>7. Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information:</p>
          <ul>
            <li><strong>Access:</strong> Request access to your personal information</li>
            <li><strong>Correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
            <li><strong>Objection:</strong> Object to certain processing of your information</li>
            <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
          </ul>
          <p>To exercise these rights, please contact us at <a href="mailto:spintyre@myyahoo.com">spintyre@myyahoo.com</a>.</p>
        </section>

        <section className="policy-section">
          <h2>8. Children's Privacy</h2>
          <p>SpinTyre is designed to be enjoyed by car enthusiasts of all ages, providing a family-friendly social video platform for sharing automotive content. However, our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <a href="mailto:spintyre@myyahoo.com">spintyre@myyahoo.com</a>.</p>
        </section>

        <section className="policy-section">
          <h2>9. International Data Transfers</h2>
          <p>Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.</p>
        </section>

        <section className="policy-section">
          <h2>10. Third-Party Links and Services</h2>
          <p>Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.</p>
        </section>

        <section className="policy-section">
          <h2>11. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy in the app and updating the "Last updated" date. Your continued use of the Service after such changes constitutes acceptance of the updated Privacy Policy.</p>
        </section>

        <section className="policy-section">
          <h2>12. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:spintyre@myyahoo.com">spintyre@myyahoo.com</a></p>
            <p><strong>Subject:</strong> Privacy Policy Inquiry</p>
          </div>
        </section>

        <footer className="privacy-footer">
          <p>&copy; {new Date().getFullYear()} SpinTyre. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 