import styled from "styled-components";

export const Pretty = styled.button`
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
  max-width: 50%;
  font-size: 24px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
`;
export const StyledDiv = styled.div`
  margin-top: 50px;
  max-width: 30%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

export const Producto = styled.p`
  width: 100%;
  font-size: 16px;
  box-shadow: 10px 10px 25px 1px rgba(183, 183, 183, 0.75);
  background-color: #cd6acd;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 30px;
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
export const OtherProducts = styled.div`
  border-color: black;
  border-radius: 8px;
`;
export const Panel = styled.div`
  border: 1px solid #848485;
`;
