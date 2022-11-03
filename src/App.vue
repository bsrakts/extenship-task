<template>
  <v-app>
    <Stepper :currentPage="currentPage"> </Stepper>
    <v-main>
      <router-view />
    </v-main>
    <Pagination :currentPage="currentPage" @next="next" @before="before" />
  </v-app>
</template>

<script>
import Stepper from "./components/Stepper";
import Pagination from "./components/Pagination";
export default {
  name: "App",
  data: () => ({
    currentPage: 1,
    pages: {
      1: "home",
      2: "settings",
      3: "ThirdPage",
    },
  }),
  components: {
    Stepper,
    Pagination,
  },
  methods: {
    next() {
      this.currentPage++;
      this.setPage();
    },
    before() {
      this.currentPage--;
      this.setPage();
    },
    setPage() {
      this.$router.push({ name: this.pages[this.currentPage] });
    },
  },
};
</script>

<style lang="scss">
#app {
  margin: 0 auto;
  width: 1024px;
}
</style>
