import React from "react";
import Questions from "../singlePages/Questions";
import Coloration from "../singlePages/Coloration";
import Difference from "../singlePages/Difference";
import { useParams } from "react-router-dom";
import Why from "../singlePages/Why";

const SinglePage = () => {
  const params = useParams();
  const parentId = Number(params.parent_id);
  const Id = Number(params.id);

  // if (parentId == 1) {
  //   return <Questions itemId={Id} itemParentId={parentId} />;
  // } else if (parentId == 2) {
  //   return <Coloration />;
  // } else if (parentId == 3) {
  //   return <Why />;
  // } else {
  //   return <Difference />;
  // }

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
