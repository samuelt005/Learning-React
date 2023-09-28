import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/samuel.thomas.5439087/" target="_blank" rel="noreferrer">
                            <img src="/imgs/fb.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/samuelt005/" target="_blank" rel="noreferrer">
                            <img src="/imgs/ig.png" alt=""/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imgs/logo.png" alt=""/>
            </section>
            <section>
                <p>
                    Desenvolvido por Samuel Thomas.
                </p>
            </section>
        </footer>
    )
}

export default Footer