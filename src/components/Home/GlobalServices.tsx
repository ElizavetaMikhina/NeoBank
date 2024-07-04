export const GlobalServices = () => {
  return (
    <section className="global-services">
      <div className="global-services__content">
        <h1 className="global-services__title">
          You can use our services anywhere in the world
        </h1>
        <p className="global-services__description">
          Withdraw and transfer money online through our application
        </p>
      </div>
      <div className="global-services__map">
        <img
          src="/images/map.svg"
          alt="World Map"
          className="global-services__map-image"
        />
      </div>
    </section>
  )
}
