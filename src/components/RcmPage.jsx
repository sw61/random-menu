import { useState } from "react";
import styled from "styled-components";

import DropDown from "./DropDown";

const RcmPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [days, setDays] = useState([
    { id: 1, day: "아침" },
    { id: 2, day: "점심" },
    { id: 3, day: "저녁" },
  ]);

  return (
    <DropDownWrapper>
      <DropHeader onClick={() => setIsOpen(!isOpen)}>
        아침 / 점심 / 저녁 선택
      </DropHeader>
      {isOpen && <DropDown days={days} setIsOpen={setIsOpen} />}
    </DropDownWrapper>
  );
};
export default RcmPage;

const DropDownWrapper = styled.div``;
const DropHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 50px;
  color: #e1e1e1;
  background-color: #7077a1;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`;
