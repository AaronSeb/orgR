import "./Footer.css"

const Footer = ()=>{

    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div>
            <a href="https://aluracursos.com"> <img src="/img/facebook.png" alt="Facebook" /></a>
            <a href="https://aluracursos.com"> <img src="/img/instagram.png" alt="Instagram" /></a>
            <a href="https://aluracursos.com"> <img src="/img/twitter.png" alt="twitter" /></a>
        </div>
        <img src="/img/Logo.png" alt="org" />
        <p>Desarrollado por Aaron</p>
    </footer>
}
export default Footer