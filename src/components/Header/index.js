import './estilo.css'
import './mediaQuery.css'
import fotoPerfil from '../../assets/fotoPerfil.png'

export default function Header () {
    return (
        <header>
            <section className='areaTopo'>
                <div className='areaLogo'>
                    <img src={fotoPerfil}/>
                    <a href='app.js'>David Beckham</a>
                </div>
                <menu className='areaMenu'>
                    <a className='menuLink' href='index.js'>Home</a>
                    <a className='menuLink' href='#sobreMim'>Sobre</a>
                    <a className='menuLink' href='#projetos'>Projetos</a>
                    <a className='menuLink' href='#contato'>Contato</a>
                </menu>
            </section>
        </header>
    )
}