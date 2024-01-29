import Breakfast from "../jsons/Breakfast.json";
const BreakList = () => {
  return (
    <>
      {Breakfast.breakfast.map((item) => {
        return (
          <div>
            <img src={item.imgUrl}></img>
            <div>{item.menu}</div>
          </div>
        );
      })}
    </>
  );
};
export default BreakList;
