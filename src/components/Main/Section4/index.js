import './estilo.css'
import './mediaQuery.css'

export default function Section4() {
    // evento de mouseover

    return (
        <section id='projetos' className='sectionProjetos'>

            <div className='conteudo'>
                <h2>Projetos</h2>
                <div className='traco'></div>
                <p>Aqui você encontrará alguns dos projetos pessoais e de clientes que criei, cada projeto contendo seu próprio estudo de caso.</p>

            </div>



            <div className='tamanhoCard'>
                <div className='cards' >
                    <div className='card projeto1'>

                        <div className='descricao'>
                            <p>Sabores irresistíveis em cada colherada</p>
                            <a href='https://projeto-sorveteria-kappa.vercel.app/' target = "_blank">Visite o site</a>
                        </div>

                    </div>
                    <div className='card projeto2'>

                        <div className='descricao'>
                            <p>Um refúgio acolhedor para os amantes do café.</p>
                            <a href='https://projeto-cafeteria-db.vercel.app/' target = "_blank">Visite o site</a>
                        </div>

                    </div>
                    <div className='card'>
                        <div className='descricao'>
                            <p>Em desenvolvimento...</p>
                        </div>

                    </div>
                    <div className='card'>
                        <div className='descricao'>
                            <p>Em desenvolvimento...</p>
                        </div>

                    </div>
                    <div className='card'>
                        <div className='descricao'>
                            <p>Em desenvolvimento...</p>
                        </div>

                    </div>
                    <div className='card'>
                        <div className='descricao'>
                            <p>Em desenvolvimento...</p>
                        </div>

                    </div>
                </div>
            </div>
            <p> Quer ver mais? <a href='#'> Entra no Github</a></p>
        </section>
    )
}