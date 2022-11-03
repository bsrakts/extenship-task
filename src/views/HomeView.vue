<template>
  <v-container class="welcome">
    <!--left-area-->
    <v-row class="welcome2">
      <v-col cols="6">
        <v-img
          lazy-src="../assets/main-banner-page1.svg"
          max-height="300"
          max-width="500"
          src="../assets/main-banner-page1.svg"
        ></v-img>
      </v-col>
      <!--rigt-area-->
      <v-col cols="6">
        <!-- welcome-text-->
        <v-row class="justify-center">
          <h1>Merhaba...</h1>
          <p>
            Mağazanızı oluşturmak için alış ve satış kaynaklarını seçebilirsin.
          </p>
        </v-row>
        <!--section-area-1-->
        <v-col class="section_area">
          <v-col class="d-flex" cols="12">
            <h3 class="section_title">Kaynak Mağaza</h3>
            <v-icon></v-icon>
          </v-col>
          <v-col class="d-flex" cols="12">
            <h5>Açıklama</h5>
          </v-col>
          <v-col class="d-flex" cols="12" sm="11">
            <v-select
              :items="items"
              label="US Marketplace"
              dense
              solo
            ></v-select>
          </v-col>
        </v-col>
        <!--section-area-1-->
        <v-col class="section_area">
          <v-col class="d-flex" cols="12">
            <h3 class="section_title">Hedef Mağaza</h3>
            <v-icon></v-icon>
          </v-col>
          <v-col class="d-flex" cols="12">
            <h5>Açıklama</h5>
          </v-col>
          <v-col class="d-flex" cols="12" sm="11">
            <v-select
              :items="items"
              label="US Marketplace"
              dense
              solo
            ></v-select>
          </v-col>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    items: [
      "US MarketPlace",
      "US MarketPlace1",
      "US MarketPlace2",
      "US MarketPlace3",
    ],
  }),
};
</script>

<style lang="scss">
* {
  padding: 0;
}
.welcome {
  height: 100%;
}
.welcome2 {
  margin-top: 10%;
}
.section_area {
  justify-content: start;
}
</style>
