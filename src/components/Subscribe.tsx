const Subscribe = () => {
  return (
    <section className="subscribe">
      <p className="subscribe__support">Support</p>
      <h2 className="subscribe__title">Subscribe Newsletter & get</h2>
      <p className="subscribe__subtitle">Bank News</p>
      <form className="subscribe__form">
        <div className="subscribe__input-wrapper">
          <input
            type="email"
            placeholder="Your email"
            className="subscribe__input"
          />
          <img
            src="/images/icons/email.svg"
            alt=""
            className="subscribe__input-icon"
          />
          <button type="submit" className="subscribe__button">
            <img
              src="/images/icons/telegram.svg"
              alt=""
              className="subscribe__button-icon"
            />
            Subscribe
          </button>
        </div>
      </form>
    </section>
  )
}

export default Subscribe
