import "./Footer.css"

const Footer = () => {
    let date = new Date()
    return (
        <footer>
            <p>Desarrollado por: <b>Lautaro Suárez</b></p>
            <p>{date.getFullYear()} &copy;</p>
        </footer>
    )
}

export default Footer;