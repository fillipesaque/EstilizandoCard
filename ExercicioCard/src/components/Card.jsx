import styles from "./card.module.css"

function Card (){
    return(
        <div className={styles.container}>
            <div className={styles.imgCard}>
                <img src="../src/img/star.jpg" alt="img-Card" className="img"/>
            </div>
            <div className={styles.DescriçaoCard}>
                <h2>Pôster: Star Wars (1977)</h2>
                <p>Um Poster decorativo epico do filme Star Wars, com moldura de Mdf e tamanho A3.Uma otima recordaçao de um dos mais iconicos filmes de todos os tempos . Este classico poster trara aventura , nostalgia e a magia de star wars para qualquer lugar que voce decidir pendurar. Nao perca a chance de dicionaer essa linda memoria ao seu acervo</p>
                <button className={styles.btnCard}>Comprar agora</button>
            </div>
        </div>
    )
}

export default Card