import styles from './about.module.css';

export default function About() {
  return (
    <section className={`${styles.about} text-white text-center`}>
      <div className="container py-5">
        <h2 className="fw-bold text-uppercase mb-4">About</h2>

        <div className="row justify-content-center mb-4">
          <div className="col-lg-4">
            <p>
              Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the
              complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets
              for easy customization.
            </p>
          </div>
          <div className="col-lg-4">
            <p>
              You can create your own custom avatar for the masthead, change the icon in the dividers, and
              add your email address to the contact form to make it fully functional!
            </p>
          </div>
        </div>

        <button className="btn btn-outline-light px-4 py-2">
          <i className="fas fa-download me-2"></i>
          Free Download!
        </button>
      </div>
    </section>
  );
}
