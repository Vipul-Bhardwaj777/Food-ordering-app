import { useEffect } from "react";
import { RES_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addResList } from "./resSlice";

const useResListData = () => {
  const dispatch = useDispatch();
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

      dispatch(addResList(mainResList));
    } catch (error) {
      alert(
        error +
          " data from API. Blocked by CORS policy, this will be resolved by a CORS bypass. Please contact the owner"
      );
    }
  };
};

export default useResListData;
