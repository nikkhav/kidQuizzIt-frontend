import React from "react";
import Wrapper from "../components/Wrapper";
import aboutImg from "../images/swiper1.avif";

function About() {
  return (
    <>
      <Wrapper>
        <div className="w-full flex-col items-center justify-center">
          <h2 className="items-center flex-col text-center text-black font-main font-bold text-6xl sm:text-7xl md:text-7xl lg:text-7xl">
            About us
            <div className="w-28 h-1 bg-green mx-auto mt-3"></div>
          </h2>
        </div>
      </Wrapper>
      <img src={aboutImg} alt="" className="w-full h-96 object-cover my-16 md:my-20" />
      <Wrapper>
        <p className="font-main font-normal text-black text-lg sm:text-2xl leading-7 mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quasi
          sunt veritatis. Sit velit libero architecto fugit sunt voluptas nam
          vitae aspernatur voluptate hic, aliquam dolores incidunt sapiente
          laudantium beatae quos consectetur aut ab quidem commodi veniam
          possimus? Ad quo nesciunt veniam, labore consequuntur modi eos
          repellendus corporis reprehenderit vel. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Error quasi sunt veritatis. Sit velit
          libero architecto fugit sunt voluptas nam vitae aspernatur voluptate
          hic, aliquam dolores incidunt sapiente laudantium beatae quos
          consectetur aut ab quidem commodi veniam possimus? Ad quo nesciunt
          veniam, labore consequuntur modi eos repellendus corporis
          reprehenderit vel.
        </p>
        <p className="font-main font-normal text-black text-lg sm:text-2xl leading-7 mb-16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error quasi
          sunt veritatis. Sit velit libero architecto fugit sunt voluptas nam
          vitae aspernatur voluptate hic, aliquam dolores incidunt sapiente
          laudantium beatae quos consectetur aut ab quidem commodi veniam
          possimus? Ad quo nesciunt veniam, labore consequuntur modi eos
          repellendus corporis reprehenderit vel. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Error quasi sunt veritatis. Sit velit
          libero architecto fugit sunt voluptas nam vitae aspernatur voluptate
          hic, aliquam dolores incidunt sapiente laudantium beatae quos
          consectetur aut ab quidem commodi veniam possimus? Ad quo nesciunt
          veniam, labore consequuntur modi eos repellendus corporis
          reprehenderit vel.
        </p>
      </Wrapper>
    </>
  );
}

export default About;
