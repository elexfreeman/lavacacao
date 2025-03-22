<template>
  <header class="site-header" id="site-header">
    <div class="center">
      <h1 class="site-title">
        <a href="https://www.mary.be/en/home" title="">
          <span class="u-visually-hidden">Mary</span>
          <img
            class="logo"
            src="https://www.mary.be/files/templates/mary/public/assets/images/logo-mary_mobile.png"
          />
        </a>
      </h1>

      <button class="burger" menu-toggler="">
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-2_bis"></span>
        <span class="line line-3"></span>
      </button>

      <div class="mobile-menu">
        <nav class="site-navigation">
          <ul>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.mary.be/en/our-brand"
                title=""
                >Our brand</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link is-active"
                href="https://www.mary.be/en/online-shop"
                title=""
                >Online store</a
              >
            </li>
            <li class="nav-item nav-item_logo">
              <a
                class="nav-link nav-link_logo"
                href="https://www.mary.be/en/home"
                gold="logo"
              >
                <span class="u-visually-hidden">Mary</span>
                <img
                  class="logo-img"
                  src="https://www.mary.be/files/templates/mary/public/assets/images/logo-mary_iedge.png"
                  alt=""
                />
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.mary.be/en/our-stores"
                title=""
                >Our stores</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www.mary.be/en/business-gifts"
                title=""
                >Business gifts</a >
            </li>
          </ul>

          <div class="line line_left">
            <!--[if gte IE 9]><!-->
            <span class="svg span-simple-square" width="12" height="12">
              <svg width="12" height="12" class="icon-simple-square">
                <use
                  xlink:href="https://www.mary.be/files/templates/mary/public/assets/sprite.svg?202503101009#simple-square"
                ></use>
              </svg>
            </span>

            <!--<![endif]--><!--[if gte IE 9]><!-->
            <span class="svg span-double-square" width="34" height="17">
              <svg width="34" height="17" class="icon-double-square">
                <use
                  xlink:href="https://www.mary.be/files/templates/mary/public/assets/sprite.svg?202503101009#double-square"
                ></use>
              </svg>
            </span>
            <!--<![endif]-->
          </div>

          <div class="line line_right">
            <!--[if gte IE 9]><!-->
            <span class="svg span-simple-square" width="12" height="12">
              <svg width="12" height="12" class="icon-simple-square">
                <use
                  xlink:href="https://www.mary.be/files/templates/mary/public/assets/sprite.svg?202503101009#simple-square"
                ></use>
              </svg>
            </span>

            <!--<![endif]--><!--[if gte IE 9]><!-->

            <span class="svg span-double-square" width="34" height="17">
              <svg width="34" height="17" class="icon-double-square">
                <use
                  xlink:href="https://www.mary.be/files/templates/mary/public/assets/sprite.svg?202503101009#double-square"
                ></use>
              </svg>
            </span>
            <!--<![endif]-->
          </div>
        </nav>

        <div class="site-lang">
          <button type="button" layout="default" class="lang-button">
            <span class="text">en</span><!--[if gte IE 9]><!-->
            <span class="svg span-chevron-down" width="10" height="7">
              <svg width="10" height="7" class="icon-chevron-down">
                <use
                  xlink:href="https://www.mary.be/files/templates/mary/public/assets/sprite.svg?202503101009#chevron-down"
                ></use>
              </svg>
            </span>
            <!--<![endif]-->
          </button>
          <ul class="langs">
            <li>
              <a
                href="https://www.mary.be/fr/la-boutique-en-ligne"
                title="Français"
                >fr</a
              >
            </li>
            <li>
              <a href="https://www.mary.be/nl/de-webwinkel" title="Nederlands"
                >nl</a
              >
            </li>
          </ul>
        </div>
        <div class="site-lang-background js-close-langs"></div>
      </div>
    </div>
  </header>
</template>
<script>
import { MEDIA_URL } from "../../config";
import { mapGetters } from "vuex";

export default {
  name: "MHeader",
  components: {},
  computed: {
    ...mapGetters("mainData", ["pageCommonData"]),
    logoImg() {
      const url = this.pageCommonData?.logo?.data?.attributes?.url;
      return `${MEDIA_URL}${url}`;
    },
  },
};
</script>
