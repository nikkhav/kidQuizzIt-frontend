import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchGame } from "../../store/actions/gameAction";
import { gameData } from "../../types/gameData";
import Loading from "../../components/loading/Loading";
import "./game.css";

type GameProps = {
  itemId: number;
  itemParentId: number;
};

const Game: React.FC<GameProps> = ({ itemId, itemParentId }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { game, loadingGame, errorGame } = useAppSelector(
    (state) => state.game,
  );
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchGame()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (game) {
      const index = game.findIndex(
        (g) => g.category.parent_id === itemParentId && g.id === itemId,
      );
      setCurrentIndex(index);
    }
  }, [game, itemId, itemParentId]);

  const navigateToGame = (index: number) => {
    // @ts-ignore
    const gameItem = game[index];
    navigate(`/single-page/${gameItem.category.parent_id}/${gameItem.id}`);
  };

  const handlePrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      navigateToGame(currentIndex - 1);
    }
  };

  const handleNext = () => {
    // @ts-ignore
    if (currentIndex !== null && currentIndex < game.length - 1) {
      navigateToGame(currentIndex + 1);
    }
  };

  if (loadingGame) return <Loading />;
  if (errorGame) return <p>{errorGame}</p>;
  if (!game || currentIndex === null || !game[currentIndex])
    return <p>No game found</p>;

  const currentItem = game[currentIndex];

  let displayTitle = currentItem ? currentItem.title : "";

  if (displayTitle.includes("<p>")) {
    displayTitle = displayTitle.replace(/<p>/g, "").replace(/<\/p>/g, "");
  }

  return (
    <>
      <div className="container">
        <div className="game">
          <h1
            className="game_title"
            dangerouslySetInnerHTML={{ __html: displayTitle }}
          ></h1>
          <img src={currentItem.image} alt="Game Visual" />
          <p dangerouslySetInnerHTML={{ __html: currentItem.description }}></p>
          <div className="navigation">
            {currentIndex > 0 && (
              <button onClick={handlePrev}>Previous Game</button>
            )}
            {currentIndex < game.length - 1 && (
              <button onClick={handleNext}>Next Game</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
