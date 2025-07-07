import './App.css';
import logo from './assets/spintyre-logo.png';
import screenshot1 from './assets/screenshot1.jpg';
import screenshot2 from './assets/screenshot2.jpg';
import screenshot3 from './assets/screenshot3.jpg';
import screenshot4 from './assets/screenshot4.jpg';

function App() {
  return (
    <div className="app-container">
      {/* Hero Section */}
      <header className="hero">
        <img src={logo} alt="SpinTyre Logo" className="logo" />
        <h1 className="tagline">SpinTyre</h1>
        <p className="subtitle">A social video platform for car enthusiasts. Share your passion, connect with fellow gearheads, and experience the thrill of automotive culture—all in one app.</p>
        <div className="cta-buttons">
          <a href="#" className="download-btn">Download on iOS & Android</a>
        </div>
      </header>

      {/* Screenshots Gallery */}
      <section className="screenshots-section">
        <h2>App Screenshots</h2>
        <div className="screenshots-gallery">
          <img src={screenshot1} alt="SpinTyre App Screenshot 1" className="screenshot-img" />
          <img src={screenshot2} alt="SpinTyre App Screenshot 2" className="screenshot-img" />
          <img src={screenshot3} alt="SpinTyre App Screenshot 3" className="screenshot-img" />
          <img src={screenshot4} alt="SpinTyre App Screenshot 4" className="screenshot-img" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Key Features</h2>
        <ul className="features-list">
          <li><strong>Seamless Authentication:</strong> Sign in securely with Google, Apple, or email for instant access.</li>
          <li><strong>Social Video Feed:</strong> Upload, watch, and interact with car videos from a vibrant community.</li>
          <li><strong>Real-Time Notifications:</strong> Stay updated with instant alerts for likes, comments, and new followers.</li>
          <li><strong>Dark Mode:</strong> Enjoy a sleek, eye-friendly interface in both light and dark themes.</li>
          <li><strong>Personalized Profiles:</strong> Customize your profile, follow friends, and showcase your automotive journey.</li>
        </ul>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>About</h2>
        <p>SpinTyre was created by car lovers, for car lovers. Our mission is to bring the global automotive community together through video, creativity, and connection.</p>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>FAQ</h2>
        <ul>
          <li><strong>Is SpinTyre free?</strong> Yes! SpinTyre is free to download and use.</li>
          <li><strong>Can I use SpinTyre on Android?</strong> Yes! Available on both iOS and Android.</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact</h2>
        <p>Have questions or feedback? Reach out at <a href="mailto:support@spintyre.app">support@spintyre.app</a>.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} SpinTyre. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
