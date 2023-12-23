import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchGame } from "../../store/actions/gameAction";
import { gameData } from "../../types/gameData";
import Loading from "../../components/loading/Loading";
import "./game.css"

type GameProps = {
  itemId: number;
  itemParentId: number;
};
const Game: React.FC<GameProps> = ({ itemId, itemParentId }) => {
  // -----------------------
  const dispatch = useAppDispatch();

  const { game, loadingGame, errorGame } = useAppSelector(
    (state) => state.game
  );
  useEffect(() => {
    fetchGame()(dispatch);
  }, [dispatch]);
  const currentItem: gameData | undefined = game?.find(
    (a) => a.category.parent_id == itemParentId && a.id == itemId
  );
  return (
    <>
      {errorGame && <p>{errorGame}</p>}
      {loadingGame && <Loading />}
      {game && currentItem && (
        <div className="container">
          <div className="game">
            <h1 className="game_title" dangerouslySetInnerHTML={{ __html: currentItem.title }}></h1>
            <img src={currentItem.image} alt="" />
            <p dangerouslySetInnerHTML={{ __html: currentItem.description }}></p>
          </div>
        </div>
      )}
    </>
  );
};

export default Game;
