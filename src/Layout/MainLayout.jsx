import { Outlet } from "react-router-dom";
import RcmPage from "../components/RcmPage";
import styled from "styled-components";
const MainLayout = () => {
  return (
    <LayoutWrapper>
      <RcmPage />
      <Outlet />
    </LayoutWrapper>
  );
};
export default MainLayout;
const LayoutWrapper = styled.div`
  background-color: #2d3250;
  height: 100vh;
`;
