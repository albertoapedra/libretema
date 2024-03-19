import Image from "next/image";
import styles from "./page.module.css";
import fondobalda from "../.././public/fondobalda-02.png";
export function Libro({ data, i, id, definelibro, imageLoader }) {
    return (
        <div className={styles.libro} onClick={() => window.scrollTo(0, 0)} style={{backgroundImage: `url(${fondobalda.src})` }}>
            <button onClick={definelibro} id={id} >
                <div className={styles.portadacaja} >
                    <Image width={185} height={450} loader={imageLoader} src={data["libro" + (i + 1)].portada} alt={data["libro" + (i + 1)].titulo} />
                </div>
                <div className={styles.titulocaja} >
                    {data["libro" + (i + 1)].titulo}
                </div>
                <div className={styles.autorcaja} >
                    {data["libro" + (i + 1)].autor}
                </div>
                <div className={styles.preciocaja} >
                    {data["libro" + (i + 1)].precio}
                </div>
                <div className={styles.sinopsiscaja} >
                    {data["libro" + (i + 1)].sinopsis}
                </div>
            </button>
        </div>
    )
};