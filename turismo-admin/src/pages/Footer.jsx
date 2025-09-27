import "../css/footer.css";
export default function Footer() {
 const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-band">
        {/* íconos (arriba-derecha) */}
        <ul className="footer-social">
          <li><a href="https://wa.me/5493430000000" aria-label="WhatsApp"><i className="bi bi-whatsapp" /></a></li>
          <li><a href="https://www.instagram.com/corditur" aria-label="Instagram"><i className="bi bi-instagram" /></a></li>
          <li><a href="https://www.facebook.com/corditur" aria-label="Facebook"><i className="bi bi-facebook" /></a></li>
          <li><a href="mailto:corditur@outlook.com" aria-label="Email"><i className="bi bi-envelope" /></a></li>
        </ul>

        <div className="container">
          <div className="footer-row">
            {/* Izquierda */}
            <div className="f-col f-brand">
              <img src="/img/logo-white.svg" alt="Corditur" className="footer-logo" />
              <address className="footer-address">
                <div>Av. Gualeguaychú 463</div>
                <div>Paraná – Entre Ríos</div>
                <div>Argentina</div>
              </address>
            </div>

            {/* Centro */}
            <div className="f-col f-contact">
              <div className="footer-phones">+54 343-4XXXXXX / 343-4682347</div>
              <a className="footer-mail" href="mailto:corditur@outlook.com">corditur@outlook.com</a>
            </div>

            {/* Derecha */}
            <div className="f-col f-copy">
              <div>Copyright © {year} Corditur</div>
              <div className="footer-powered">Powered by Boosting Marketing</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}