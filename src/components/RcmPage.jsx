import { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import DropDown from "./DropDown";

const RcmPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [days, setDays] = useState([
    { id: 1, day: "아침", time: "Break" },
    { id: 2, day: "점심", time: "Lunch" },
    { id: 3, day: "저녁", time: "Dinner" },
  ]);
  const { asd } = useParams();
  return (
    <RcmWrapper>
      <DropDownWrapper>
        <DropHeader onClick={() => setIsOpen(!isOpen)}>
          아침 / 점심 / 저녁 선택
        </DropHeader>
        {isOpen && <DropDown days={days} setIsOpen={setIsOpen} />}
      </DropDownWrapper>

      <ButtonText>추천 메뉴</ButtonText>
      <ButtonText>
        <a href="https://www.naver.com/" target="_blank">
          메뉴 보러 가기
        </a>
      </ButtonText>
    </RcmWrapper>
  );
};
export default RcmPage;

const RcmWrapper = styled.div``;
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
  cursor: pointer;
`;
const ButtonText = styled.button`
  background-color: #7077a1;
  color: #e1e1e1;
  border: none;
  border: 1px solid black;
  cursor: pointer;
`;
