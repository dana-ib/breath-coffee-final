function About() {
  return (
    <main className="about-page">
      <section className="about-heading">
        <p>THE STORY BEHIND THE COFFEE</p>

        <h1>
          More Than Coffee,
          <br />
          <span>A Feeling.</span>
        </h1>

        <p>
          Every little detail has a story.
          Welcome to ours.
        </p>
      </section>

      <section className="about-story">
        <div className="story-content">
          <p className="story-label">OUR STORY</p>

          <h2>
            A place to pause,
            <br />
            <span>a moment to remember.</span>
          </h2>

          <p>
            Breath was created from a simple idea:
            everyone deserves a little moment to slow down
            and enjoy the beautiful things in life.
          </p>

          <p>
            From carefully prepared coffee to delicate
            desserts and thoughtful little details,
            everything at Breath is made to bring warmth,
            comfort, and happiness to your day.
          </p>

          <p>
            Whether you visit for your morning coffee,
            a sweet treat, or a moment with someone special,
            we hope Breath feels like your little escape.
          </p>
        </div>

        <div className="story-quote">
          <span>♡</span>
          <h3>
            Take a breath.
            <br />
            Enjoy the little things.
          </h3>
          <p>That's the Breath feeling.</p>
        </div>
      </section>
      <section className="about-values">
  <div className="values-heading">
    <p>THE BREATH EXPERIENCE</p>
    <h2>Little Things, <span>Big Feelings.</span></h2>
  </div>

  <div className="values-grid">
    <div className="value-card">
      <span>01</span>
      <h3>Made with Love</h3>
      <p>
        Every cup and every treat is prepared
        with care and attention to detail.
      </p>
    </div>

    <div className="value-card">
      <span>02</span>
      <h3>Sweet Moments</h3>
      <p>
        From delicate desserts to beautiful drinks,
        there's always something special to enjoy.
      </p>
    </div>

    <div className="value-card">
      <span>03</span>
      <h3>Thoughtful Details</h3>
      <p>
        We believe the smallest details can
        make an ordinary day feel special.
      </p>
    </div>
  </div>
</section>
    </main>
  )
}

export default About