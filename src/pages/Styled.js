import styled from "styled-components";

export const MyBody = styled.div`
  background-image: url("../images/gradient.png");
  background-size: cover;
`;

export const Pretty = styled.button`
  background-image: url("../images/gradient.png");
  background-size: cover;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  min-width: 40%;
`;
export const Pretty2 = styled.h4`
  display: flex;
  position: relative;
  justify-content: center;
  max-width: 100%;
  font-size: 44px;
  margin-top: 20px;
  margin-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledDiv = styled.div`
  max-width: 30%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const Producto = styled.p`
  font-size: 22px;
  box-shadow: 10px 10px 25px 1px rgba(183, 183, 183, 0.75);
  background-color: #cd6acd;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: ${(props) => props.style};
  padding: 30px;
  z-index: 0;
  color: black;
  &:hover {
    background-color: #aa4daa;
    box-shadow: 10px 10px 25px 1px rgba(240, 150, 233, 0.75);
  }
`;
export const Total = styled.p`
  background-color: #ffffff;
  font-size: 22px;
  color: #030303;
  max-width: 50%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;
export const DivOculto = styled.div`
  /* visibility: hidden !important; */
  display: flex;
  margin: 20px;
  margin-left: 600px;
  z-index: 0;
  font-size: 16px;
`;
export const OtherProducts = styled.div`
  border-color: #dfdddd;
  background-color: #b897b2;
  border: 0.5px solid #dfdddd;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-width: 200px;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;
export const Buttons = styled.button`
  background-color: #c9a6c2;
  border-color: #d6d5d5;

  max-width: 50px;
  font-size: 20px;
  border-radius: 35px;
  box-shadow: 10px 10px 25px 1px rgba(183, 183, 183, 0.75);
  &:hover {
    background-color: #b478b4;
    box-shadow: 10px 10px 25px 1px rgba(236, 171, 231, 0.75);
  }
`;
export const Panel = styled.div`
  border: none;
  margin: 0px;
  padding: 0px;
`;
