// Photo.js
const Photo = ({ src, alt }) => {
    return (
      <div className="h-50 w-50 py-10 overflow-hidden"> 
        {/* Set fixed height and width for image container */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover" 
          // Make the image fill the container with object-cover
        />
      </div>
    );
  };
  
  export default Photo;
  