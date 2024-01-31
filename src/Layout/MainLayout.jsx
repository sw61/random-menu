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
  display: flex;
  background-color: #2d3250;
  height: 100vh;
  padding: 0 300px;
  gap: 20px;
  padding-top: 50px;
`;
