import logo from "../assets/logo.jpg";

function Footer(){
    return (
        <>
        <section className="footer">
            <div className="footer__container">
            <img src={logo} alt="footer logo" className="footer__logo"/>
            <div className="footer__navigation">
                <h3 className="footer__title">Navigation</h3>
                <ul>
                    <a href="/" className="nav__link"><li>Home</li></a>
                    <a href="#about" className="nav__link"><li>About</li></a>
                    <a href="#menu" className="nav__link"><li>Menu</li></a>
                    <a href="/reservation" className="nav__link"><li>Reservation</li></a>
                    <a href="/order" className="nav__link"><li>Order Online</li></a>
                    <a href="/login" className="nav__link"><li>Login</li></a>
                </ul>
            </div>
            <div className="footer__contact">
                <h3 className="footer__title">Contact</h3>
                <address>
                Ann Arbor. 2300 Traverwood Dr. Ann Arbor, MI 48105
United States
                </address>
                <p><a href="tel:999999999" className="nav__link">9999999999</a></p>
                <p><a href="mailto:demo@example.com" className="nav__link">demo@example.com</a></p>
            </div>
            <div className="footer__social-links">
                <h3 className="footer__title">Follow Us</h3>
                <div>

                
                <a href="http://www.facebook.com" title="facebook"><ion-icon name="logo-facebook" size="medium"></ion-icon></a>
                <a href="http://www.twitter.com" title="twitter"><ion-icon name="logo-twitter" size="medium"></ion-icon></a>
                <a href="http://www.instagram.com" title="instagram"><ion-icon name="logo-instagram" size="medium"></ion-icon></a>
                <a href="http://www.youtube.com" title="youtube"><ion-icon name="logo-youtube" size="medium"></ion-icon></a>
                <a href="https://www/whatsapp.com" title="whatsapp"><ion-icon name="logo-whatsapp" size="medium"></ion-icon></a>
                </div>

            </div>
            </div>
            <div className="author-box">
      <p className="author-dev">
        Website Developed by 
        <a
          style={{textDecoration:"none"}}
          href="https://github.com/nazimulhossain"
          rel="nofollow"
          > Nazimul Hossain</a
        >
      </p>
    </div>
        </section>
       
        </>
    )

}


export default Footer;