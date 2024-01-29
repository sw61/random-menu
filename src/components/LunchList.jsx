import Lunch from "../jsons/Lunch.json";
const LunchList = () => {
  return (
    <>
      {Lunch.lunch.map((item) => {
        return (
          <div>
            <img src={item.imgUrl} />
            <div>{item.menu}</div>
          </div>
        );
      })}
    </>
  );
};
export default LunchList;
