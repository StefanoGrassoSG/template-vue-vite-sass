<script >
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  }
}
</script>

<template>
  <div class="all">
    <HeaderComponent />

    <MainComponent />

    <FooterComponent />
  </div>

</template>

<style lang="scss" scoped>
@use "assets/scss/main";
  .all {
    min-height: 100vh;
    background: rgb(0,0,0);
    overflow-x: hidden;
  }
</style>
