import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <section id='header'>
            <Link to='/'>Strona główna</Link>
            <Link to='/basket'>Koszyk</Link>
            <Link to='/product'>Produkt</Link>    
            <Link to='/contact'>Kontakt</Link>    
        </section>
    )
}

export default Header;