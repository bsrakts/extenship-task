<template>
  <div class="about">
    <v-container>
      <!--supplier-settings-area-->
      <v-col cols="6" class="left-area">
        <v-img
          class="ma-auto"
          lazy-src="../assets/supplier-banner-page2.svg"
          max-height="400"
          max-width="300"
          src="../assets/supplier-banner-page2.svg"
        ></v-img>
        <v-col>
          <h3>Genel Tedarikçi Ayarları</h3>
        </v-col>
        <hr />
        <v-row class="title_vergi">
          <v-col>
            <h3>Ekstra Vergi Ortalaması</h3>
            <h5>Ekstra vergi ortalaması</h5>
          </v-col>
          <v-col class="navbar font-weight-medium">
            <a class="active" href="#">Temel Ayarlar</a>
            <a href="#">Gelişmiş</a>
            <a href="#">Ultra</a>
          </v-col>
        </v-row>
        <v-row class="">
          <v-col cols="12" sm="6" md="10">
            <v-text-field
              label="Input Text"
              solo
              prepend-inner-icon="percent-outline"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-col>
          <img src="../assets/hr-special.svg" />
        </v-col>
        <!-- <v-checkbox v-model="checkbox">
          <template v-slot:label>
            <div>İndirimli fiyat kullanın.</div>
          </template>
        </v-checkbox> -->
      </v-col>
      <!--brands-settings-area-->
      <v-col cols="6"></v-col>
    </v-container>
  </div>
</template>

<style lang="scss">
.left-area {
  border: 1px solid black;
}
.navbar {
  position: absolute;
  left: -162px;
  top: 0;
  padding-right: 20px;
  max-width: 150px;
  a {
    margin-bottom: 10px;
    display: block;
    background-color: white;
    color: black;
    padding: 5px;
    text-align: center;
    width: 130px;
    text-decoration: none;
    &.active {
      width: 150px;
      border: 1px solid black;
      border-radius: 4px 0px 0px 4px;
      border-right: 0;
    }
    &:hover {
      background-color: #efefef;
    }
    &:nth-of-type(2),
    &:nth-of-type(3) {
      margin-left: 20px;
      border-right: 1px solid black;
    }
  }
  .l-text {
    color: #9fbcd4 !important;
  }
}
.title_vergi {
  position: relative;
}
.percent_icon {
  height: max-content;
}
</style>
