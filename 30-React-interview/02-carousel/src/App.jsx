import { useEffect, useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  console.log(images);

  // https://jsonplaceholder.typicode.com/photos?_limit=8

  const fetchImages = async (imageLimit) => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${imageLimit}`
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error in fetchImages", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(8);
  }, []);

  return (
    <div className="cariusel-container">
      <Carousel
        images={images}
        isLoading={loading}
        // onImageClick={(image, index) => {}}
        imageLimit={4}
        imagePerSlide={3}
        customPrevButton={(onClick) => (
          <button className="btn prev" onClick={onClick}>
            Prev
          </button>
        )}
        customNxtButton={(onClick) => (
          <button className="btn next" onClick={onClick}>
            Next
          </button>
        )}
      />
    </div>
  );
}

export default App;
