import Image from 'next/image';

const ImageGrid = () => {
  const gridSize = 10;

  const renderImages = () => {
    const images = [];

    for (let i = 1; i <= gridSize; i++) {
      for (let j = 1; j <= gridSize; j++) {
        const imageSrc = '/images/cards/card-back3.png';
        images.push(
          <div key={`${i}_${j}`} className="image-container">
            <Image src={imageSrc} alt={`Image ${i}_${j}`} width={100} height={140} />
          </div>
        );
        
      }
      images.push(<div>PP</div>)
    }

    return images;
  };

  return <div className="grid-container">{renderImages()}</div>;
};

export default ImageGrid;
