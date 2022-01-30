<template>
  <div class="text-center information-page">
    <v-btn-toggle v-model="buttonToggleModel" small dense class="ma-4">
      <v-btn color="primary" small>
        {{ text }}
      </v-btn>
    </v-btn-toggle>
    <p v-if="show" class="revealed-background">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: 'RevealingButton',
  props: { text: { type: String, required: true } },
  data: () => ({ buttonToggleModel: undefined }),
  computed: {
    show: {
      get() {
        return this.buttonToggleModel === 0;
      },
      set(value) {
        this.buttonToggleModel = value ? 0 : undefined;
      },
    },
  },
};
</script>

<style scoped>
.revealed-background {
  background: rgba(123, 123, 123, 0.25);
  padding: 0.5em;
}
/* .v-btn {
  height: 36px;
} */
</style>