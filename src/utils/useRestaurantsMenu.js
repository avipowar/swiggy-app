import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantsMenu = (resId) => {
  const [resInfo, setResInfo] = useState();

  useEffect(() => {
    fetchMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);

    const json = await data.json();

    setResInfo(json);
  };
  return resInfo;
};
export default useRestaurantsMenu;
