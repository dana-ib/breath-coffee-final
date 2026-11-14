import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">
          <h2>breath<span>.</span></h2>
          <p>COFFEE & LITTLE MOMENTS</p>

          <p className="footer-description">
            A little place for beautiful coffee,
            delicate desserts, and sweet moments.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/menu">Our Menu</Link>
          <Link to="/order">Order Online</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/about">Our Story</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-message">
          <h3>A little reminder</h3>
          <p>
            Take a breath, enjoy your coffee,
            and make every moment count.
          </p>
          <span>♡ Made with love.</span>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Breath Coffee Shop. All rights reserved.</p>
        <p>Made for coffee lovers ♡</p>
      </div>

    </footer>
  )
}

export default Footer