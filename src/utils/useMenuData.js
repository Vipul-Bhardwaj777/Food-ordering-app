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
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      dispatch(addResMenu(json?.data));
    } catch (error) {
      alert(error);
    }
  };
};

export default useMenuData;
