import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useMenuData = (resId) => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    fetchMenuData(resId);
  }, []);

  const fetchMenuData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.org/?" + encodeURIComponent(MENU_API + resId)
      );
      const json = await data.json();
      setMenuData(json?.data);
    } catch (error) {
      alert(
        error +
          " data from API. Blocked by CORS policy, this will be resolved by a CORS bypass. Please contact the owner"
      );
    }
  };
  return menuData;
};

export default useMenuData;
