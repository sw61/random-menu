import Dinner from "../jsons/Dinner.json";
const DinnerList = () => {
  return (
    <>
      {Dinner.dinner.map((item) => {
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
export default DinnerList;
