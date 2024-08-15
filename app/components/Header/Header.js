import Link from 'next/link'

import './style.css';

const Header = () => (
    <header className="header_container">
        <h1 className="header_logo">Charity Organization</h1>
        <nav className="header_nav">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
        </nav>
        <button className="header_donate_button">
            <Link href="/donate">Donate</Link>
        </button>
    </header>
)

export default Header