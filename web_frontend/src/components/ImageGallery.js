import React, { useState } from "react";
import "./ImageGallery.css";

/**
 * PUBLIC_INTERFACE
 * Image Gallery for displaying a set of images.
 * If only one image, shows it as static.
 * 
 * @param {{
 *   images: string[]
 * }} props
 */
const ImageGallery = ({ images }) => {
  const [current, setCurrent] = useState(0);
  if (!images || images.length === 0) return null;
  if (images.length === 1) {
    return (
      <div className="image-gallery single-img">
        <img src={images[0]} alt="Recipe" />
      </div>
    );
  }
  return (
    <div className="image-gallery">
      <img src={images[current]} alt={`Recipe ${current + 1}`} />
      <div className="gallery-controls">
        <button
          disabled={current === 0}
          onClick={() => setCurrent(current - 1)}
        >Prev</button>
        <span className="gallery-index">{current + 1} / {images.length}</span>
        <button
          disabled={current === images.length - 1}
          onClick={() => setCurrent(current + 1)}
        >Next</button>
      </div>
      <div className="gallery-thumbnails">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumb ${i + 1}`}
            className={current === i ? "active" : ""}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};
export default ImageGallery;
