<template>
  <div class="about">
    <b-container>
      <b-row class="">
        <b-col lg="2" class="navbar font-weight-medium">
          <!-- <b-col class="d-inlineflex">
            <a class="" href="">Temel Ayarlar</a>
            <a href="">Gelişmiş</a>
            <a href="">Ultra</a>
          </b-col> -->
          <div>
            <b-tabs content-class="mt-3">
              <b-tab title="Temel Ayarlar"></b-tab>
              <b-tab title="Gelişmiş"></b-tab>
              <b-tab title="Ultra"></b-tab>
            </b-tabs>
          </div>
        </b-col>
        <!--l-supplier-settings-area-->
        <b-col lg="6" class="left-area d-inlineflex align-items-evenly">
          <v-img
            class="ma-auto"
            lazy-src="../assets/supplier-banner-page2.svg"
            max-height="220.33"
            max-width="273.99"
            src="../assets/supplier-banner-page2.svg"
          ></v-img>
          <b-col class="d-flex justify-center">
            <p class="fs18 fw6">Genel Tedarikçi Ayarları</p>
          </b-col>
          <hr />
          <b-row class="title_vergi">
            <b-col>
              <span class="fs20">
                Ekstra Vergi Ücretleri
                <b-icon icon="info-circle-fill" scale="1"></b-icon>
              </span>
              <p class="fs12">Ekstra Vergi Ücretleri</p>
            </b-col>
            <!--settings-navbar
            <b-col class="navbar font-weight-medium">
              <a class="active" href="#">Temel Ayarlar</a>
              <a href="#">Gelişmiş</a>
              <a href="#">Ultra</a>
            </b-col>-->
          </b-row>
          <b-col class="">
            <div>
              <b-input-group class="mb-2">
                <b-input-group-prepend is-text>
                  <b-icon icon="percent"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  placeholder="Input Text"
                ></b-form-input>
              </b-input-group>
            </div>
          </b-col>
          <!-- Using props -->

          <b-row class="d-flex justify-center">
            <img class="hr" src="../assets/hr-special.svg" />
          </b-row>
          <b-row>
            <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
              <span class="fs16">İndirimli fiyatı kullan.</span>
              <b-icon icon="info-circle-fill" scale="1"></b-icon>
            </b-form-checkbox>
          </b-row>
        </b-col>
        <!--r-brands-settings-area-->
        <b-col cols="6">
          <!--r-img-->
          <v-img
            class="ma-auto"
            lazy-src="../assets/main-banner-page1.svg"
            max-height="230"
            max-width="289"
            src="../assets/main-banner-page1.svg"
          ></v-img>
          <!--r-title-->
          <b-col class="d-flex justify-center">
            <p class="fs18 fw6">Genel Mağaza Ayarları</p>
          </b-col>
          <hr />
          <!--start-input-title-->
          <b-col>
            <span class="fs20"
              >Ülke Döviz Kuru (1 USD)<b-icon
                icon="info-circle-fill"
                scale="1"
              ></b-icon
            ></span>
            <p class="fs12">Ekstra vergi ortalaması</p>
          </b-col>
          <!--input-title-end-->
          <!--r-start-input-and-checkbox-->
          <b-col class="d-flex justify-content-evenly align-items-center">
            <div>
              <b-input-group class="mb-2">
                <b-input-group-prepend is-text>
                  <b-icon icon="currency-dollar"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  placeholder="Input Text"
                ></b-form-input>
              </b-input-group>
            </div>
            <span>veya</span>
            <div>
              <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
              >
                Otomatik
              </b-form-checkbox>
            </div>
            <b-icon icon="info-circle-fill" scale="1"></b-icon>
          </b-col>
          <!--input-checkbox-end-->
          <!--start-special-hr-->
          <b-row class="d-flex justify-center">
            <img class="hr" src="../assets/hr-special.svg" />
          </b-row>
          <!--special-hr-end-->
          <!--start-input-title-->
          <b-col>
            <span class=""
              >Minimum Kar Oranı Veya Tutarı<b-icon
                icon="info-circle-fill"
                scale="1"
              ></b-icon
            ></span>
            <p class="fs12">Minimum Kar oranı veya tutarı</p>
          </b-col>
          <!--input-title-end-->
          <!--r-start-input-and-input-->
          <b-col class="d-flex justify-content-evenly align-items-center">
            <div class="w_input">
              <b-input-group class="mb-2">
                <b-input-group-prepend is-text>
                  <b-icon icon="percent"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  placeholder="Input Text"
                ></b-form-input>
              </b-input-group>
            </div>
            <span>ve</span>
            <div class="w_input">
              <b-input-group class="mb-2 w_input">
                <b-input-group-prepend is-text>
                  <b-icon icon="currency-dollar"></b-icon>
                </b-input-group-prepend>
                <b-form-input
                  type="text"
                  placeholder="Input Text"
                ></b-form-input>
              </b-input-group>
            </div>
          </b-col>
          <!--r-input-and-input-end-->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "not_accepted",
    };
  },
};
</script>
<style lang="scss">
@import "../assets/style/app.scss";
.p_2 {
  margin: 50%;
}
.left-area {
  border: 1px solid $medium-blue-btn;
}
.navbar {
  position: absolute;
  z-index: 22;
  left: -128px;
  top: 0;
  max-width: 150px;
  margin-top: 30%;
  a {
    margin-bottom: 10px !important;
    display: block;
    background-color: white;
    color: black;
    padding: 5px;
    text-align: center;
    width: 130px;
    text-decoration: none;
    border: 1px solid $light-blue-text !important;
    z-index: -1;
    border-right: 0 !important;
    border-radius: 0 !important;
    &.active {
      font-weight: $fw-6;
      border: 1px solid $medium-blue-btn !important;
      border-radius: 6px 0px 0px 6px !important;
      border-right: 0 !important;
    }
    &:hover {
      background-color: #efefef;
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
.v-application ul {
  padding: 0 !important;
}
.nav-tabs {
  border: 0;
}
.hr {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-group-text {
  padding: 1rem;
  border-radius: 0.375rem 0rem 0rem 0.375rem;
  background-color: #d5e3ef;
}
.form-control {
  padding: 0rem 1rem;
}
.b-icon.bi {
  color: #62829c;
}
.w_input {
  width: 200px;
}
</style>
