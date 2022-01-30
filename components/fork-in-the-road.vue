<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mb-4">
        <slot></slot>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row justify="center">
          <v-btn
            v-for="(option, i) in options"
            :key="i"
            :to="option.to"
            nuxt
            color="primary"
            class="ma-4"
          >
            {{ option.text }}
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// lang="ts"
// import { PropType } from 'vue';

export default {
  name: 'ForkInTheRoad',
  // as PropType<ForkOption[]>
  props: { options: { type: Array, required: true } },
};

// type ForkOption = { text: string; to; route?: string };
</script>