<template>
  <ForkInTheRoad :options="[]">
    <p>
      Yes. Our system of health insurance in the US does suck. It is complicated
      and expensive. Proper price shopping is often almost impossible, because
      insurance confuses the question of "how much will this cost."
    </p>
    <p>
      My plan involves making it illegal for health insurance companies to
      operate in a way that is anything other than very simple.
    </p>
    <ul>
      <li>
        Insurance cards will be like credit cards that only work for medical
        things. They will not care what medical thing you use them for, they
        will only care if the expense is for a medical thing or not.
        <revealing-button text="Where will the money come from?">
          Just keep reading. You will see further down this bulleted list.
        </revealing-button>
      </li>
      <li>
        It will be made illegal for medical providers to offer cheaper prices to
        customers just because they have a certain insurance company. This will
        destroy the concept of being "in-network." Customers will be able to
        more freely choose where they recieve medical care. And, most
        importantly, it will become way more simple to price shop.
        <option-list
          :options="[
            {
              text: 'Why is price shopping so important?',
              to: '/the-importance-of-price-shopping',
            },
          ]"
        ></option-list>
      </li>
    </ul>
  </ForkInTheRoad>
</template>