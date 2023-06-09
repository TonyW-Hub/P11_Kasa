import React, { useEffect, useState } from "react";
import styles from "./HousePage.module.scss";
import { useNavigate, useParams } from "react-router";
import { Card } from "../../components/Cards/Card/Card";
import { APP_IMAGES_ASSETS } from "../../project/appImagesAssets";
import { CardToggle } from "../../components/Cards/CardToggle/CardToggle";
import Loader from "../../components/Loaders/Loader/Loader";
import Pill from "../../components/Pills/Pill/Pill";
import { APP_LINKS } from "../../project/appLinks";
import RatingStars from "../../components/Ratings/RatingStars/RatingStars";

const HousePage = () => {
  const [house, setHouse] = useState({});
  const [loader, setLoader] = useState(true);

  const [currentSlide, setCurrentSlide] = useState(0);

  const params = useParams();

  const navigate = useNavigate();

  const handleClickCarousel = (direction) => {
    if (direction === "next") {
      setCurrentSlide((prev) => {
        if (prev === house?.pictures?.length - 1) return 0;
        return prev + 1;
      });
    } else {
      setCurrentSlide((prev) => {
        if (prev <= 0) return house?.pictures?.length - 1;
        return prev - 1;
      });
    }
  };

  useEffect(() => {
    let isMounted = true;

    const getHouse = async () => {
      try {
        const data = await fetch("/backend/housing.json");
        const response = await data.json();
        if (!isMounted) return;

        const getCurrentHouse = response.filter(
          (house) => house.id === params.id
        );

        if (!getCurrentHouse[0]) navigate(APP_LINKS.error);

        setHouse(getCurrentHouse[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };

    getHouse();

    return () => {
      isMounted = false;
    };
  }, [params, navigate]);

  if (loader) {
    return <Loader absolute>Chargement du logement...</Loader>;
  }

  if (!loader && !house) {
    return <p>Erreur de données</p>;
  }

  return (
    <div className={styles.page}>
      <Card className={styles.carousel}>
        {house?.pictures?.map((img, index) => (
          <img
            key={"house images" + index}
            src={img}
            alt={
              house.pictures.lenght > 1
                ? `Images de ${house?.title}`
                : `Image de ${house?.title}`
            }
            loading="lazy"
            style={currentSlide !== index ? { display: "none" } : {}}
          />
        ))}
        {house?.pictures?.length > 1 && (
          <React.Fragment>
            <p className={styles.indicator}>
              {currentSlide + 1}/{house?.pictures?.length}
            </p>
            <button
              onClick={() => {
                handleClickCarousel("prev");
              }}
              className={styles.prev}
            >
              <img
                src={APP_IMAGES_ASSETS.icon.angleCarousel}
                alt="Icone d'angle"
              />
            </button>
            <button
              onClick={() => {
                handleClickCarousel("next");
              }}
              className={styles.next}
            >
              <img
                src={APP_IMAGES_ASSETS.icon.angleCarousel}
                alt="Icone d'angle"
              />
            </button>
          </React.Fragment>
        )}
      </Card>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.information}>
            <div className={styles.title}>
              <h2 className={styles.titleName}>{house?.title}</h2>
              <p className={styles.location}>{house?.location}</p>
            </div>

            <div className={styles.tags}>
              {house?.tags?.map((tag, index) => (
                <Pill className={styles.pill} key={"tag" + index}>
                  {tag}
                </Pill>
              ))}
            </div>
          </div>

          <div className={styles.profileInformation}>
            <div className={styles.host}>
              <p className={styles.hostName}>{house?.host?.name}</p>
              <img
                src={house?.host?.picture}
                alt={`${house?.host?.name} l'hôte`}
                className={styles.hostPicture}
              />
            </div>

            {house?.rating && <RatingStars rating={house?.rating} />}
          </div>
        </div>

        <div className={styles.cardToggleContainer}>
          <CardToggle title={"Description"}>
            <p>{house?.description}</p>
          </CardToggle>
          <CardToggle title={"Équipements"}>
            <ul>
              {house?.equipments?.map((equipment, index) => (
                <li key={equipment + index}>{equipment}</li>
              ))}
            </ul>
          </CardToggle>
        </div>
      </div>
    </div>
  );
};

export default HousePage;
