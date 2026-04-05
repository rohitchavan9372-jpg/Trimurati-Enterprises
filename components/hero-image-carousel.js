"use client";

import { useEffect, useState } from "react";
import { MediaFrame } from "@/components/media";

export default function HeroImageCarousel({ images, alt }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!Array.isArray(images) || images.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, [images]);

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <div className="hero-carousel" aria-label={`${alt} image carousel`}>
      <div className="hero-carousel__viewport">
        <div
          className="hero-carousel__track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={`${image}-${index}`} className="hero-carousel__slide">
              <MediaFrame
                src={image}
                alt={`${alt} image ${index + 1}`}
                className="image-frame hero-carousel__frame"
                priority={index === 0}
                sizes="(max-width: 980px) 100vw, 42vw"
              />
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 ? (
        <div className="hero-carousel__dots" aria-label="Carousel navigation">
          {images.map((image, index) => (
            <button
              key={`${image}-dot`}
              type="button"
              className={`hero-carousel__dot${index === activeIndex ? " is-active" : ""}`}
              aria-label={`Go to image ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
