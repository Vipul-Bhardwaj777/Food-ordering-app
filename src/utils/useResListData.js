import { useEffect, useState } from "react";
import { RES_API } from "../utils/constants";

const useResListData = () => {
  const [resList, setResList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RES_API);
      const json = await data.json();
      const mainResList =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setResList(mainResList);
    } catch (error) {
      alert(error);
    }
  };

  return resList;
};

export default useResListData;
