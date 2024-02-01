import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Menus from "./Menus.json";

const MainPage = () => {
  const [meal, setMeal] = useState();

  const changeMeal = (menuList) => {
    const randNum = Math.round(Math.random() * Menus.breakfast.length);
    setMeal(menuList[randNum]);
  };
  const navigate = useNavigate();
  const detailUrl =
    "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=";

  return (
    <MainWrapper>
      <MainHeader>랜덤 메뉴 추천</MainHeader>
      <BtnWrap>
        <BtnText onClick={() => changeMeal(Menus.breakfast)}>아침</BtnText>
        <BtnText onClick={() => changeMeal(Menus.lunch)}>점심</BtnText>
        <BtnText onClick={() => changeMeal(Menus.dinner)}>저녁</BtnText>
      </BtnWrap>
      <MenuCard>
        {meal && (
          <RandomMenu>
            <MenuImg src={meal.imgUrl}></MenuImg>
            <MenuText>{meal.menu}</MenuText>
          </RandomMenu>
        )}
      </MenuCard>
      {meal && (
        <NaverSearch href={detailUrl + meal.menu} target="_blank">
          네이버 검색
        </NaverSearch>
      )}
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
  width: 450px;
  height: 40px;
  background-color: #7077a1;
`;
const NaverSearch = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  background-color: #7077a1;
  color: #e1e1e1;
  text-decoration: none;
`;
const DetailBtn = styled.button`
  background-color: #7077a1;
  color: #e1e1e1;
  width: 150px;
  height: 40px;
  border: none;
  cursor: pointer;
`;
