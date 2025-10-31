import styles from './contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className="container py-5 text-center">
        <h2 className="fw-bold text-uppercase mb-4">Contact Me</h2>

        <form className="mx-auto" id="contactForm">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Full name"
              className={styles.input}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              placeholder="Email address"
              className={styles.input}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              placeholder="Phone number"
              className={styles.input}
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Message"
              rows="5"
              className={styles.textarea}
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
