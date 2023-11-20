import Questions from "../../singlePages/questions/Questions";
import Coloration from "../../singlePages/coloration/Coloration";
import Difference from "../../singlePages/difference/Difference";
import { useParams } from "react-router-dom";
import Why from "../../singlePages/why/Why";

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
  ) : (
    <Difference itemId={Id} itemParentId={parentId} />
  );
};

export default SinglePage;
