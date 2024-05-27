import React from "react";
import { childCategory } from "../../types/childCategory.ts";
import "./categoryCard.css";
import { Link } from "react-router-dom";
import categoryImageDefault from "../../images/quiz.jpg";
import quizAnimals from "../../images/categoriesImages/quiz_animals.webp";
import quizBellowed from "../../images/categoriesImages/quiz_bellowed.webp";
import quizHistory from "../../images/categoriesImages/quiz_history.webp";
import quizGeography from "../../images/categoriesImages/quiz_geography.webp";
import quizSpace from "../../images/categoriesImages/quiz_space.webp";
import colouringsAnimals from "../../images/categoriesImages/colourings_animals.webp";
import colouringsCartoons from "../../images/categoriesImages/colourings_cartoons.webp";
import colouringsGames from "../../images/categoriesImages/colourings_games.webp";
import colouringsGeography from "../../images/categoriesImages/colourings_geography.webp";
import colouringsVehicles from "../../images/categoriesImages/colourings_vehicles.webp";
import whyAnimals from "../../images/categoriesImages/why_animals.webp";
import whyHuman from "../../images/categoriesImages/why_human.webp";
import whyNature from "../../images/categoriesImages/why_nature.webp";
import whySpace from "../../images/categoriesImages/why_space.webp";
import whyMechanics from "../../images/categoriesImages/why_mechanics.webp";
import whyScience from "../../images/categoriesImages/why_science.webp";
import whyDinosaurs from "../../images/categoriesImages/why_dinosaurs.webp";
import puzzle_gifts from "../../images/categoriesImages/puzzle_gifts.webp";
import fairy_adventure from "../../images/categoriesImages/fairy_adventure.webp";
import fairy_fables from "../../images/categoriesImages/fairy_fables.webp";
import fairy_romance from "../../images/categoriesImages/fairy_romance.webp";
import fairy_historical from "../../images/categoriesImages/fairy_historical.webp";
import fairy_friendship from "../../images/categoriesImages/fairy_friendship.webp";
import games_music from "../../images/categoriesImages/games_music.webp";
import games_brain from "../../images/categoriesImages/games_brain.webp";
import games_family from "../../images/categoriesImages/games_family.webp";
import games_active from "../../images/categoriesImages/games_active.webp";
import games_sport from "../../images/categoriesImages/games_sport.webp";
import games_table from "../../images/categoriesImages/games_table.webp";

type CategoryCardProps = {
  item: childCategory;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ item }) => {
  const getImageForCategory = (item: childCategory) => {
    // parent_id: 1 = quiz
    // parent_id: 2 = colouring
    // parent_id: 3 = why
    // parent_id: 4 = logic
    // parent_id: 40 = fairy
    // parent_id: 41 = game
    const parent_id = item.parent_id;
    const category_id = item.id;

    if (parent_id === 1) {
      if (category_id === 11) {
        return quizAnimals;
      }
      if (category_id === 12) {
        return quizBellowed;
      }
      if (category_id === 13) {
        return quizHistory;
      }
      if (category_id === 14) {
        return quizGeography;
      }
      if (category_id === 15) {
        return quizSpace;
      }
    }
    if (parent_id === 2) {
      if (category_id === 16) {
        return colouringsAnimals;
      }
      if (category_id === 17) {
        return colouringsCartoons;
      }
      if (category_id === 18) {
        return colouringsGames;
      }
      if (category_id === 19) {
        return colouringsGeography;
      }
      if (category_id === 20) {
        return colouringsVehicles;
      }
    }

    if (parent_id === 3) {
      if (category_id === 5) {
        return whyAnimals;
      }
      if (category_id === 6) {
        return whyHuman;
      }
      if (category_id === 7) {
        return whyNature;
      }
      if (category_id === 8) {
        return whySpace;
      }
      if (category_id === 9) {
        return whyMechanics;
      }
      if (category_id === 10) {
        return whyScience;
      }
      if (category_id === 52) {
        return whyDinosaurs;
      }
    }

    if (parent_id === 4) {
      if (category_id === 21) {
        return puzzle_gifts;
      }
    }

    if (parent_id === 40) {
      if (category_id === 42) {
        return fairy_adventure;
      }
      if (category_id === 43) {
        return fairy_fables;
      }
      if (category_id === 46) {
        return fairy_romance;
      }
      if (category_id === 47) {
        return fairy_historical;
      }
      if (category_id === 53) {
        return fairy_friendship;
      }
    }

    if (parent_id === 41) {
      if (category_id === 44) {
        return games_music;
      }
      if (category_id === 45) {
        return games_brain;
      }
      if (category_id === 48) {
        return games_family;
      }
      if (category_id === 49) {
        return games_active;
      }
      if (category_id === 50) {
        return games_sport;
      }
      if (category_id === 51) {
        return games_table;
      }
    }

    return categoryImageDefault;
  };

  const imageSrc = getImageForCategory(item);
  const altText = item.title;
  return (
    <Link
      to={`/catalog/${item.parent_id}/${item.id}`}
      className={"category_card"}
    >
      <img
        loading="lazy"
        src={imageSrc}
        sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
        alt={altText}
      />
      <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
    </Link>
  );
};

export default CategoryCard;
