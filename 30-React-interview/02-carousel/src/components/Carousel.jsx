import { useEffect, useRef, useState } from "react";

const Carousel = ({
  images = [],
  isloading = false,
  imageLimit = images.length - 1,
  customPrevButton,
  customNxtButton,
  onImageClick = () => {},
  imagePerSlide = 2,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);

  const imageRef = useRef(null);

  useEffect(() => {
    if (images.length > 0) {
      setCurrentIndex(0);
    }
  }, [images]);

  function prev() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function next() {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  //   console.log(imageRef.current?.offsetWidth);

  return isloading ? (
    <>Loading....</>
  ) : (
    <div className="carousel" style={{ width: imagePerSlide * width }}>
      <div
        className="image-container"
        style={{
          transform: `translateX(-${currentIndex * width}px)`,
        }}
      >
        {images
          .slice(0, imageLimit > images.length ? images.length : imageLimit)
          .map((image, index) => {
            return (
              <img
                onLoad={() => setWidth(imageRef.current?.offsetWidth)}
                ref={imageRef}
                key={image.id}
                src={image.url}
                alt={image.title}
                onClick={() => onImageClick(image, index)}
                className="image"
              />
            );
          })}
      </div>
      {customPrevButton instanceof Function ? (
        customPrevButton(prev)
      ) : (
        <button onClick={prev} className="btn prev">
          Prev
        </button>
      )}
      {customNxtButton instanceof Function ? (
        customNxtButton(next)
      ) : (
        <button onClick={next} className="btn next">
          Next
        </button>
      )}
    </div>
  );
};

export default Carousel;
