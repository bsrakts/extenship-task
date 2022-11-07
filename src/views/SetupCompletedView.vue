<template>
  <v-container class="welcome">
    <!--img-->
    <v-row class="d-flex justify-content-center">
      <v-img
        lazy-src="../assets/completed.svg"
        max-height="300"
        max-width="400"
        src="../assets/completed.svg"
      ></v-img>
    </v-row>
    <v-row class="completed_text">
      <span class="fw5 fs18 d-flex justify-content-center"
        >Kurulum Tamamlandı</span
      >
      <p class="fw4 fs18 d-flex justify-content-center">
        Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.
      </p>
    </v-row>
    <v-row class="btn_backhome__g">
      <v-row class="d-flex justify-center">
        <v-btn
          color="#3170F7"
          class="ma-2 white--text btn_backhome"
          @click="next"
        >
          Ana Ekrana Git
          <v-icon right dark> mdi-chevron-right </v-icon>
        </v-btn>
      </v-row>
      <v-row class="mt-5">
        <p class="light-blue-text fw4 fs14 d-flex justify-center">
          6 sn. sonra yönlendirileceksiniz.
        </p>
      </v-row>
    </v-row>
  </v-container>
</template>
  
  <script>
export default {
  name: "Home",
  data: () => ({}),
};
</script>
  
  <style lang="scss">
.completed_text {
  margin-top: 50px !important;
}
.btn_backhome__g {
  margin-top: 50px !important;
}
.btn_backhome {
  max-width: 230px;
}
.v-btn:not(.v-btn--round).v-size--default {
  height: 48px;
  width: 164px;
  padding: 0px 10px;
}
</style>
  