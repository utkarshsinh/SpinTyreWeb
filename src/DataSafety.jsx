import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const dataRows = [
  {
    type: 'Personal info',
    examples: 'Name, username, email address, profile photo, bio',
    purpose: 'Account management, profile display, authentication, and support',
  },
  {
    type: 'Photos and videos',
    examples: 'Profile images, driving videos, and uploaded media',
    purpose: 'User content upload, storage, playback, and profile display',
  },
  {
    type: 'Audio',
    examples: 'Audio included in uploaded videos',
    purpose: 'Media upload and playback',
  },
  {
    type: 'User-generated content',
    examples: 'Posts, captions, comments, replies, and reports',
    purpose: 'Social sharing, moderation, safety, and support',
  },
  {
    type: 'App activity',
    examples: 'Likes, follows, saved posts, notifications, search, and interactions',
    purpose: 'Core app features, personalization, analytics, and safety',
  },
  {
    type: 'Device or other IDs',
    examples: 'Firebase or Google service identifiers',
    purpose: 'Authentication, analytics, diagnostics, and security',
  },
  {
    type: 'Diagnostics',
    examples: 'App performance, crash, and diagnostic data where collected by Google services',
    purpose: 'Reliability, debugging, and app improvement',
  },
];

function DataSafety() {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <Link to="/" className="nav-back">Back to Home</Link>

        <header className="privacy-header">
          <h1>SpinTyre Data Safety Summary</h1>
          <p className="last-updated">Last updated: July 20, 2026</p>
        </header>

        <section className="policy-section">
          <h2>Google Play Console answers</h2>
          <div className="answer-grid">
            <div>
              <h3>Does the app collect or share required user data types?</h3>
              <p>Yes.</p>
            </div>
            <div>
              <h3>Is all user data encrypted in transit?</h3>
              <p>Yes. Firebase and Google services use HTTPS/TLS.</p>
            </div>
            <div>
              <h3>Which account creation methods are supported?</h3>
              <p>Email/password, Google Sign-In, Facebook Login, and Apple Sign-In on supported platforms.</p>
            </div>
            <div>
              <h3>Delete account URL</h3>
              <p>Use <strong>https://spintyre.netlify.app/delete-account</strong>.</p>
            </div>
            <div>
              <h3>Can users request data deletion without deleting account?</h3>
              <p>No, unless SpinTyre adds a separate public workflow for partial data deletion.</p>
            </div>
          </div>
        </section>

        <section className="policy-section">
          <h2>Data types to disclose</h2>
          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Data type</th>
                  <th>Examples in SpinTyre</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {dataRows.map((row) => (
                  <tr key={row.type}>
                    <td>{row.type}</td>
                    <td>{row.examples}</td>
                    <td>{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="policy-section">
          <h2>Location disclosure</h2>
          <p>
            Do not select location unless SpinTyre is changed to request or
            collect location data. The Android app's location permissions are
            not active in the current manifest.
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
