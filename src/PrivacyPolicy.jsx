import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <Link to="/" className="nav-back">Back to Home</Link>
        
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: November 7, 2026</p>
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
            <li>Account information (full name, username, email address, profile picture)</li>
            <li>Authentication data (when you sign in with Google, Apple, Facebook, or email)</li>
            <li>Profile information (bio, profile settings, followers, following, saved posts, and block lists)</li>
            <li>User-generated content (videos, images, captions, comments, replies, reports, likes, and follows)</li>
            <li>Audio recorded in videos you upload, and information visible or audible in that content</li>
            <li>Your email address, message, and attachments when you contact support</li>
            <li>Notification, moderation, and account status records</li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <p>The app and the service providers it uses process information needed to operate the Service:</p>
          <ul>
            <li>Technical information, such as device and operating-system details, app version, and service identifiers</li>
            <li>App activity you choose to perform, such as likes, follows, saved posts, comments, blocks, and notification read status</li>
            <li>Network and diagnostic information, such as IP addresses, service access, and SDK performance information, processed by authentication and cloud providers for operation, reliability, security, and service analytics</li>
          </ul>
          <p>
            SpinTyre does not request device location permissions. This does not mean that no
            location-related information is processed: sign-in providers may infer general
            location from your IP address for security, and uploaded videos may reveal
            places in their visible or audible content. Older app versions may also
            upload embedded location metadata.
          </p>
          <p>
            The app does not use Firebase Analytics to measure app usage. Authentication and
            cloud services still process the operational and diagnostic information described
            above. The version 3.1 update removes embedded location metadata before video
            upload while preserving the recording and its audio. Availability of that update
            varies by platform and release stage; older versions may retain this metadata.
            Review the content before sharing it.
          </p>

          <h3>2.3 Third-Party Information</h3>
          <p>We may receive information from third-party services when you:</p>
          <ul>
            <li>Sign in using Google, Apple, or Facebook authentication</li>
          </ul>

          <h3>2.4 Website Visits</h3>
          <p>
            This website is hosted by Netlify. When you visit, your browser sends request
            information, including your IP address, browser information, and the page or
            resource requested, to Netlify so it can deliver and protect the website.
            Following an app-store or other external link takes you to a service with
            its own privacy practices.
          </p>
        </section>

        <section className="policy-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li><strong>Provide and maintain the Service:</strong> To deliver our social video platform and ensure it functions properly</li>
            <li><strong>User authentication:</strong> To verify your identity and secure your account</li>
            <li><strong>Feed and social features:</strong> To display posts, followed accounts, saved content, and your chosen settings</li>
            <li><strong>Communication:</strong> To send notifications, updates, and respond to your inquiries</li>
            <li><strong>Reliability and improvement:</strong> To diagnose problems and improve our Service</li>
            <li><strong>Safety and security:</strong> To detect and prevent fraud, abuse, and violations of our terms</li>
            <li><strong>Legal compliance:</strong> To comply with applicable laws and regulations</li>
          </ul>
          <p>
            SpinTyre uses account and content data to operate the Service. We do not
            export it for off-app marketing or advertising audiences.
          </p>
        </section>

        <section className="policy-section">
          <h2>4. Information Sharing and Disclosure</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
          
          <h3>4.1 With Your Consent</h3>
          <p>We may share your information when you explicitly consent to such sharing.</p>

          <h3>4.2 Service Providers</h3>
          <p>We may share information with trusted third-party service providers who assist us in:</p>
          <ul>
            <li>Providing authentication through Firebase Authentication and the Google, Apple, or Facebook sign-in option you choose</li>
            <li>Hosting user profiles, posts, comments, notifications, and moderation data in Firebase Firestore</li>
            <li>Storing uploaded images and videos in Firebase Storage</li>
            <li>Processing technical and diagnostic information to operate, secure, analyze, and improve those services</li>
            <li>Hosting and delivering this website through Netlify</li>
            <li>Handling email through our email provider when you contact support</li>
            <li>Delivering app notifications and safety features</li>
          </ul>
          <p>
            Sign-in providers also process information under their own privacy policies.
            Depending on the provider and platform, this can include account, device,
            diagnostic, and usage information for their own security, analytics, and
            service improvement. SpinTyre&apos;s decision not to use Firebase Analytics
            does not disable processing by every authentication or cloud service.
          </p>
          <p>
            You can learn more in the{' '}
            <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">Firebase privacy information</a>,{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google Privacy Policy</a>,{' '}
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">Apple Privacy Policy</a>,{' '}
            <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noreferrer">Meta Privacy Policy</a>, and{' '}
            <a href="https://www.netlify.com/privacy/" target="_blank" rel="noreferrer">Netlify Privacy Statement</a>.
          </p>
          <p>
            Support and account-deletion requests sent to{' '}
            <a href="mailto:spintyre@myyahoo.com">spintyre@myyahoo.com</a> are reviewed
            by SpinTyre&apos;s owner, who is the only SpinTyre operator with access to
            that inbox. Our email provider processes email delivery and storage.
          </p>

          <h3>4.3 Legal Requirements</h3>
          <p>We may disclose your information if required by law or in response to valid legal requests.</p>

          <h3>4.4 Safety and Security</h3>
          <p>We may share information to protect the safety and security of our users and the public.</p>

          <h3>4.5 Business Transfers</h3>
          <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</p>
        </section>

        <section className="policy-section">
          <h2>5. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. User data sent between the app and Firebase or Google services is encrypted in transit using HTTPS/TLS. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
        </section>

        <section className="policy-section">
          <h2>6. Data Retention</h2>
          <p>We retain your personal information for as long as necessary to provide our Service and fulfill the purposes outlined in this Privacy Policy. We may retain certain information for longer periods if required by law or for legitimate business purposes.</p>
          <p>
            Account deletion removes the active account and associated app data described
            on our <Link to="/delete-account">account deletion page</Link>. Security and
            moderation records, restricted recovery or audit copies, and support messages
            and attachments may be retained where needed for the purposes described there.
            Service providers may retain their own security and diagnostic records under
            their retention practices. These retained records do not keep an active
            SpinTyre account open.
          </p>
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
          <p>To exercise these rights, please contact us at <a href="mailto:spintyre@myyahoo.com">spintyre@myyahoo.com</a>. To request full account deletion, visit the <Link to="/delete-account">SpinTyre account deletion page</Link>.</p>
        </section>

        <section className="policy-section">
          <h2>8. Children's Privacy</h2>
          <p>Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us at <a href="mailto:spintyre@myyahoo.com">spintyre@myyahoo.com</a>.</p>
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
