import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./tale.css";

type TaleProps = {
  itemId: number;
  itemParentId: number;
};

const Tale: React.FC<TaleProps> = ({ itemId, itemParentId }) => {
  const [tales, setTales] = useState([]);
  const [tale, setTale] = useState({ title: "", image: "", description: "" });
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const getTales = async () => {
    try {
      const response = await axios.get("tale");
      setTales(response.data);
      const initialIndex = response.data.findIndex(
        (item: any) =>
          item.category.parent_id === itemParentId && item.id === itemId,
      );
      setCurrentIndex(initialIndex);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTales();
  }, []);

  useEffect(() => {
    if (tales.length > 0 && currentIndex !== null) {
      setTale(tales[currentIndex]);
    }
  }, [currentIndex, tales]);

  const handleNext = () => {
    if (currentIndex !== null && currentIndex < tales.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!tale) return <p>No tale found</p>;

  let displayTitle = tale.title.replace(/<\/?p>/g, "");

  return (
    <div className="container">
      <div className="tale">
        <h1
          className="tale_title"
          dangerouslySetInnerHTML={{ __html: displayTitle }}
        ></h1>
        {tale && <img src={tale.image} alt={tale.title} />}
        {tale && <p dangerouslySetInnerHTML={{ __html: tale.description }}></p>}
        <div className="navigation">
          {currentIndex > 0 && (
            <button onClick={handlePrev}>Previous Tale</button>
          )}
          {currentIndex < tales.length - 1 && (
            <button onClick={handleNext}>Next Tale</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tale;
