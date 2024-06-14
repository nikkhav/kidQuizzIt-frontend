import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./tour.module.css";
import axios from "../../axios";
import { tourData } from "../../types/TourData.ts";

type TourProps = {
  itemId: number;
  itemParentId: number;
};

const Tour: React.FC<TourProps> = ({ itemId, itemParentId }) => {
  const [tour, setTour] = useState<tourData>();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const formatContent = (content: string) => {
    const lines = content.split("\n");

    // Map each line to check for headers, list items, and bold text
    const formattedLines = lines.map((line: string) => {
      // Removing all HTML tags for safety and clarity
      line = line.replace(/<\/?[^>]+(>|$)/g, "");

      // Replace markdown headers with HTML headers with margin styles
      if (line.startsWith("### ")) {
        return `<h3 style="margin-top: 16px; margin-bottom: 10px;">${line.slice(
          4,
        )}</h3>`;
      } else if (line.startsWith("## ")) {
        return `<h2 style="margin-top: 24px; margin-bottom: 10px;">${line.slice(
          3,
        )}</h2>`;
      } else if (line.startsWith("# ")) {
        return `<h1 style="margin-top: 32px; margin-bottom: 10px; line-height: 1">${line.slice(
          2,
        )}</h1>`;
      }

      // Handle numbered lists by wrapping in divs, preserving list formatting
      if (line.match(/^\d+\./)) {
        // Apply bold text conversion within list items
        line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        return `<div>${line}</div>`;
      }

      // Convert markdown bold (**text**) to HTML bold (<strong>text</strong>)
      // This conversion is applied to all lines, ensuring no bold markers are missed
      line = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

      return line;
    });

    // Join the lines back together into a single string
    return formattedLines.join("\n");
  };

  const getTour = async () => {
    try {
      const response = await axios.get("tour");
      // Format content descriptions before setting the state
      const formattedData = response.data.map((item: any) => ({
        ...item,
        description1: formatContent(item.description1),
        description2: formatContent(item.description2),
      }));
      setTour(formattedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTour();
  }, []);

  useEffect(() => {
    // @ts-ignore
    const index = tour?.findIndex(
      // @ts-ignore
      (a) => a.category.parent_id === itemParentId && a.id === itemId,
    );
    // @ts-ignore
    setCurrentIndex(index);
  }, [tour, itemId, itemParentId]);

  if (currentIndex === null) return null; // Early return if index isn't set

  const currentItem = tour ? tour[currentIndex] : undefined;

  const handleNext = () => {
    // @ts-ignore
    if (currentIndex !== null && currentIndex < tour.length - 1) {
      // @ts-ignore
      const nextItem = tour[currentIndex + 1];
      navigate(`/single-page/${nextItem.category.parent_id}/${nextItem.id}`);
    }
  };

  const handlePrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      // @ts-ignore
      const prevItem = tour[currentIndex - 1];
      navigate(`/single-page/${prevItem.category.parent_id}/${prevItem.id}`);
    }
  };

  let displayTitle;

  if (currentItem) {
    displayTitle = currentItem.title;
    // Remove <p> tags if present in the title
    displayTitle = displayTitle.replace(/<\/?p>/g, "");
  }

  return (
    <>
      {/*{errorWhy && <p>{errorWhy}</p>}*/}
      {/*{loadingWhy && <Loading />}*/}
      {currentItem && (
        <div className="container">
          <div className={styles.answer}>
            <div>
              <h1
                className={styles.tour_title}
                dangerouslySetInnerHTML={{ __html: displayTitle }}
              ></h1>
              <p className={styles.city}>
                {currentItem.city.name}, {currentItem.city.country.name}
              </p>
            </div>

            <img src={currentItem.image} alt={currentItem.title} />
            <p
              dangerouslySetInnerHTML={{ __html: currentItem.description1 }}
            ></p>
            {currentItem.description2 && (
              <p
                dangerouslySetInnerHTML={{ __html: currentItem.description2 }}
              ></p>
            )}
            <div className="navigation">
              {currentIndex > 0 && (
                <button onClick={handlePrev}>Previous Question</button>
              )}
              {/* @ts-ignore*/}
              {currentIndex < tour.length - 1 && (
                <button onClick={handleNext}>Next Question</button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Tour;
