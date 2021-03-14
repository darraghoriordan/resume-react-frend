import { useEffect, useState } from "react";

function useCurrentHouseIncrease(dailyHousePriceIncrease: number) {
  const [currentHousePrice, updateCurrentHousePrice] = useState(0);

  useEffect(() => {
    const tick = () => {
      // itemCost dailyHousePriceIncrease
      let now = new Date();
      let housePriceIncreasePerDay = dailyHousePriceIncrease;

      let housePriceIncreasePerSecond = housePriceIncreasePerDay / 24 / 60 / 60;
      let housePriceIncreaseToNow =
        (now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds()) *
        housePriceIncreasePerSecond;

      updateCurrentHousePrice(housePriceIncreaseToNow);
    };

    const intervalId = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [dailyHousePriceIncrease]);

  return currentHousePrice;
}

export default useCurrentHouseIncrease;
