import React from "react";
import MenuItem from "./MenuItem";
import AvoCalculatorLayout from "../avoCalculator/AvoCalculatorLayout";
import useCurrentHouseIncrease from "./useCurrentHouseIncrease";
import { SectionHorizontalRule } from "./SectionHorizontalRule";

const HomePage = () => {
  const housePriceIncreaseToNow = useCurrentHouseIncrease(340);

  if (housePriceIncreaseToNow === 0) {
    return (
      <div className="flex items-center content-center justify-center min-h-screen">
        <div className="font-mono text-darkGreen">Scooping the avos...</div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex flex-row items-center justify-between my-8">
        <div className="flex-col lg:w-1/2 space-y-4">
          <h1 className="text-5xl uppercase text-darkGreen">
            Smashed Avocado Time!
          </h1>

          <div className="flex items-center justify-evenly space-x-4">
            <span className="font-mono text-base md:w-1/3 text-darkGreen">
              Today the New Zealand median house price has increased by
            </span>

            <span className="font-mono text-3xl md:w-2/3 md:text-6xl text-darkGreen">
              {`$${housePriceIncreaseToNow.toFixed(3)}`}
            </span>
          </div>
        </div>
        <div className="invisible pr-8  lg:pr-20 lg:visible">
          <img
            className="img-responsive center-block"
            src={"/images/fresh-made-data-211-x-211.png"}
            alt="Our data is 100% vegan"
          />
        </div>
      </div>
      <h2 className="mb-2 font-mono text-xl uppercase text-darkGreen">
        Today's menu:
      </h2>
      <SectionHorizontalRule />
      <div className="mt-8 grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4">
        <div className="">
          <MenuItem
            itemPrice={5}
            housePriceIncreaseToNow={housePriceIncreaseToNow}
            itemName={"tea"}
            itemNamePlural={"teas"}
            itemDescription={
              "triple distilled hibiscus flower and elderberry soaked for 314 seconds in 92 °C volcanic spring water"
            }
          />
        </div>
        <div className="col">
          <MenuItem
            itemPrice={22}
            housePriceIncreaseToNow={housePriceIncreaseToNow}
            itemName={"smashed avodado toast"}
            itemNamePlural={"smashed avos"}
            itemDescription={
              "Chef's special - organic avocados lovingly mashed to a soft pulp, juice of lime, cherry tomatos w/ corriander on one of our own fresh bagels"
            }
          />
        </div>

        <div className="col">
          <MenuItem
            itemPrice={4.5}
            housePriceIncreaseToNow={housePriceIncreaseToNow}
            itemName={"latte"}
            itemNamePlural={"lattes"}
            itemDescription={
              "fresh seventy-two-brothers single-origin beans, batch roasted seven times, hand ground in our pedal-powered grinder"
            }
          />
        </div>
        <div className="col">
          <MenuItem
            itemPrice={4.5}
            housePriceIncreaseToNow={housePriceIncreaseToNow}
            itemName={"french toast"}
            itemNamePlural={"french toasts"}
            itemDescription={
              "hand-toasted buckwheat slices soaked in orange sugar-free syrup w/ spices and vanilla mascarpone"
            }
          />
        </div>

        <div className="col">
          <MenuItem
            itemPrice={16}
            housePriceIncreaseToNow={housePriceIncreaseToNow}
            itemName={"home made muesli"}
            itemNamePlural={"muesli bowls"}
            itemDescription={
              "buckwheat roasted oats, burnt fig and almonds w/ freshly milked goat yoghurt and topped with refined-sugar free fresh seasonal fruits "
            }
            showDivider={false}
          />
        </div>
        <div className="col">
          <MenuItem
            itemPrice={18.5}
            itemName={"egg benedict"}
            housePriceIncreaseToNow={housePriceIncreaseToNow}
            itemNamePlural={"eggs benes"}
            itemDescription={
              "w/ free-range pork sirloin slivers (ask us the name of the pig), hollandaise sauce and braised garlic mushrooms on sprouted buckwheat toast"
            }
            showDivider={false}
          />
        </div>
      </div>
      <SectionHorizontalRule />
      <AvoCalculatorLayout />
      <p className="mb-4 font-mono text-sm text-center text-darkGreen">
        by{" "}
        <a className="underline" href="https://www.darraghoriordan.com">
          https://www.darraghoriordan.com
        </a>{" "}
        - © 2021
      </p>
    </div>
  );
};

export default HomePage;
