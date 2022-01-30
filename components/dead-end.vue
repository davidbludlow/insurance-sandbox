<template>
  <v-container class="infomation-page">
    <v-row>
      <v-col cols="12" class="mb-4">
        <slot></slot>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          <v-btn @click="goBack" nuxt color="primary" class="ma-4">
            Go Back
          </v-btn>
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
};
</script>