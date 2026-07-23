import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/spintyre-logo.png';
import screenshotFeed from './assets/screenshot3.jpg';
import screenshotUpload from './assets/screenshot2.jpg';
import screenshotProfile from './assets/screenshot4.jpg';
import screenshotLogin from './assets/screenshot1.jpg';
import PrivacyPolicy from './PrivacyPolicy';
import DeleteAccount from './DeleteAccount';
import DataSafety from './DataSafety';

const APP_STORE_URL = 'https://apps.apple.com/us/app/spintyre/id6748114910';
const CONTACT_EMAIL = 'spintyre@myyahoo.com';

const features = [
  {
    title: 'Vertical car feed',
    copy: 'Full-screen clips with like, comment, save, and share — built for car culture, not generic scrolling.',
  },
  {
    title: 'Upload in seconds',
    copy: 'Pick a video from your library, add a caption, and publish to the community.',
  },
  {
    title: 'Find your crew',
    copy: 'Search creators, follow profiles, and grow a feed that matches your taste in cars.',
  },
  {
    title: 'Inbox that matters',
    copy: 'Likes, comments, replies, and new followers land in one place so you never miss the buzz.',
  },
  {
    title: 'Saved for later',
    copy: 'Bookmark clips from the feed and revisit them anytime under your profile.',
  },
  {
    title: 'Safety built in',
    copy: 'Report and block tools, content filters, and account deletion when you want a clean exit.',
  },
];

const platforms = [
  {
    name: 'iPhone & iPad',
    status: 'Available now',
    detail: 'Native SwiftUI app with Sign in with Apple, Google, Facebook, and email.',
  },
  {
    name: 'Android',
    status: 'Coming soon',
    detail: 'Native Jetpack Compose app sharing the same Firebase community as iOS.',
  },
  {
    name: 'Apple Watch',
    status: 'Companion',
    detail: 'Glance at followers, posts, and recent activity without unlocking your phone.',
  },
];

function StoreBadges({ className = '' }) {
  return (
    <div className={`store-badges ${className}`.trim()}>
      <a className="store-btn store-btn--apple" href={APP_STORE_URL} target="_blank" rel="noreferrer">
        <span className="store-btn__eyebrow">Download on the</span>
        <span className="store-btn__label">App Store</span>
      </a>
      <span className="store-btn store-btn--soon" aria-disabled="true">
        <span className="store-btn__eyebrow">Coming soon on</span>
        <span className="store-btn__label">Google Play</span>
      </span>
    </div>
  );
}

