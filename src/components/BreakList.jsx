import styled from "styled-components";
import Breakfast from "../jsons/Breakfast.json";
const BreakList = () => {
  const detailUrl =
    "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=";
  return (
    <MenuWrapper>
      {Breakfast.map((item) => {
        return (
          <MenuCard>
            <ImgBox src={item.imgUrl}></ImgBox>
            <MenuText>{item.menu}</MenuText>
            <NaverLink href={detailUrl + item.menu} target="_blank">
              네이버 검색
            </NaverLink>
          </MenuCard>
        );
      })}
    </MenuWrapper>
  );
};
export default BreakList;
const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const MenuCard = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImgBox = styled.img`
  display: flex;
  width: 200px;
  height: 150px;
`;
const MenuText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e1e1e1;
  background-color: #424769;
  height: 35px;
`;
const NaverLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #7077a1;
  color: #e1e1e1;
  text-decoration: none;
  height: 35px;
`;
