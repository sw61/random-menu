import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const DropDown = ({ days, setIsOpen }) => {
  const navigate = useNavigate();
  const movePage = (id) => {
    navigate(`/search/${id}`);
  };

  return (
    <DropList>
      {days.map((day) => (
        <DropText
          key={day.id}
          onClick={() => {
            setIsOpen(false);
            movePage(day.id);
          }}
        >
          {day.day}
        </DropText>
      ))}
    </DropList>
  );
};
export default DropDown;
const DropList = styled.div``;
const DropText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 50px;
  color: #e1e1e1;
  background-color: #7077a1;
  cursor: pointer;
  border: 1px solid black;
`;
