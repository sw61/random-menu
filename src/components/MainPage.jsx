import styled from "styled-components";
const MainPage = () => {
  return (
    <MainWrapper>
      <div>랜덤 메뉴 추천</div>
    </MainWrapper>
  );
};
export default MainPage;

// - 아침, 점심, 저녁 메뉴 선택 후 랜덤으로 추천해주는 기능.
// - 랜덤으로 메뉴 하나가 골라지면 버튼 클릭시 네이버에서 해당 메뉴 검색 된 화면이 열리게 개발.
// (예를 들어 마라탕이 나오면, 네이버에서 마라탕 검색한 화면이 열려야함.)
// - 페이지는 총 2개로 메인 페이지에는 서비스 랜딩 페이지,
// 그리고 메뉴 추천 페이지를 누를시 위 기능들이 있는 페이지로 이동하게 개발.
const MainWrapper = styled.div`
  background-color: #2d3250;
  height: 100vh;
`;
