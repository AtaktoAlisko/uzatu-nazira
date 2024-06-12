import React, { useEffect } from "react";
import Image from "next/image";

const BootstrapCarousel: React.FC = () => {
  useEffect(() => {
    const bootstrapCSS = document.createElement("link");
    bootstrapCSS.rel = "stylesheet";
    bootstrapCSS.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    bootstrapCSS.integrity =
      "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH";
    bootstrapCSS.crossOrigin = "anonymous";
    document.head.appendChild(bootstrapCSS);

    const bootstrapJS = document.createElement("script");
    bootstrapJS.src =
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    bootstrapJS.integrity =
      "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
    bootstrapJS.crossOrigin = "anonymous";
    document.body.appendChild(bootstrapJS);

    return () => {
      document.head.removeChild(bootstrapCSS);
      document.body.removeChild(bootstrapJS);
    };
  }, []);

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide w-full px-3 xs:h-[350px] sms:h-[477px] sms:w-[414px]"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner h-full rounded-2xl">
        <div className="carousel-item active h-full">
          <Image
            src="/nazira-1.png"
            className="d-block h-full w-full"
            alt="Wild Landscape"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/nazira-2.png"
            className="d-block h-full w-full"
            alt="Camera"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="carousel-item h-full">
          <Image
            src="/nazira-3.jpg"
            className="d-block h-full w-full"
            alt="Exotic Fruits"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default BootstrapCarousel;
