"use client";

import { ReviewAboutCard } from "./ui/ReviewAboutCard";
import styles from "./ReviewsAbout.module.scss";
import { REVIEW_ABOUT_ARRAY, reviewsAboutSettings } from "./lib/consts";
import { ContainerIllumination, ProjectSlider, SwipeButton } from "@/shared";
import { useRef } from "react";
import Slider from "react-slick";

export const ReviewAbout = () => {
  const sliderRef = useRef<Slider>(null);

  const getToNextSlide = () => sliderRef.current?.slickNext();
  const getToPrevSlide = () => sliderRef.current?.slickPrev();

  return (
    <section className={styles.reviewAbout}>
      <h2>Отзывы о нас</h2>

      <div className={styles.containerInfoReviewAbout}>
        <ContainerIllumination
          stylesIllumination1={styles.illuminationReviewAbout}
          stylesIllumination2={styles.illuminationReviewAbout2}
        />

        <div className={styles.infoReviewAbout}>
          <h3>Мы попросили наших клиентов написать пару слов о нас</h3>
          <div className={styles.containerSwitchTablet}>
            <SwipeButton directionSwipe="left" handleClick={getToPrevSlide} />
            <SwipeButton directionSwipe="right" handleClick={getToNextSlide} />
          </div>
        </div>

        <ProjectSlider
          otherSettings={reviewsAboutSettings}
          className={styles.containerReviewAboutCard}
          refSlider={sliderRef}
          component={REVIEW_ABOUT_ARRAY.map((review) => (
            <ReviewAboutCard
              key={review.id}
              name={review.name}
              surname={review.surname}
              description={review.description}
            />
          ))}
        />

        <div className={styles.containerSwitchMobile}>
          <SwipeButton directionSwipe="left" handleClick={getToPrevSlide} />
          <SwipeButton directionSwipe="right" handleClick={getToNextSlide} />
        </div>
      </div>
    </section>
  );
};
