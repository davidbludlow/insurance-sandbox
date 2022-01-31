<template>
  <ForkInTheRoad
    :options="[{ text: 'What if you die?', to: '/what-if-you-die' }]"
  >
    <p>
      Yes. Our system of health insurance in the USA does suck. It is
      complicated and expensive. Proper price shopping is often almost
      impossible, because insurance confuses the question of “how much will this
      medical thing cost.”
    </p>
    <p>
      My plan involves making it illegal for health insurance companies to
      operate in a way that is anything other than very simple.
    </p>
    <ul>
      <li>
        Insurance cards will be like debit cards that only work for medical
        things. They will not care what medical thing you use them for, they
        will only care if the expense is for a medical thing or not.
        <revealing-button text="Where will the money come from?">
          Just keep reading. You will see, further down this bulleted list.
        </revealing-button>
      </li>
      <li>
        It will be made illegal for medical providers to offer cheaper prices to
        customers just because they have a certain insurance company. This will
        destroy the concept of being “in-network.” Customers will be able to
        more freely choose where they recieve medical care. And, most
        importantly, it will become way more simple to price shop.
        <revealing-button text="What do you mean by “in-network?”">
          With most current medical insurance (unless you get the
          extra-expensive kind) there is a list of doctors who are "in-network"
          and if you don't use one of those doctors, then your insurance will
          either not work at all for your doctor's visit or it will not work as
          well. Not only does this limit your choices of doctors that you can
          afford to see, but it also makes it very hard for you to call arround
          to figure out which doctor is the cheapest. If you ask how much a
          visit will cost, they can't answer your question until they have
          determined wither they are in-network for your particular insurance or
          not. My plan will make such complication both unnecessary and illegal.
        </revealing-button>
        <revealing-button text="Why is price shopping so important?">
          See
          <NuxtLink to="/todo?the-importance-of-price-shopping"
            >this page.</NuxtLink
          >
        </revealing-button>
      </li>
      <li>
        Your insurance company will probably charge you monthly. (For some
        mysterious reason, people have decided to call that amount of money that
        you pay per month a “premium.”) No more than 2.5% will go to the
        insurance company
        <revealing-button text="why 2.5%?">
          Because that is the standard price that normal credit card companies
          typically charge busnesses for processing any type of credit card
          transaction. Remember, in this plan, using medical insurance will be
          about as easy as using a credit card.
        </revealing-button>
      </li>
      <li>
        Most of your premium will go into your Medical Insurance Balance (which
        is kinda like a Flexible Spending Account, only without a stupidly
        vauge-sounding name). When you use you use your medical insurance card
        to buy some medical thing, it will take the money from your Medical
        Insurance Balance.
      </li>
      <li>
        If your Medical Insurance Balance goes negative, that is okay. Lets say
        you just purchased an expensive doctor's appointment and you balance
        changed from some positive number to negative $200. The medical
        insurance company will cover, lets say, 50% of that negative $200 with
        the premiums that other people paid this month, people who are in that
        same medical insurance company. So that means that $100 of your burden
        will be spread to other people. The other $100 will come from you, over
        the next 18 months after that doctors visit, by you paying a premium
        that is $100÷18 larger than normal. The “50%” I mentioned earlier is
        just an estimate. That percentage can be decided by the medical
        insurance company, or rather, it can be decided by you, when you are
        shopping for insurance.
      </li>
      <li>
        If you switch medical insurance companies, then your Medical Insurance
        Balance follows you to that new company.
      </li>
    </ul>
  </ForkInTheRoad>
</template>
