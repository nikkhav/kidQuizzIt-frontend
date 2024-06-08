import Questions from "../../singlePages/questions/Questions";
import Coloration from "../../singlePages/coloration/Coloration";
import Difference from "../../singlePages/difference/Difference";
import { useParams } from "react-router-dom";
import Why from "../../singlePages/why/Why";
import Game from "../../singlePages/game/Game";
import Tale from "../../singlePages/tale/Tale";
import Tour from "../../singlePages/tour/Tour.tsx";

const SinglePage = () => {
  const params = useParams();
  const parentId = Number(params.parent_id);
  const Id = Number(params.id);
  return parentId == 1 ? (
    <Questions itemId={Id} itemParentId={parentId} />
  ) : parentId == 2 ? (
    <Coloration itemId={Id} itemParentId={parentId} />
  ) : parentId == 3 ? (
    <Why itemId={Id} itemParentId={parentId} />
  ) : parentId == 41 ? (
    <Game itemId={Id} itemParentId={parentId} />
  ) : parentId == 40 ? (
    <Tale itemId={Id} itemParentId={parentId} />
  ) : parentId == 58 ? (
    <Tour itemId={Id} itemParentId={parentId} />
  ) : null;

  // ) : (
  //   <Difference itemId={Id} itemParentId={parentId} />
  // );
};

export default SinglePage;
