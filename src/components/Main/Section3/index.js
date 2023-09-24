import './estilo.css'
import './mediaQuery.css'

export default function Section3() {
    return (
        <section className='Section3'>
            <div className='sectionMeConhecer'>
                <div className='MeConhecer'>
                    <h3>Me conhecer!</h3>
                    <p>Sou um desenvolvedor Web <strong>Front-end</strong> construindo  sites web que leva ao sucesso do produto geral. Confira alguns dos meus trabalhos na seção <strong>Projetos</strong>.</p>
                    <p>Em 2021,concluí o <strong>ensino médio</strong> e simultaneamente finalizei meu curso <strong>técnico em informática</strong>. Foi durante esse período que meu interesse pelo mundo do desenvolvimento começou a despertar, e agora estou completamente envolvido nessa área.</p>
                    <p>Estou aberto a oportunidades de trabalho onde possa contribuir, aprender e crescer. Se tiver uma boa oportunidade que corresponda às minhas competências e experiência, não hesite em contactar-me.</p>
                    <a href='tel:+5583991813692' target='_blank'>Contato</a>
                </div>
                <div className='MinhasHabilidades'>
                    <h3>Minhas habilidades</h3>
                    <ul type='none'>
                        <li><a className='html' href='#'>Html5</a></li>
                        <li><a className='css'href='#'>CSS3</a></li>
                        <li><a className='JavaScript'href='#'>JavaScript</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}