import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col my-8 font-mono text-lg space-y-12">
      <h1 className="text-5xl uppercase text-darkGreen">About</h1>
      <p>
        I was getting a bit frustrated with some of the commentary in the news
        papers about how people should simply give up lattes and netflix so they
        can save enough to buy houses in New Zealand.
      </p>
      <p>
        I created this silly calculator to show there's a bit more to the
        housing problem and saving for a deposit than giving up some lattes can
        fix. Property prices are increasing at a severe rate between 10-20% per
        year while incomes are stagnant (this is 2021 for future readers).
      </p>
      <p>
        As you can see in the calculator someone would have to be drinking more
        than 50 lattes a day to keep up with saving for a house that is getting
        further and further away from them.{" "}
      </p>
      <p>
        I was lucky enough to be able to afford property since I originally made
        this calculator but it was through only through lucky salary increases
        due to the continuing tech boom, giving up coffee wouldn't have made a
        difference. More and more people are being forced into life time
        renting. The situation is worse now than ever before.
      </p>
      <p>
        This is a parody calculator and shouldn't be taken seriously, the
        amortization numbers are all calculated in a basic way, by a shitty
        programmer and with crazy, wild assumptions.
      </p>
      <p>
        For example I assume no interest growth in your savings. I don't include
        any inflation and I assume 4% mortgage rates.
      </p>
      <p>
        Get in touch with me over at{" "}
        <a className="underline" href="https://www.darraghoriordan.com">
          https://www.darraghoriordan.com
        </a>{" "}
        if you need to contact me. Links to all the social media sites are on
        there too.
      </p>
    </div>
  );
};

export default AboutPage;
