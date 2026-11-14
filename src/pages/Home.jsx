import { Link } from 'react-router-dom'
import heroImage from '../assets/background.jpeg'
function Home() {
  return (
    <main className="home-page">

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            A LITTLE MOMENT OF HAPPINESS
          </p>

          <h1>
            Your little escape,
            <br />
            <span>your sweetest moment.</span>
          </h1>

          <p className="hero-description">
            Discover a world of beautiful coffee, delicate desserts,
            and unforgettable little moments.
          </p>

          <div className="hero-buttons">

            <Link to="/menu" className="btn-primary">
              Explore Our Menu
              <span>↗</span>
            </Link>

            <Link to="/order" className="btn-secondary">
              Order Online
            </Link>

          </div>

          <div className="hero-note">
            <span>♡</span>
            Made with love, served with warmth.
          </div>

        </div>

        <div className="hero-image">

          <img
          src={heroImage} alt="Breath Coffee Shop"
          />

          <div className="image-caption">
            <span>YOUR DAILY RITUAL</span>
            <p>Slow down & enjoy.</p>
          </div>

        </div>

      </section>

      <section className="home-features">

        <div className="feature">
          <span>01</span>
          <h3>Beautiful Coffee</h3>
          <p>Made for your everyday moments.</p>
        </div>

        <div className="feature">
          <span>02</span>
          <h3>Sweet Creations</h3>
          <p>Little treats, made with love.</p>
        </div>

        <div className="feature">
          <span>03</span>
          <h3>Cozy Atmosphere</h3>
          <p>Your favorite place to unwind.</p>
        </div>

      </section>

    </main>
  )
}

export default Home