import Image from "next/image";
import styles from "./page.module.css";
import fondobalda from "../.././public/fondobalda-02.png";
import esquinaizq from "../.././public/esquina-izq-02.png";
export function Libroficha({ data, id, inicio }) {
    return (
        <article>
            <div className={styles.libroficha}>
                <div className={styles.sinopsiscaja} >
                    {data["libro" + (id)].sinopsis}
                </div>
                <div className={styles.estanteriaizq} style={{backgroundImage: `url(${esquinaizq.src})`}}>
                </div>
                <section style={{backgroundImage: `url(${fondobalda.src})`}}>
                    <div className={styles.portadacaja} >
                        <Image src={data["libro" + (id)].portada} width={158} height={381} alt={data["libro" + (id)].titulo} />
                    </div>
                    <div className={styles.titulocaja} >
                        {data["libro" + (id)].titulo}
                    </div>
                    <div className={styles.autorcaja} >
                        {data["libro" + (id)].autor}
                    </div>
                    <div className={styles.preciocaja} >
                        {data["libro" + (id)].precio}
                    </div>
                </section>
            </div>
            <button onClick={inicio} className={styles.botoninicio}>{"<-"}</button>
        </article>
    )
}