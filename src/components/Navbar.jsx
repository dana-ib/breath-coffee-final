import { NavLink } from 'react-router-dom'

function Navbar() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Order', path: '/order' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Our Story', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <span className="brand-name">breath<span>.</span></span>
        <span className="brand-subtitle">COFFEE & LITTLE MOMENTS</span>
      </NavLink>

      <nav className="nav-links">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar