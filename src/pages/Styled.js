import styled from "styled-components";

export const Pretty = styled.button`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "area1 area2";
`;

export const Pretty2 = styled.h4`
  display: flex;
  position: relative;
  color: #5f5e5f;
  justify-content: center;
  max-width: 100%;
  font-weight: bold;
  font-size: 32px;
  margin-top: 20px;
  margin-bottom: -20px;
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
export const Presu = styled.div`
  background-color: transparent;
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
    color: #5f5e5f;
  }
  &selected {
    background-color: white;
    color: white;
  }
  input {
    padding: 10px;
  }
`;
export const ModalStyle = styled.div`
  color: black;
  position: relative;
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  text-align: end;
`;
export const Total = styled.p`
  font-family: url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
  font-size: 32px;
  color: #526173;
  max-width: 30%;
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  text-align: center;
`;
export const DivOculto = styled.div`
  /* visibility: hidden !important; */

  display: flex;
  position: relative;
  font-size: 16px;
  margin-right: 0px;
  margin-left: 1000px;
`;
export const OtherProducts = styled.div`
  border-color: #dfdddd;
  border: 0.5px solid #dfdddd;
  padding: 16px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 300px;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  section {
    display: flex;
    flex-direction: row;
  }
`;
export const Buttons = styled.button`
  background-color: #eeeff3;
  border-color: #d6d5d5;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  display: inline-flex;
  position: relative;
  align-items: center;
  width: 100%;
  max-width: 50px;
  border-radius: 35px;
  &:hover {
    background-color: #e6e9f0;
    box-shadow: 10px 10px 25px 0.5px rgba(220, 217, 220, 0.75);
  }
`;
export const Panel = styled.div`
  border: none;
  margin: 0px;
  padding: 0px;
`;
export const Welcome = styled.div`
  color: #526173;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  background-image: url("/sprint-7/src/images/gradient.png");
  p {
    font-size: 36px;
    font-weight: bold;
  }
  button {
    font-size: 22px;
    background-color: #e6e9f0;
    border: none;
    color: #526173;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    max-width: 200px;
    &:hover {
      background-color: #e6e9f0;
      box-shadow: 10px 10px 25px 0.5px rgba(220, 217, 220, 0.75);
    }
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
