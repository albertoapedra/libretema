'use client';
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import data from "./data.json";
import { Estanteria } from "./estanteria";
import { Libroficha } from "./libroficha";
import fondobalda from "../.././public/fondobalda-02.png";
import esquinader from "../.././public/esquina-der-02.png";
import fondoelementomenu from "../.././public/fondo-menu-01.webp";
const imageLoader = ({ src }) => {
  return `https://albertoapedra.github.io/libretema/${src}`
}

export default function Home() {

  const ARRAYLIBROS = [];
  Object.values(Object.values(data))
    .forEach(function (seccion) {
      ARRAYLIBROS.push(seccion)
    });

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      if (sortOrder == -1) {
        return b[property].localeCompare(a[property]);
      } else {
        return a[property].localeCompare(b[property]);
      }
    }
  }
  const handleClickLibro = (event) => {
    setEstado({
      estanteria:
        <Libroficha data={data} id={Number(event.currentTarget.getAttribute('id'))} inicio={handleClickInicio} imageLoader={imageLoader} />
    });
  };
  const handleClickLibroAutor = (event) => {
    setEstado({
      estanteria:
        <Libroficha data={data} id={Number(event.currentTarget.getAttribute('id'))} inicio={handleClickAutor} imageLoader={imageLoader} />
    });
  };
  const handleClickLibroEditorial = (event) => {
    setEstado({
      estanteria:
        <Libroficha data={data} id={Number(event.currentTarget.getAttribute('id'))} inicio={handleClickEditorial} imageLoader={imageLoader} />
    });
  };
  const handleClickLibroColor = (event) => {
    setEstado({
      estanteria:
        <Libroficha data={data} id={Number(event.currentTarget.getAttribute('id'))} inicio={handleClickColor} imageLoader={imageLoader} />
    });
  };

  const handleClickInicio = () => {
    setEstado({
      estanteria:
        <Estanteria data={data} definelibro={handleClickLibro} imageLoader={imageLoader} />
    });
  }

  const handleClickAutor = () => {

    const ORDENADOSPORAUTOR = {};
    for (const index in ARRAYLIBROS.sort(dynamicSort("autororden"))) {
      ORDENADOSPORAUTOR[`libro${parseInt(index) + 1}`] = ARRAYLIBROS.sort(dynamicSort("autororden"))[index];
    }

    setEstado({
      estanteria:
        <Estanteria data={ORDENADOSPORAUTOR} definelibro={handleClickLibroAutor} imageLoader={imageLoader} />
    });
  }

  const handleClickEditorial = () => {

    const ORDENADOSPOREDITORIAL = {};
    for (const index in ARRAYLIBROS.sort(dynamicSort("editorial"))) {
      ORDENADOSPOREDITORIAL[`libro${parseInt(index) + 1}`] = ARRAYLIBROS.sort(dynamicSort("editorial"))[index];
    }
    setEstado({
      estanteria:
        <Estanteria data={ORDENADOSPOREDITORIAL} definelibro={handleClickLibroEditorial} imageLoader={imageLoader} />
    });
  }
  const handleClickColor = () => {

    const ORDENADOSPORCOLOR = {};
    for (const index in ARRAYLIBROS.sort(dynamicSort("color"))) {
      ORDENADOSPORCOLOR[`libro${parseInt(index) + 1}`] = ARRAYLIBROS.sort(dynamicSort("color"))[index];
    }
    setEstado({
      estanteria:
        <Estanteria data={ORDENADOSPORCOLOR} definelibro={handleClickLibroColor} imageLoader={imageLoader} />
    });
  }
  let [Estado, setEstado] = useState({
    estanteria:
      <Estanteria data={data} definelibro={handleClickLibro} imageLoader={imageLoader} />
  });

  return (
    <main className={styles.main}>
      <div className={styles.contenedormenus}>
        <div className={styles.contenedorlogo}>
          <Image
          loader={imageLoader}
            src="libretema-06.webp"
            alt="Libretema Logo"
            width={523}
            height={275}
            priority
            className={styles.logo}
          />
        </div>
        <nav className={styles.contenedormenu} style={{
        backgroundImage: `url(${fondobalda.src})`
      }}>
          <ul className={styles.menu}>
            <li key="yuio"><button onClick={handleClickInicio} style={{
        backgroundImage: `url(${fondoelementomenu.src})`
      }}>mi biblioteca</button></li>
            <li key="zxcv"><button onClick={handleClickAutor} style={{
        backgroundImage: `url(${fondoelementomenu.src})`
      }}>autores</button></li>
            <li key="asdf"><button onClick={handleClickEditorial} style={{
        backgroundImage: `url(${fondoelementomenu.src})`
      }}>editoriales</button></li>
            <li key="qwer"><button onClick={handleClickColor} style={{
        backgroundImage: `url(${fondoelementomenu.src})`
      }}>colores</button></li>
          </ul>
          <Image
          loader={imageLoader}
            src="libretema-bre.webp"
            alt="Libretema Logo"
            width={319}
            height={274}
            priority
            className={styles.logo}
          />
        </nav>
        <div className={styles.estanteriader}  style={{
        backgroundImage: `url(${esquinader.src})`
      }}>
        </div>
      </div>
      <div className={styles.contenedorestanteria} >
        {Estado.estanteria}
      </div>
    </main>
  );
}
