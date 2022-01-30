<template>
  <ForkInTheRoad
    :options="[
      {
        text: 'Our system of health insurance sucks',
        route: '/insurance-sucks',
      },
      {
        text: 'Why does our health insurance needs fixing?',
        route: '/the-problem',
      },
      {
        text: 'Hey David! How\'s it going?',
        route: '/hey-david',
      },
    ]"
  >
    <h1 class="mb-3">Welcome!</h1>

    <p>
      This site is like a choose-your-own-adventure story, except that the
      adventure is learning about my (David Ludlow's)
      <strong>plan to fix health insurance in the USA.</strong>
    </p>
    <p>
      Make your first choice! What describes your thoughts of health insurance?
    </p>
  </ForkInTheRoad>
</template>