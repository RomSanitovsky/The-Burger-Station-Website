export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          <div className="social-links mt-3 footer-info container col-lg-3 col-md-6">
            <a href="#" className="facebook">
              <i className="bx bxl-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bx bxl-instagram" />
            </a>
            <a href="#" className="google-plus">
              <i className="bx bxl-skype" />
            </a>
            <a href="#" className="linkedin">
              <i className="bx bxl-linkedin" />
            </a>
          </div>
          © Copyright{" "}
          <strong>
            <span>Burger Station</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          Designed by Or Levi | Eden Shtein | Rom Santiovsky | Omer Berger
        </div>
      </div>
    </footer>
  );
}
