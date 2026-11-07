import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import logo from './assets/spintyre-logo.png';
import screenshotFeed from './assets/screenshot3.jpg';
import screenshotUpload from './assets/screenshot2.jpg';
import screenshotProfile from './assets/screenshot4.jpg';
import PrivacyPolicy from './PrivacyPolicy';
import DeleteAccount from './DeleteAccount';
import DataSafety from './DataSafety';

const APP_STORE_URL = 'https://apps.apple.com/us/app/spintyre/id6748114910';
const CONTACT_EMAIL = 'spintyre@myyahoo.com';

function Icon({ name, className = '' }) {
  const paths = {
    arrow: <><path d="M5 12h14M12 5l7 7-7 7" /></>,
    play: <path d="m9 5 11 7-11 7V5Z" />,
    plus: <path d="M12 5v14M5 12h14" />,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M17 5a3 3 0 0 1 0 6M19 21v-3a6 6 0 0 0-2-4.5" /></>,
    save: <path d="M6 4h12v17l-6-4-6 4V4Z" />,
    shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
    phone: <><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M10 18h4" /></>,
    watch: <><rect x="6" y="7" width="12" height="10" rx="3" /><path d="m8 7 1-5h6l1 5M8 17l1 5h6l1-5M12 10v3h3" /></>,
  };
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function DownloadButton({ secondary = false }) {
  return (
    <a className={`button ${secondary ? 'button--light' : 'button--primary'}`} href={APP_STORE_URL} target="_blank" rel="noreferrer">
      <span>Get SpinTyre for iPhone</span><Icon name="arrow" />
    </a>
  );
}

const previews = [
  { id: 'watch', label: 'Watch', number: '01', title: 'A feed with a shared obsession.', description: 'Car clips, full screen. Watch the details, join the comments, and save the moments you want to come back to.', image: screenshotFeed, alt: 'SpinTyre iPhone feed showing a car video and controls for liking, commenting, saving and sharing', points: ['Vertical video playback', 'Comments and replies', 'Saved clips, always close'] },
  { id: 'create', label: 'Create', number: '02', title: 'Your car. Your point of view.', description: 'Bring your latest build, a favourite detail, or a moment from a meet. Choose a video from your library, add a caption, and share it.', image: screenshotUpload, alt: 'SpinTyre iPhone upload screen with a video picker, caption field and upload button', points: ['Upload from your library', 'Add your own caption', 'Keep the original sound'] },
  { id: 'connect', label: 'Connect', number: '03', title: 'Find the people behind the passion.', description: 'Explore creators, follow the accounts you enjoy, and give your own clips a home on your profile.', image: screenshotProfile, alt: 'SpinTyre iPhone creator profile showing a follow button and a grid of car videos', points: ['Search for creators', 'Follow and view profiles', 'Notifications for social activity'] },
];

const features = [
  { icon: 'play', title: 'Stay for the clips.', copy: 'A vertical video feed made for cars, builds, details, and everything in between.' },
  { icon: 'plus', title: 'Share your angle.', copy: 'Post a video and a caption. Let the car, and the sound, do the talking.' },
  { icon: 'people', title: 'Find your people.', copy: 'Explore profiles, follow creators, and keep the conversation going in comments.' },
  { icon: 'save', title: 'Keep the inspiration.', copy: 'Save favourite clips so the next idea is easy to find again.' },
];

function PreviewSection() {
  const [selected, setSelected] = useState(0);
  const active = previews[selected];

  function handleTabKey(event, index) {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % previews.length;
    if (event.key === 'ArrowLeft') next = (index + previews.length - 1) % previews.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = previews.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      setSelected(next);
      document.getElementById(`preview-tab-${previews[next].id}`)?.focus();
    }
  }

  return (
    <section className="experience section-anchor" id="experience" aria-labelledby="experience-heading">
      <div className="section-shell experience__layout">
        <div className="experience__copy">
          <p className="eyebrow eyebrow--orange">Inside SpinTyre</p>
          <h2 id="experience-heading">ONE PASSION.<br />MORE WAYS IN.</h2>
          <div className="preview-tabs" role="tablist" aria-label="Explore SpinTyre features">
            {previews.map((preview, index) => (
              <button key={preview.id} id={`preview-tab-${preview.id}`} role="tab" aria-selected={selected === index} aria-controls={`preview-panel-${preview.id}`} tabIndex={selected === index ? 0 : -1} onClick={() => setSelected(index)} onKeyDown={(event) => handleTabKey(event, index)}>
                <span>{preview.number}</span>{preview.label}
              </button>
            ))}
          </div>
          {previews.map((preview, index) => (
            <div key={preview.id} id={`preview-panel-${preview.id}`} role="tabpanel" aria-labelledby={`preview-tab-${preview.id}`} hidden={selected !== index} tabIndex={0} className="preview-panel">
              <h3>{preview.title}</h3>
              <p>{preview.description}</p>
              <ul>{preview.points.map((point) => <li key={point}><span aria-hidden="true">↗</span>{point}</li>)}</ul>
            </div>
          ))}
        </div>
        <figure className="preview-visual">
          <div className="preview-visual__track" aria-hidden="true" />
          <div className="phone phone--preview"><img key={active.id} src={active.image} alt={active.alt} width="591" height="1280" loading="lazy" /></div>
          <figcaption>iPhone app preview <span>Appearance may vary by app version.</span></figcaption>
        </figure>
      </div>
    </section>
  );
}

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="site" id="top">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="site-header">
        <nav className="nav section-shell" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="SpinTyre home"><img src={logo} width="44" height="44" alt="" /><span>SpinTyre</span></a>
          <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation-links" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}<span aria-hidden="true">{menuOpen ? '−' : '+'}</span></button>
          <div id="navigation-links" className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Inside the app</a>
            <a href="#platforms" onClick={() => setMenuOpen(false)}>Platforms</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a className="nav__download" href={APP_STORE_URL} target="_blank" rel="noreferrer">Get the app<Icon name="arrow" /></a>
          </div>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero section-shell" aria-labelledby="hero-heading">
          <div className="hero__copy">
            <p className="eyebrow"><span className="status-dot" />For the love of cars</p>
            <h1 id="hero-heading">CAR CULTURE.<br /><span>IN MOTION.</span></h1>
            <p className="hero__description">The build. The details. That sound.<br />A home for your car clips and the people who get them.</p>
            <div className="hero__actions"><DownloadButton /><a className="text-link" href="#experience">Take a look inside<Icon name="arrow" /></a></div>
            <p className="hero__availability">Free on iPhone <span aria-hidden="true">/</span> Android release in preparation</p>
          </div>
          <div className="hero__visual">
            <span className="hero__backdrop-word" aria-hidden="true">SPIN</span>
            <div className="hero__orbit hero__orbit--one" aria-hidden="true" />
            <div className="hero__orbit hero__orbit--two" aria-hidden="true" />
            <div className="hero__visual-label"><span className="status-dot" />Made for your kind of scroll</div>
            <div className="phone phone--hero"><img src={screenshotFeed} width="591" height="1280" alt="An iPhone preview of SpinTyre's full-screen car video feed" fetchPriority="high" /></div>
            <div className="hero__stamp" aria-hidden="true"><Icon name="play" /><span>WATCH.<br />SHARE.<br />REPEAT.</span></div>
            <p className="hero__preview-note">App preview</p>
          </div>
        </section>

        <div className="culture-strip" aria-hidden="true"><div className="section-shell"><span>BUILDS</span><i /><span>DETAILS</span><i /><span>CAR MEETS</span><i /><span>YOUR POV</span></div></div>

        <section className="section-shell features section-anchor" id="features" aria-labelledby="features-heading">
          <div className="section-heading"><p className="eyebrow">A community in motion</p><h2 id="features-heading">GOOD CARS.<br />GREAT COMPANY.</h2><p>Whether you&apos;re sharing your latest project or just here to watch, there&apos;s a place for your passion.</p></div>
          <div className="feature-grid">{features.map((feature) => <article className="feature" key={feature.title}><div className="feature__icon"><Icon name={feature.icon} /></div><h3>{feature.title}</h3><p>{feature.copy}</p></article>)}</div>
        </section>

        <PreviewSection />

        <section className="section-shell platforms section-anchor" id="platforms" aria-labelledby="platform-heading">
          <div className="section-heading"><p className="eyebrow">Find your way in</p><h2 id="platform-heading">TAKE THE COMMUNITY<br />WITH YOU.</h2></div>
          <div className="platform-grid">
            <article className="platform platform--featured"><Icon name="phone" /><span className="platform__status">Available now</span><h3>iPhone &amp; iPad</h3><p>Your car community, right in your pocket. Watch, post, and stay connected.</p><a href={APP_STORE_URL} target="_blank" rel="noreferrer">View on the App Store<Icon name="arrow" /></a></article>
            <article className="platform"><Icon name="phone" /><span className="platform__status platform__status--quiet">In preparation</span><h3>Android</h3><p>We&apos;re preparing the Android release for the same SpinTyre community.</p><p className="platform__note">The public download link will appear here when it&apos;s ready.</p></article>
            <article className="platform"><Icon name="watch" /><span className="platform__status platform__status--quiet">iPhone companion</span><h3>Apple Watch</h3><p>A quick look at your profile stats and recent activity, synced from your iPhone.</p><p className="platform__note">Included with the iPhone app. Requires a paired iPhone.</p></article>
          </div>
        </section>

        <section className="control-section section-shell" aria-labelledby="control-heading">
          <div className="control-heading"><Icon name="shield" /><div><p className="eyebrow">Your space, your controls</p><h2 id="control-heading">KEEP IT ABOUT THE CARS.</h2></div></div>
          <div className="control-copy"><p>Report content, block accounts, and manage what you share. Privacy information and account-deletion help are always easy to find.</p><div className="control-links"><Link to="/privacy-policy">Privacy Policy<Icon name="arrow" /></Link><Link to="/delete-account">Account deletion<Icon name="arrow" /></Link></div></div>
        </section>

        <section className="section-shell faq-section section-anchor" id="faq" aria-labelledby="faq-heading">
          <div className="section-heading"><p className="eyebrow">A few things to know</p><h2 id="faq-heading">BEFORE YOU<br />JUMP IN.</h2><a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>Talk to us<Icon name="arrow" /></a></div>
          <div className="faq">
            <details><summary>Is SpinTyre free?<span aria-hidden="true">+</span></summary><p>Yes. SpinTyre is free to download and use on iPhone and iPad.</p></details>
            <details><summary>What can I share?<span aria-hidden="true">+</span></summary><p>Share car videos from your library: builds, details, car meets, and your own point of view. Only upload content you have the right to share and follow the community guidelines in the app.</p></details>
            <details><summary>When can I get it on Android?<span aria-hidden="true">+</span></summary><p>The Android release is in preparation. We&apos;ll add a public download link here when it&apos;s available. It will connect to the same SpinTyre community.</p></details>
            <details><summary>How does the Watch companion work?<span aria-hidden="true">+</span></summary><p>The Apple Watch companion shows profile stats and recent activity from your paired iPhone. It accompanies the iPhone app; it doesn&apos;t play the video feed.</p></details>
            <details><summary>How do I delete my account?<span aria-hidden="true">+</span></summary><p>In supported app versions, open Profile → Settings → Delete Account. If you can&apos;t sign in or need help, follow the <Link to="/delete-account">account deletion instructions</Link>.</p></details>
          </div>
        </section>

        <section className="join-section" aria-labelledby="join-heading"><div className="section-shell"><p className="eyebrow">Your next scroll starts here</p><h2 id="join-heading">LET&apos;S GET<br /><span>SPINNING.</span></h2><DownloadButton secondary /><p className="join-section__note">Free on the App Store. Android release in preparation.</p></div><span className="join-section__wheel" aria-hidden="true" /></section>
      </main>

      <footer className="footer section-shell"><div className="footer__top"><Link to="/" className="brand"><img src={logo} width="44" height="44" alt="" /><span>SpinTyre</span></Link><p>For the cars. For the people.</p><a href={`mailto:${CONTACT_EMAIL}`} className="footer__contact"><Icon name="mail" />{CONTACT_EMAIL}</a></div><div className="footer__bottom"><p>© {new Date().getFullYear()} SpinTyre</p><nav aria-label="Legal and support"><Link to="/privacy-policy">Privacy Policy</Link><Link to="/data-safety">Data Safety</Link><Link to="/delete-account">Delete Account</Link></nav><a href="#top">Back to top ↑</a></div></footer>
    </div>
  );
}

