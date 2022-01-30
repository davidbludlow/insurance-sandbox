<template>
  <v-col class="mb-5" cols="12">
    <v-row justify="center">
      <v-btn
        v-for="(option, i) in options"
        :key="i"
        :to="option.route"
        nuxt
        color="primary"
        class="ma-4"
      >
        {{ option.text }}
      </v-btn>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'OptionList',
  props: { options: { type: Array, required: true } },
};
</script>