import { useEffect, useState } from "react";

function useItemNumberOfIncrease(
  housePriceIncreaseToNow: number,
  itemPrice: number
) {
  const [numberOfItemIncreaseToNow, updateNumberOfItemIncreaseToNow] = useState(
    0
  );

  useEffect(() => {
    const numberOfItemIncreaseToNow = housePriceIncreaseToNow / itemPrice;
    updateNumberOfItemIncreaseToNow(numberOfItemIncreaseToNow);
  }, [housePriceIncreaseToNow, itemPrice]);

  return numberOfItemIncreaseToNow;
}

export default useItemNumberOfIncrease;
