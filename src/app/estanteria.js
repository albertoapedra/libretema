import { Libro } from "./libro.js";
import styles from "./page.module.css";
import fondobalda from "../.././public/fondobalda-02.png";
import esquinader from "../.././public/esquina-der-02.png";
import esquinaizq from "../.././public/esquina-izq-02.png";
export function Estanteria({ data, definelibro, imageLoader }) {

  let balda = [];
  let baldacompleta = [];

  for (let i = 0; i < Object.keys(data).length; i++) {

    balda.push(<Libro data={data} i={i} id={data["libro" + (i + 1)]["id"]} imageLoader={imageLoader} definelibro={definelibro} key={data["libro" + (i + 1)]["titulo"]} />);
    
    if (((i + 1) % 9) == 0 && ((i + 1) % 2) == 0) {
      baldacompleta.push(
        <div className={styles.baldader} key={data["libro" + (i + 1)]["autor"]}>
          <div className={styles.estanteria} style={{ zIndex: 999 - i, backgroundImage: `url(${fondobalda.src})` }}>
            {balda}
          </div>
          <div className={styles.estanteriader} style={{
        backgroundImage: `url(${esquinader.src})`
      }}>
          </div>
        </div>
      );
      balda = []
    } else if (((i + 1) % 9) == 0 && ((i + 1) % 2) !== 0) {
      baldacompleta.push(
        <div className={styles.baldaizq} key={data["libro" + (i + 1)]["precio"] + data["libro" + (i + 1)]["autor"]}>
          <div className={styles.estanteriaizq} style={{
        backgroundImage: `url(${esquinaizq.src})`
      }}>
          </div>
          <div className={styles.estanteria} style={{ zIndex: 999 - i, backgroundImage: `url(${fondobalda.src})` }}>
            {balda}
          </div>
        </div>
      );
      balda = []
    }
  }
  return baldacompleta



}