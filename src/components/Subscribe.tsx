import { useForm } from '@hooks/useForm'

const Subscribe = () => {
  const { email, submitted, error, handleSubmit, handleChange, clearError } =
    useForm()

  return (
    <section className="subscribe">
      <p className="subscribe__support">Support</p>
      <h2 className="subscribe__title">Subscribe Newsletter & get</h2>
      <p className="subscribe__subtitle">Bank News</p>
      <form className="subscribe__form" onSubmit={handleSubmit}>
        <div className="subscribe__input-wrapper">
          <input
            type="email"
            placeholder="Your email"
            className="subscribe__input"
            value={email}
            onChange={handleChange}
            aria-label="Your email"
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
        {error && (
          <div className="subscribe__error">
            <span>{error}</span>
            <button
              type="button"
              className="subscribe__error-close"
              onClick={clearError}>
              ×
            </button>
          </div>
        )}
        {submitted && !error && (
          <p className="subscribe__success">Thank you for subscribing!</p>
        )}
      </form>
    </section>
  )
}

export default Subscribe