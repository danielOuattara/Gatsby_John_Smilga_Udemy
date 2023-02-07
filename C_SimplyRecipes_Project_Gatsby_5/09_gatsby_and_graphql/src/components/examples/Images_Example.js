import React from "react";
import styled from "styled-components";
// import big from "./../../assets/images/big.jpg";
import { StaticImage } from "gatsby-plugin-image";

const ImagesExample = () => {
  return (
    <Wrapper>
      {/* <img src={big} alt="food salad" /> */}
      <StaticImage src={"./../../assets/images/big0.jpg"} alt="food salad" />
      <StaticImage
        src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="fish meal"
      />
      <h2>Gatsby Image</h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    width: 400px;
  }
`;

export default ImagesExample;
