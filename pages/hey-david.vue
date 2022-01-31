<template>
  <ForkInTheRoad
    class="text-center"
    :options="[
      {
        text: 'Our system of health insurance sucks',
        to: '/insurance-sucks',
      },
      {
        text: 'Why does our health insurance needs fixing?',
        to: '/the-problem',
      },
    ]"
  >
    <p>
      Ya ya, I am doing fine, but you are getting distracted! This site is about
      my plan to fix our nation's health insurance!
    </p>
    <p>Pick one of the options:</p>
  </ForkInTheRoad>
</template>
