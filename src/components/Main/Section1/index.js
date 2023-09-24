import './estilo.css'
import './mediaQuery.css'

export default function Section1() {
    return (
        <section >
            <div className='section-home'>
                <div className='conteudo'>
                    <h1>Olá, meu nome é <br /> David Beckham</h1>

                    <p>Sou um profissional de desenvolvimento web com foco no <strong>front-end</strong>, dedicado a criar interfaces visuais excepcionais para sites que desempenham um papel fundamental no sucesso geral do produto.</p>

                    <a href='#projetos'>Projetos</a>
                </div>
                <div className='icones'>
                    <a href='https://github.com/' target='_blank'><i class="bi bi-github"></i></a>
                    <a href='https://www.linkedin.com/in/david-beckham-278644227/' target='_blank'><i class="bi bi-linkedin"></i></a>
                    <a href='https://wa.me/5583991813692' target='_blank'><i class="bi bi-whatsapp"></i></a>
                </div>
            </div>
        </section>
    )
}