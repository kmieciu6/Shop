import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section id="footer">
            <p>footer</p>
            <Link to='/private'>Polityka prywatności</Link>
        </section>
    )
}

export default Footer;