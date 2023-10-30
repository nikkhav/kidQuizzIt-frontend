import React from "react";
import Wrapper from "../components/Wrapper";
import aboutImg from "../images/swiper1.avif";

function About() {
  return (
    <>
      <Wrapper>
        <h1 className="w-full my-16 mx-auto text-center text-7xl font-main font-semibold">
          ABOUT US
        </h1>
      </Wrapper>
      <img src={aboutImg} alt="" className="w-full h-96 object-cover my-20" />
      <Wrapper>
        <p className="font-main font-normal text-black text-xl leading-7 mb-4">
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
        <p className="font-main font-normal text-black text-xl leading-7 mb-16">
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
