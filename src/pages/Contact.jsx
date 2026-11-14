import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    alert('Thank you for reaching out to Breath! ♡')

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  return (
    <main className="contact-page">

      <section className="contact-heading">
        <p>WE WOULD LOVE TO HEAR FROM YOU</p>

        <h1>
          Let's <span>Connect.</span>
        </h1>

        <p>
          Have a question, an idea, or just want to say hello?
          We're always happy to hear from you.
        </p>
      </section>

      <section className="contact-content">

        <div className="contact-info">
          <p className="contact-label">GET IN TOUCH</p>

          <h2>
            We'd love to
            <br />
            hear from you.
          </h2>

          <div className="contact-detail">
            <span>♡</span>
            <div>
              <h3>Phone</h3>
              <p>Contact number coming soon</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>♡</span>
            <div>
              <h3>Email</h3>
              <p>Email address coming soon</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>♡</span>
            <div>
              <h3>Location</h3>
              <p>Our location coming soon</p>
            </div>
          </div>

          <div className="contact-detail">
            <span>♡</span>
            <div>
              <h3>Working Hours</h3>
              <p>Working hours coming soon</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <h2>Send Us a Message</h2>

          <div className="form-group">
            <label>Your Name</label>
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
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="What is this about?"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            Send Message ♡
          </button>

        </form>

      </section>
    </main>
  )
}

export default Contact