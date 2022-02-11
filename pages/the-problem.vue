<template>
  <div>
    <DeadEnd>
      <p>Todo: finish writing this page</p>
    </DeadEnd>
    <ForkInTheRoad
      :options="[{ text: 'The Solution', to: '/insurance-sucks' }]"
    >
      <h1>The Problem</h1>
      <p>Health insurance in the US:</p>
      <ul>
        <li>Is almost twice as expensive as it should be</li>
        <li>Rewens price shoping</li>
        <li>
          Is the reason a friend of mine only works part time (so they will not
          lose Medicaid).
        </li>
        <li>Is complex</li>
        <li>Involves lots of company burocracy (and gov. burocracy)</li>
        <li>Supports monopolies</li>
        <li>
          Beats down altenative medicine, like research into eastern medicine
        </li>
        <li>Increases our taxes, without even covering everyone</li>
      </ul>
      <h3>Unecessary Cost</h3>
      <p>
        The United States citezens spend almost twice a much as they would in
        other countries! “In 2018, the U.S. spent nearly twice as much on health
        per person as comparable countries ($10,637 compared to $5,527 per
        person, on average).”
        <a
          href="https://www.healthsystemtracker.org/brief/what-drives-health-spending-in-the-u-s-compared-to-other-countries/"
          >(source accessed 2/10/2022)</a
        >
        And prices are only expected to keep rising 5.4% per year, untill they
        make up 19.7% of the US's GDP by 2028.
        <a href="https://www.healthaffairs.org/doi/10.1377/hlthaff.2020.00094"
          >(Keehan 3/24/2020)</a
        >
      </p>
      <h3>Complexity</h3>
      <p>
        Have you ever read that pamphlet your health insurance company gave gave
        to explain your benefits? Probably not. It's too thick.
        <RevealingButton text="My bad Fortune With the Complexity">
          How many times has health insurance rejected your claims? As of 2021,
          for me, they have rejected almost every claim (except for COVID
          testing ☹️). Why? For complex resons that were stated in that thick
          pamphlet. My bad fortune with insurance companies has spanned the last
          3 companies I have used. The last one cost over $300 a month.
        </RevealingButton>
      </p>
      <p>
        Do you know how many people are hired by doctors and hospitals just to
        process insurance claims? A lot!
      </p>
      <p>
        How long did if take you to learn what the words “deductable”,
        “premium”, and “----------” mean for health insurance? I still have to
        keep asking insurance agents to stop and remind me of the definitions of
        some words, when they talk.
      </p>
      <h3>Rips off people who want to live off the grid</h3>
      <p>
        Often health care is much more expensive if you don't have an insurance
        company that is “in-network”
      </p>
    </ForkInTheRoad>
  </div>
</template>