<template>
  <v-stepper v-model="steps">
    <v-stepper-header>
      <v-stepper-step :complete="currentPage > 1" step="1"> </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="currentPage > 2" step="2"> </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> </v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      steps: null,
    };
  },
  created() {
    this.steps = this.currentPage;
  },
  watch: {
    currentPage() {
      this.steps = this.currentPage;
    },
  },
};
</script>

<style scoped lang="scss">
.v-stepper {
  width: 300px;
  margin: auto;
}
.v-stepper__header {
  width: auto;
}
.v-application .v-primary {
  background: color #000;
}
</style>
