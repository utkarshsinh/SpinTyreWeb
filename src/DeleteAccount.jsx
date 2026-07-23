import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const contactEmail = 'spintyre@myyahoo.com';

function DeleteAccount() {
  const mailto = `mailto:${contactEmail}?subject=SpinTyre%20Account%20Deletion%20Request&body=Please%20delete%20my%20SpinTyre%20account%20and%20associated%20data.%0A%0AAccount%20email%3A%20%0AUsername%3A%20%0ASign-in%20method%20(email%2Fpassword%2C%20Google%2C%20or%20Apple)%3A%20%0AAdditional%20details%3A%20`;

  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <Link to="/" className="nav-back">Back to Home</Link>

        <header className="privacy-header">
          <h1>Delete Your SpinTyre Account</h1>
          <p className="last-updated">Last updated: July 20, 2026</p>
        </header>

        <section className="policy-section">
          <h2>Delete inside the app</h2>
          <p>
            The fastest way to delete your SpinTyre account is in the app:
            open Profile → Edit Profile → Delete Account. That removes your
            profile, posts, comments, and related data.
          </p>
        </section>

        <section className="policy-section">
          <h2>Account deletion request</h2>
          <p>
            SpinTyre is a car video sharing app operated by the SpinTyre developer,
            Utkarsh Sinh. Prefer in-app deletion when you can still sign in. Use
            this page to request permanent deletion by email if you cannot access
            the app.
          </p>
          <p>
            Send your request from the email address connected to your SpinTyre
            account whenever possible.
          </p>
          <p>
            <a className="request-button" href={mailto}>Email account deletion request</a>
          </p>
        </section>

        <section className="policy-section">
          <h2>How to request deletion by email</h2>
          <ol>
            <li>Email <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</li>
            <li>Use the subject line: SpinTyre Account Deletion Request.</li>
            <li>Include your SpinTyre account email, username, and sign-in method.</li>
            <li>State that you want your SpinTyre account and associated data deleted.</li>
            <li>We may ask for additional verification before deleting the account.</li>
          </ol>
        </section>

        <section className="policy-section">
          <h2>Data that will be deleted</h2>
          <ul>
            <li>Firebase Authentication account and login identifiers</li>
            <li>Profile information, including name, username, email address, bio, and profile image</li>
            <li>Uploaded videos, images, posts, captions, comments, replies, and saved post records</li>
            <li>Likes, follows, followers, notification records, and account-specific moderation metadata</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Data that may be retained</h2>
          <p>
            Some information may be retained for a limited period where required
            for legal, safety, fraud-prevention, abuse-prevention, dispute, or
            compliance purposes. Retained information will not be used to operate
            an active SpinTyre account.
          </p>
          <ul>
            <li>Records required by law or needed to resolve disputes</li>
            <li>Security, abuse-prevention, and moderation records</li>
            <li>Aggregated or anonymized analytics that no longer identify your account</li>
            <li>Content or records another user independently provided, such as their own reports</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>Deleting data without deleting the account</h2>
          <p>
            This page is for full account deletion. SpinTyre users may delete
            supported posts, comments, and replies inside the app where those
            controls are available. SpinTyre does not currently provide a
            separate public web process for partial personal-data deletion
            without deleting the account.
          </p>
        </section>

        <footer className="privacy-footer">
          <p>&copy; {new Date().getFullYear()} SpinTyre. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default DeleteAccount;
