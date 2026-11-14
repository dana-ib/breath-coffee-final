import { useState } from 'react'

function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    requests: '',
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    alert('Your reservation request has been received! ♡')

    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      requests: '',
    })
  }

  return (
    <main className="reservations-page">
      <section className="reservation-heading">
        <p>MAKE IT A LITTLE SPECIAL</p>
        <h1>
          Reserve Your <span>Table</span>
        </h1>
        <p>
          Save your favorite spot and enjoy a beautiful
          moment at Breath Coffee Shop.
        </p>
      </section>

      <section className="reservation-form-section">
        <form className="reservation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="form-group">
              <label>Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Number of Guests</label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
            </select>
          </div>

          <div className="form-group">
            <label>Special Requests</label>
            <textarea
              name="requests"
              placeholder="Anything we should know?"
              value={formData.requests}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <button type="submit" className="reservation-submit">
            Confirm Reservation ♡
          </button>
        </form>
      </section>
    </main>
  )
}

export default Reservations