function HomePage() {
  return (
    <div className="site">
      <div className="atmosphere" aria-hidden="true">
        <div className="atmosphere__glow atmosphere__glow--left" />
        <div className="atmosphere__glow atmosphere__glow--right" />
        <div className="atmosphere__asphalt" />
      </div>

      <nav className="nav">
        <a className="nav__brand" href="#top">
          <img src={logo} alt="" className="nav__logo" />
          <span>SpinTyre</span>
        </a>
        <div className="nav__links">
          <a href="#features">Features</a>
          <a href="#platforms">Platforms</a>
          <a href="#faq">FAQ</a>
          <a className="nav__cta" href={APP_STORE_URL} target="_blank" rel="noreferrer">
            Get the app
          </a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero__copy">
          <img src={logo} alt="SpinTyre" className="hero__logo" />
          <p className="hero__brand">SpinTyre</p>
          <h1 className="hero__headline">Short-form car video for the culture.</h1>
          <p className="hero__support">
            Watch vertical car clips, follow creators, and share what you love — free on iPhone.
          </p>
          <StoreBadges />
        </div>

        <div className="hero__stage" aria-hidden="true">
          <div className="phone phone--hero">
            <div className="phone__bezel">
              <img src={screenshotFeed} alt="" className="phone__screen" />
            </div>
          </div>
          <div className="hero__orbit" />
        </div>
      </header>

      <section className="section section--proof" aria-label="Product proof">
        <p className="proof-line">
          Built for gearheads who live for the feed — not another generic social clone.
        </p>
      </section>

      <section className="section" id="features">
        <div className="section__intro">
          <p className="eyebrow">What you get</p>
          <h2>Everything the community needs to spin.</h2>
        </div>
        <div className="feature-rail">
          {features.map((feature) => (
            <article key={feature.title} className="feature">
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--showcase">
        <div className="section__intro">
          <p className="eyebrow">Inside the app</p>
          <h2>From feed to upload to profile.</h2>
          <p className="section__lede">
            Immersive playback, one-tap create, and profiles that show your garage of clips.
          </p>
        </div>
        <div className="showcase">
          <figure className="showcase__item">
            <div className="phone">
              <div className="phone__bezel">
                <img src={screenshotFeed} alt="SpinTyre vertical video feed" className="phone__screen" />
              </div>
            </div>
            <figcaption>
              <strong>Home</strong>
              Full-bleed car videos with side actions for like, comment, save, and share.
            </figcaption>
          </figure>
          <figure className="showcase__item">
            <div className="phone">
              <div className="phone__bezel">
                <img src={screenshotUpload} alt="SpinTyre new post upload screen" className="phone__screen" />
              </div>
            </div>
            <figcaption>
              <strong>Create</strong>
              Select a video, caption it up to 500 characters, and hit upload.
            </figcaption>
          </figure>
          <figure className="showcase__item">
            <div className="phone">
              <div className="phone__bezel">
                <img src={screenshotProfile} alt="SpinTyre creator profile" className="phone__screen" />
              </div>
            </div>
            <figcaption>
              <strong>Profile</strong>
              Follow creators, browse posts, and keep saved clips in one grid.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section" id="platforms">
        <div className="section__intro">
          <p className="eyebrow">Everywhere you drive</p>
          <h2>iPhone today. Android next. Watch on your wrist.</h2>
        </div>
        <div className="platform-list">
          {platforms.map((platform) => (
            <article key={platform.name} className="platform">
              <div className="platform__top">
                <h3>{platform.name}</h3>
                <span className="platform__status">{platform.status}</span>
              </div>
              <p>{platform.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--auth">
        <div className="auth-split">
          <div>
            <p className="eyebrow">Jump in fast</p>
            <h2>Sign in your way.</h2>
            <p className="section__lede">
              Email, Google, Facebook, and Sign in with Apple on iOS — then agree to the community
              guidelines and start scrolling.
            </p>
            <StoreBadges className="store-badges--inline" />
          </div>
          <div className="phone phone--auth">
            <div className="phone__bezel">
              <img src={screenshotLogin} alt="SpinTyre sign in screen" className="phone__screen" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="section__intro">
          <p className="eyebrow">FAQ</p>
          <h2>Straight answers.</h2>
        </div>
        <div className="faq">
          <details open>
            <summary>Is SpinTyre free?</summary>
            <p>Yes. Download and use SpinTyre free on the App Store.</p>
          </details>
          <details>
            <summary>Is there an Android app?</summary>
            <p>
              The Android app is built and sharing the same community backend. Google Play release is
              next — this site will update when it ships.
            </p>
          </details>
          <details>
            <summary>Does SpinTyre work on Apple Watch?</summary>
            <p>
              Yes. The Watch companion shows your profile stats and recent activity synced from the
              iPhone app.
            </p>
          </details>
          <details>
            <summary>How do I delete my account?</summary>
            <p>
              Delete from Profile → Edit Profile inside the app, or request deletion on the{' '}
              <Link to="/delete-account">Delete Account</Link> page.
            </p>
          </details>
          <details>
            <summary>Who can I contact?</summary>
            <p>
              Reach the team at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </details>
        </div>
      </section>

      <section className="section section--legal">
        <div className="section__intro">
          <p className="eyebrow">Trust</p>
          <h2>Privacy and account controls.</h2>
          <p className="section__lede">
            Review how SpinTyre handles data, or request account deletion for App Store and Play Store
            requirements.
          </p>
        </div>
        <div className="legal-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/delete-account">Delete Account</Link>
          <Link to="/data-safety">Data Safety</Link>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__brand">
          <img src={logo} alt="" />
          <span>SpinTyre</span>
        </div>
        <p>Short-form car video for the culture.</p>
        <p className="footer__meta">
          <Link to="/privacy-policy">Privacy</Link>
          <span aria-hidden="true">·</span>
          <Link to="/delete-account">Delete account</Link>
          <span aria-hidden="true">·</span>
          <Link to="/data-safety">Data safety</Link>
          <span aria-hidden="true">·</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
        </p>
        <p className="footer__copy">© {new Date().getFullYear()} SpinTyre. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/data-safety" element={<DataSafety />} />
      </Routes>
    </Router>
  );
}

export default App;
