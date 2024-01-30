import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Breakfast from "../jsons/Breakfast.json";
import Lunch from "../jsons/Lunch.json";
import Dinner from "../jsons/Dinner.json";

const MainPage = () => {
  const [meal, setMeal] = useState();

  const changeMeal = (menuList) => {
    const randNum = Math.round(Math.random() * Breakfast.length);
    setMeal(menuList[randNum]);
  };
  const navigate = useNavigate();

  return (
    <MainWrapper>
      <MainHeader>랜덤 메뉴 추천</MainHeader>
      <BtnWrap>
        <BtnText onClick={() => changeMeal(Breakfast)}>아침</BtnText>
        <BtnText onClick={() => changeMeal(Lunch)}>점심</BtnText>
        <BtnText onClick={() => changeMeal(Dinner)}>저녁</BtnText>
      </BtnWrap>
      <MenuCard>
        {meal && (
          <RandomMenu>
            <MenuImg src={meal.imgUrl}></MenuImg>
            <MenuText>{meal.menu}</MenuText>
          </RandomMenu>
        )}
      </MenuCard>
      <DetailBtn onClick={() => navigate("/search")}>
        메뉴 리스트 보러가기
      </DetailBtn>
    </MainWrapper>
  );
};
export default MainPage;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  background-color: #2d3250;
  height: 100vh;
  gap: 20px;
`;
const MainHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7077a1;
  color: #e1e1e1;
  width: 500px;
  height: 50px;
  font-size: 23px;
  font-weight: bold;
`;
const MenuCard = styled.div`
  display: flex;
  justify-content: center;
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  gap: 30px;
`;
const BtnText = styled.button`
  background-color: #7077a1;
  color: #e1e1e1;
  width: 50px;
  height: 30px;
  border: none;
  cursor: pointer;
`;
const RandomMenu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid #7077a1;
`;
const MenuImg = styled.img`
  width: 450px;
  height: 350px;
`;
const MenuText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e1e1e1;
  font-weight: bold;
  height: 40px;
`;
const DetailBtn = styled.button`
  background-color: #7077a1;
  color: #e1e1e1;
  width: 150px;
  height: 40px;
  border: none;
  cursor: pointer;
`;
