import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useMenuData = (resId) => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setMenuData(json?.data);
    } catch (error) {
      alert(error);
    }
  };

  return menuData;
};

export default useMenuData;
