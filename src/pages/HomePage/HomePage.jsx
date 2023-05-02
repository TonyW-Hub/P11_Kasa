import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import { Card } from "../../components/Cards/Card/Card";
import { APP_IMAGES_ASSETS } from "../../project/appImagesAssets";
import { CardThumb } from "../../components/Cards/CardThumb/CardThumb";

const HomePage = () => {
  const [dataHousing, setDataHousing] = useState([]);
  const [loadingHousing, setLoadingHousing] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const getData = async () => {
      try {
        const data = await fetch("./backend/housing.json");
        const response = await data.json();

        if (!isMounted) return;

        setDataHousing(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingHousing(false);
      }
    };
    getData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className={styles.mainContainer}>
      <Card bgImage={APP_IMAGES_ASSETS.image.home} className={styles.mainCard}>
        <p className={styles.slogan}>Chez vous, partout et ailleurs</p>
      </Card>

      <div className={styles.content}>
        {loadingHousing && <>Loader</>}
        {dataHousing?.map((house, index) => (
          <CardThumb key={house.id + index} house={house}>
            {house.title}
          </CardThumb>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
