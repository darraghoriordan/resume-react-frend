import React from "react";
import useItemNumberOfIncrease from "./useItemNumberOfIncrease";

type MenuItemProps = {
  itemName: string;
  itemPrice: number;
  itemDescription: string;
  itemNamePlural: string;
  housePriceIncreaseToNow: number;
  showDivider?: boolean;
};

const MenuItem = ({
  itemName,
  itemPrice,
  itemDescription,
  itemNamePlural,
  housePriceIncreaseToNow,
  showDivider = true,
}: MenuItemProps) => {
  const itemNumberOfIncrease = useItemNumberOfIncrease(
    housePriceIncreaseToNow,
    itemPrice
  );
  return (
    <div className="flex flex-col justify-between font-mono md:max-w-screen-sm">
      <div className="flex flex-row justify-between mb-2 text-darkGreen">
        <span className="uppercase">{itemName}</span>
        <span>{itemPrice.toFixed(1)}</span>
      </div>
      <div className="mb-2 text-sm text-lineGrey">
        <div>{itemDescription}</div>
      </div>
      <div className="mb-6 text-darkGreen space-x-2">
        <span className="text-darkGreen">that's</span>
        <span className="text-2xl">{itemNumberOfIncrease.toFixed(4)}</span>
        <span className="text-darkGreen">
          more {itemNamePlural} just today!
        </span>
      </div>
      {showDivider && (
        <div className="">
          <hr className="w-12 border-1 border-lightLineGrey" />
        </div>
      )}
    </div>
  );
};
export default MenuItem;
