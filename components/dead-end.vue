<template>
  <v-container class="information-page">
    <v-row>
      <v-col cols="12" class="mb-4">
        <slot></slot>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          <v-btn
            @click="goBack"
            :disabled="canGoBack"
            color="primary"
            class="ma-4"
            >Go Back
          </v-btn>
          <v-btn to="/" nuxt color="primary" class="ma-4">Start Over </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'DeadEnd',
  methods: {
    goBack() {
      this.$router.back();
    },
  },
  computed: {
    canGoBack() {
      return !!this.$nuxt.context.from;
    },
  },
};
</script>