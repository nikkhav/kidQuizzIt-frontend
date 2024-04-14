// import React from "react";
// import MySwiper from "../swiper/Swiper";
// import { differenceData } from "../../types/DifferenceData";
// import { WhyItem } from "../../types/whyItem";
// import { colouringData } from "../../types/colouringData";
// import "./swiperComponent.css";
// import { quizData } from "../../types/QuizData";
// import { fairyData } from "../../types/fairyData";
// import { gameData } from "../../types/gameData";
//
// type SwiperComponentProps = {
//   title: string | null;
//   why?: WhyItem[] | null;
//   difference?: differenceData[] | null;
//   colouring?: colouringData[] | null;
//   quiz?: quizData[] | null;
//   fairy?: fairyData[] | null;
//   game?: gameData[] | null;
// };
// const SwiperComponent: React.FC<SwiperComponentProps> = ({
//   title,
//   difference,
//   why,
//   colouring,
//   quiz,
//   fairy,
//   game,
// }) => {
//   return (
//     <div className="swiper_component">
//       {title ? (
//         <div className="container">
//           <h2 className="swiper_title">{title}</h2>
//         </div>
//       ) : (
//         ""
//       )}
//       <MySwiper
//         fairy={fairy}
//         quiz={quiz}
//         why={why}
//         difference={difference}
//         colouring={colouring}
//         game={game}
//       />
//     </div>
//   );
// };
//
// export default SwiperComponent;
