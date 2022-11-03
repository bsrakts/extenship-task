<template>
  <div>
    <div class="pagination">
      <v-btn
        color="#3170F7"
        class="ma-2 white--text"
        :disabled="currentPage === 1"
        @click="before"
      >
        <v-icon left dark> mdi-chevron-left </v-icon>
        Önceki Adım
      </v-btn>
      <v-btn color="#3170F7" class="ma-2 white--text" @click="next">
        Sonraki Adım
        <v-icon right dark> mdi-chevron-right </v-icon>
      </v-btn>
    </div>
  </div>
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
  methods: {
    next() {
      this.$emit("next");
    },
    before() {
      this.$emit("before");
    },
  },
};
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
