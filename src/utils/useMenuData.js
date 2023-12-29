import { useEffect } from "react";
import { MENU_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addResMenu } from "./resSlice";

const useMenuData = (resId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.org/?" + encodeURIComponent(MENU_API + resId)
      );
      const json = await data.json();
      dispatch(addResMenu(json?.data));
    } catch (error) {
      alert(
        error +
          " data from API. Blocked by CORS policy, this will be resolved by a CORS bypass. Please contact the owner"
      );
    }
  };
};

export default useMenuData;
