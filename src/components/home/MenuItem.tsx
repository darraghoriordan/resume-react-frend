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
    <div className="flex flex-col justify-between font-mono">
      <div className="flex flex-row justify-between text-darkGreen mb-2">
        <span className="uppercase">{itemName}</span>
        <span>{itemPrice.toFixed(1)}</span>
      </div>
      <div className="text-lineGrey text-sm mb-2">
        <div>{itemDescription}</div>
      </div>
      <div className="text-darkGreen mb-6 space-x-2">
        <span className="text-darkGreen">that's</span>
        <span className="text-2xl">{itemNumberOfIncrease.toFixed(4)}</span>
        <span className="text-darkGreen">
          more {itemNamePlural} just today!
        </span>
      </div>
      {showDivider && (
        <div className="">
          <hr className="border-1 border-lightLineGrey w-12" />
        </div>
      )}
    </div>
  );
};
export default MenuItem;
