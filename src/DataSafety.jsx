import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const dataRows = [
  {
    type: 'Account and profile',
    examples: 'Name, username, email address, account identifier, profile photo, and bio',
    purpose: 'Signing in, managing your account, displaying your profile, and support',
  },
  {
    type: 'Photos, videos, and audio',
    examples: 'Profile images and uploaded videos, including recorded audio and visible or audible content',
    purpose: 'Storing and displaying the media you choose to share',
  },
  {
    type: 'Content and social activity',
    examples: 'Captions, comments, replies, likes, follows, saved posts, and notifications',
    purpose: 'Sharing content, connecting with creators, and managing your feed and inbox',
  },
  {
    type: 'Safety and support',
    examples: 'Reports, block lists, moderation records, and information you send to support',
    purpose: 'Responding to requests, enforcing community rules, and protecting accounts',
  },
  {
    type: 'Technical and diagnostic information',
    examples: 'Device and operating-system details, service identifiers, IP addresses, and SDK diagnostics',
    purpose: 'Authentication, service operation, reliability, security, and provider service analytics',
  },
  {
    type: 'Website requests',
    examples: 'IP address, browser information, and requested pages or resources',
    purpose: 'Delivering and protecting this website through Netlify',
  },
];

function DataSafety() {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <Link to="/" className="nav-back">Back to Home</Link>

        <header className="privacy-header">
          <h1>Your Data in SpinTyre</h1>
          <p className="last-updated">Last updated: November 7, 2026</p>
        </header>

        <section className="policy-section">
          <h2>What we use and why</h2>
          <p>
            SpinTyre uses account details, the content you share, and your app activity to
            provide its social video features. Authentication and cloud providers also
            process technical information to run, protect, analyze, and improve their services.
          </p>
          <div className="data-table-wrap">
            <table className="data-table">
              <caption>Information used by SpinTyre and its service providers</caption>
              <thead>
                <tr>
                  <th scope="col">Information</th>
                  <th scope="col">Examples</th>
                  <th scope="col">Why it is used</th>
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row) => (
                  <tr key={row.type}>
                    <th scope="row">{row.type}</th>
                    <td data-label="Examples">{row.examples}</td>
                    <td data-label="Why it is used">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="policy-section">
          <h2>Sharing content and using sign-in providers</h2>
          <p>
            Profile details, posts, comments, and social activity that you share can be
            visible to other people using SpinTyre. Review your videos before uploading:
            they may include voices, faces, or places in the recording. The version 3.1
            update removes embedded location metadata before video upload. Availability
            varies by platform and release stage; older versions may retain it.
          </p>
          <p>
            Firebase provides account, database, and media services. If you choose Google,
            Apple, or Facebook sign-in, that provider processes information under its own
            privacy policy, including information for sign-in, security, and its applicable
            analytics and service-improvement purposes. The{' '}
            <Link to="/privacy-policy">Privacy Policy</Link> explains these services in more detail.
          </p>
        </section>

        <section className="policy-section">
          <h2>Location and diagnostics</h2>
          <p>
            The app does not request device location permissions. Sign-in providers may
            still estimate general location from an IP address to protect accounts, and
            videos can contain location information you choose to share.
          </p>
          <p>
            SpinTyre does not use Firebase Analytics to measure app usage. This does not
            disable operational, diagnostic, or service-analytics information processed
            by authentication and cloud services.
          </p>
        </section>

        <section className="policy-section">
          <h2>Your choices</h2>
          <ul>
            <li>Edit the profile information you share with the community.</li>
            <li>Use the app&apos;s available controls to remove your posts, comments, or replies.</li>
            <li>Report content and block accounts when needed.</li>
            <li>Follow the <Link to="/delete-account">account deletion instructions</Link> to request removal of your account and associated data.</li>
          </ul>
          <p>
            For privacy questions or help with an account request, contact{' '}
            <a href="mailto:spintyre@myyahoo.com">spintyre@myyahoo.com</a>.
          </p>
        </section>

        <footer className="privacy-footer">
          <p>&copy; {new Date().getFullYear()} SpinTyre. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default DataSafety;
