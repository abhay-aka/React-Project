import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Photo from "./Photo"; // Import the new Photo component

const unsplashAccessKey = process.env.UNPSLASH_ACCESS_KEY;

const PhotoGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const query = "nature"; // The search term
        const perPage = 12; // Number of items per page (12 in this case)
        const page = 1; // Page number
        const orderBy = "latest"; // Sort by latest

        const url = `https://api.unsplash.com/photos/?client_id=${unsplashAccessKey}&query=${query}&per_page=${perPage}&page=${page}&order_by=${orderBy}`;

        const imageData = await fetch(url, { method: "GET" });
        const data = await imageData.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    }

    const results = fetchImages();
    results.then((result) => {
      if (result) {
        setImages(result);
      }
    });
  }, []);

  return images.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <h1>Photo Gallery</h1>
      <div className="flex flex-wrap  justify-evenly">
        {images.map((image) => (
          <Photo
            key={image.id} // Use a unique key for each item
            src={image?.urls?.small}
            alt={image?.alt_description}
          />
        ))}
      </div>
    </>
  );
};

export default PhotoGallery;
