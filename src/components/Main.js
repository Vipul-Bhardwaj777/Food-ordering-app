import Search from "./search";
import resList from "../utils/mockData";
import ResCard from "./ResCard";

const Main = () => {
  return (
    <div className="main">
      <Search />
      <div className="container res-section">
        <h2>Restaurants with online food delivery near you</h2>
        <div className="card-section flex">
          {resList.map((restaurant) => (
            <ResCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
