<template>
  <div class="about">
    <div class="about__left">
      <div class="about__wraper">
        <div class="about__title">О проекте</div>
        <div class="about__description">
          Хвоя#nbsp;— это производство авторских светильников и#nbsp;декора
          из#nbsp;хвойных пород деревьев. Основано в#nbsp;2015 году дизайнером
          Анной Феоктистовой в#nbsp;Нижнем Новгороде. Основная концепция#nbsp;—
          совмещение уюта и#nbsp;тепла натурального дерева с#nbsp;функцией
          светильника. Давно известные светодиодные технологии позволяют
          воплотить идею в#nbsp;жизнь и#nbsp;сделать это безопасным.
        </div>
      </div>
    </div>
    <div class="about__right" :style="imgStyle"></div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      imgUrl: "http://lavacacao.ru:1337/uploads/10_00297b25d4.jpg",
    };
  },
  computed: {
    imgStyle() {
      return {
        backgroundImage:
          "url(http://lavacacao.ru:1337/uploads/10_00297b25d4.jpg)",
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.about {
  display: flex;
  font-size: 13px;

  &__wraper {
    margin: 20px;

    @include display-after(sm) {
      margin: 140px;
    }

    @include display-after(md) {
      margin: 40px;
    }
  }

  &__title {
    font-size: 20px;
    font-weight: 100;
    margin-bottom: 20px;
    color: $--title-color;

    @include display-after(sm) {
      font-size: 30px;
    }
  }

  &__left,
  &__right {
    height: 300px;
    width: 50vw;
  }

  &__left {
    width: 100%;
    background-color: #faf9f5;
    display: flex;
    align-items: center;

    @include display-after(md) {
      width: 50vw;
    }
  }
  &__right {
    background-size: cover;
    display: none;
    @include display-after(md) {
      display: block;
    }
  }
}
</style>
