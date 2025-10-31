import styles from './hero.module.css';

function Hero() {
  return (
    <section className={`${styles.hero} d-flex flex-column justify-content-center align-items-center text-white text-center`}>
      <img
        src="/Screenshot 2025-10-26 135601.png"
        alt="Profile"
        className={`${styles.heroImg} mb-4`}
      />

      <h1 className="fw-bold text-uppercase mb-3">Start Bootstrap</h1>

      <p className="fs-5">Graphic Artist - Web Designer - Illustrator</p>
    </section>
  );
}

export default Hero;
