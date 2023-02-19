import styled from "styled-components";

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
  color: #8d8b8c;
  justify-content: center;
  max-width: 100%;
  font-size: 32px;
  margin-top: 20px;
  margin-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledDiv = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const Producto = styled.p`
  font-size: 22px;
  /* box-shadow: 10px 10px 25px 1px rgba(240, 125, 211, 0.75); */
  background-color: #e6e9f0;
  border-radius: 5px;

  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px;
  z-index: 0;
  color: #868586;
  &:hover {
    box-shadow: 10px 10px 25px 0.5px rgba(220, 217, 220, 0.75);
    color: #414041;
  }
  &selected {
    background-color: white;
    color: white;
  }
`;
export const Total = styled.p`
  font-family: url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
  font-size: 32px;
  color: #8d8b8c;
  max-width: 30%;
  display: flex;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: center;
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
  border: 0.5px solid #dfdddd;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;
export const Buttons = styled.button`
  background-color: #eeeff3;
  border-color: #d6d5d5;
  margin: 5px;
  font-size: 16px;
  width: 100%;
  max-width: 50px;
  border-radius: 35px;
  &:hover {
    background-color: #e6e9f0;
    box-shadow: 10px 10px 25px 1px rgba(183, 183, 183, 0.75);
  }
`;
export const Panel = styled.div`
  border: none;
  margin: 0px;
  padding: 0px;
`;
