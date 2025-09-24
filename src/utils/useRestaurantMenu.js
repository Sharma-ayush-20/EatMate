import { MENU_URL } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resid) => {
  const [resInfo, setResInfo] = useState(null);

  //Api Calling
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resid);
    const json = await data.json();
    // console.log(json);
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
