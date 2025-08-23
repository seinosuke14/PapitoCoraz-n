
import './navbar.scss';
import Link from 'next/link';
import UserSection from './usersection';

export default function Navbar(){
    return(
        <nav className='navbar-global'>
            <ul className='link-navigation'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">Sobre Nosotros</Link></li>
                <li><Link href="/services">Servicios</Link></li>
                <li><Link href="/contact">Contactanos</Link></li>
             </ul>

            <Link href="/" className='logo'>
             <img 
             src="/images/papitocorazonLogo.png"
             alt='Papito Corazón Logo'
             className='logo-image'
             />
             </Link>


             <div className='userSection'>
                <UserSection/>
             </div>

             
        </nav>
    )

}