import React, { useEffect, useState } from "react";
import styles from "./AboutPage.module.scss";
import { Card } from "../../components/Cards/Card/Card";
import { APP_IMAGES_ASSETS } from "../../project/appImagesAssets";
import { CardToggle } from "../../components/Cards/CardToggle/CardToggle";
import Loader from "../../components/Loaders/Loader/Loader";

const AboutPage = () => {
  const [loader, setLoader] = useState(true);
  const [aboutContent, setAboutContent] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      try {
        const data = await fetch("/backend/about.json");
        const response = await data.json();
        if (!isMounted) return;

        setAboutContent(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };

    getData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={styles.mainContainer}>
      <Card
        bgImage={APP_IMAGES_ASSETS.image.about}
        className={styles.mainCard}
      ></Card>

      {loader && <Loader absolute>Chargement des données...</Loader>}
      {aboutContent?.map((el, index) => (
        <CardToggle
          key={"cardToggle" + index}
          title={el.title}
          className={styles.cardToggle}
        >
          {el.description}
        </CardToggle>
      ))}
    </div>
  );
};

export default AboutPage;
