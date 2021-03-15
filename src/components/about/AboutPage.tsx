import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col my-8 font-mono text-lg space-y-12">
      <h1 className="text-5xl uppercase text-darkGreen">About</h1>
      <p>
        In 2018 was getting a bit frustrated with some of the media commentary
        about how people should give up their lattes and monthly netflix to save
        enough for a house deposit in New Zealand.
      </p>
      <p>
        I created this silly calculator to show there's a bit more to the
        housing problem. Saving for a deposit takes more than giving up some
        lattes. Property prices are increasing at a severe rate at the moment,
        between 10-20% per year while incomes are stagnant (this is 2021 for
        future readers!).
      </p>
      <p>
        Using the Avo Calc you can see that a person would have to be drinking
        more than 50 lattes a day to keep up New Zealand property prices at the
        moment.
      </p>
      <p>
        I was lucky enough to be able to afford property since I originally made
        this calculator but it was only through salary increases due to the
        continuing tech boom. Giving up coffee wouldn't have made a difference.
      </p>
      <p>
        More and more people are being forced into life time renting. The
        situation is worse now than ever before. I feel that people should be
        able to enjoy a coffee and a place of their own to live in.
      </p>
      <p>
        This is a parody calculator and shouldn't be taken seriously, the
        amortization numbers are all calculated in a basic way, by a shitty
        programmer and with crazy, wild assumptions.
      </p>
      <p>
        For example I assume no interest growth in your savings. I don't include
        any inflation and I assume 4% mortgage rates. The mortgage term is fixed
        at 30 years.
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
