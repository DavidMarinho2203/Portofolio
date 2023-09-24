import './estilo.css'
import './mediaQuery.css'

export default function Footer() {
    return (
        <footer>
            <section className='informacao'>
                <div className='conteudo'>
                    <h4>David Beckham</h4>
                    <p>Um profissional de desenvolvimento web focado em front-end, responsável por criar a interface visual dos sites que contribuem para o sucesso do produto como um todo.</p>
                </div>
                <div className='social'>
                    <h4>Social</h4>
                    <div>
                        <a href='https://github.com/'target='_blank'><i class="bi bi-github"></i></a>
                        <a href='https://www.linkedin.com/in/david-beckham-278644227/'target='_blank'><i class="bi bi-linkedin"></i></a>
                        <a href='https://wa.me/5583991813692' target='_blank'><i class="bi bi-whatsapp"></i></a>
                    </div>
                </div>
            </section>
            <section className='copy'>
                <p>© Copyright 2023. Made by <strong>David Beckham</strong></p>
            </section>
        </footer>
    )
} 