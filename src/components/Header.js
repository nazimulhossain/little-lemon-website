import { Outlet } from "react-router-dom";
import logo from "../assets/logo.jpg" ;

function Header(){

    const headerStyle = {
        header : {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '4.4rem',
            padding: "2.4rem 10.6rem" 
        },

        ul : {
            display: 'flex',
            gap: '4.4rem'
        }

    }

    const openMobileNavigation=()=>{
        const headerEl = document.querySelector('.main-header');
        headerEl.classList.toggle('nav-open');
 
    }

    return (
        <>
        <header style={headerStyle.header} className="main-header">
            <a href="/"><img src={logo} alt="little lemon logo" className="logo main-nav-links"  /></a>
            <nav className="main-nav">   
            <ul style={headerStyle.ul}>
                <a href="/" title="home" className="nav__link"><li>Home</li></a>
                <a href="#about" title="about us" className="nav__link"><li>About</li></a>
                <a href="#menu" title="menu" className="nav__link"><li>Menu</li></a>
                <a href="/reservation" title="book a table" className="nav__link"><li>Reservations</li></a>
                <a href="/product-detail" title="Order Online" className="nav__link"><li>Order Online</li></a>
                <a href="/login" title="login" className="nav__link"><li>Login</li></a>
            </ul>
            </nav>
            <button className="btn-mobile-nav" onClick={openMobileNavigation}>
                <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
                <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
        </header>
        <Outlet />
        </>
    )

}

export default Header;