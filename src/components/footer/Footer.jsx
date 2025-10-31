import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container text-center text-md-start py-5">
        <div className="row justify-content-center">

          <div className="col-md-4 mb-4 text-white">
            <h6 className="text-uppercase fw-bold mb-3">Location</h6>
            <p className="mb-0">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="col-md-4 mb-4 text-white">
            <h6 className="text-uppercase fw-bold mb-3">Around the Web</h6>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className={`${styles.iconBtn} btn btn-outline-light rounded-circle`}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className={`${styles.iconBtn} btn btn-outline-light rounded-circle`}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className={`${styles.iconBtn} btn btn-outline-light rounded-circle`}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className={`${styles.iconBtn} btn btn-outline-light rounded-circle`}>
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4 text-white">
            <h6 className="text-uppercase fw-bold mb-3">About Freelancer</h6>
            <p className="mb-0">
              Freelancer is a free to use, MIT licensed Bootstrap theme created by{' '}
              <a href="https://startbootstrap.com" className="text-info text-decoration-none fw-semibold">
                Start Bootstrap
              </a>.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        © Your Website 2025
      </div>
    </footer>
  );
}
