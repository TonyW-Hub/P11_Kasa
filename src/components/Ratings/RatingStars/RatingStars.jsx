import React from "react";
import styles from "./RatingStars.module.scss";
import { APP_IMAGES_ASSETS } from "../../../project/appImagesAssets";

const RatingStars = ({ totalStars = 5, rating }) => {
  return (
    <div className={styles.rating}>
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={"rating" + index}
          src={
            index + 1 <= parseInt(rating)
              ? APP_IMAGES_ASSETS.icon.starActive
              : APP_IMAGES_ASSETS.icon.star
          }
          alt={`Étoile de notation`}
        />
      ))}
    </div>
  );
};

export default RatingStars;