function NotFound() {
  return <main className="not-found section-shell"><p className="eyebrow">404 / Off track</p><h1>LET&apos;S GET YOU<br />BACK HOME.</h1><p>This page doesn&apos;t exist. Head back to SpinTyre, or contact us if you need help.</p><Link to="/" className="button button--primary">Back to SpinTyre<Icon name="arrow" /></Link><a className="text-link" href={`mailto:${CONTACT_EMAIL}`}>Contact support<Icon name="arrow" /></a></main>;
}

function RouteExperience() {
  const { pathname } = useLocation();
  useEffect(() => {
    const titles = { '/': 'SpinTyre — Car culture in motion', '/privacy-policy': 'Privacy Policy — SpinTyre', '/data-safety': 'Your Data — SpinTyre', '/delete-account': 'Delete Your Account — SpinTyre' };
    document.title = titles[pathname] || 'Page Not Found — SpinTyre';
    const target = window.location.hash.slice(1);
    if (target) document.getElementById(target)?.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function App() {
  return <Router><RouteExperience /><Routes><Route path="/" element={<HomePage />} /><Route path="/privacy-policy" element={<PrivacyPolicy />} /><Route path="/delete-account" element={<DeleteAccount />} /><Route path="/data-safety" element={<DataSafety />} /><Route path="*" element={<NotFound />} /></Routes></Router>;
}

export default App;
