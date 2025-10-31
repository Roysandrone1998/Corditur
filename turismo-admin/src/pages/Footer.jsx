import "../css/footer.css";
export default function Footer() {
 const year = new Date().getFullYear();
  return (
    <footer className="site-footer ">
      <div className="footer-band">
        {/* íconos (arriba-derecha) */}
        <ul className="footer-social">
         <a className="hs-btn font-helvetica w-400" href="https://wa.me/5493430000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
  <img src="/img/wspblanco.png" alt="" width="24" height="24" />
  <span className="visually-hidden font-helvetica w-400">WhatsApp</span>
</a>
<a className="hs-btn font-helvetica w-400" href="https://insta" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
  <img src="/img/instablanco.png" alt="" width="24" height="24" />
  <span className="visually-hidden">WhatsApp</span>
</a>
<a className="hs-btn" href="https://face" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
  <img src="/img/faceblanco.png" alt="" width="24" height="24" />
  <span className="visually-hidden">WhatsApp</span>
</a>
<a className="hs-btn" href="https://finsta" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
  <img src="/img/instaceleste.png" alt="" width="24" height="24" />
  <span className="visually-hidden">insta</span>
</a>
        </ul>

        <div className="container">
          <div className="footer-row">
            {/* Izquierda */}
            <div className="f-col f-brand">
              <img src="/img/logoF.png" alt="Corditur" className="footer-logo" />
              <address className="footer-address font-helvetica w-400 ">
                <div>Av. Gualeguaychú 463</div>
                <div>Paraná – Entre Ríos</div>
                <div>Argentina</div>
              </address>
            </div>

            {/* Centro */}
            <div className="f-col f-contact font-helvetica w-400">
              <div className="footer-phones font-helvetica w-400">+54 0 343-4316776 | 343-4662347</div>
              <a className="footer-mail font-helvetica w-400" href="mailto:corditur@outlook.com">corditur@outlook.com</a>
            </div>

            {/* Derecha */}
            <div className="f-col f-copy font-helvetica w-400">
              <div>Copyright © {year} Corditur</div>
              <div className="footer-powered font-helvetica w-400">Powered by Boosting Marketing</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}