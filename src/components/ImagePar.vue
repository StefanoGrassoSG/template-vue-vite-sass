<script>
  import { store } from "../store";

  export default {
  data() {
    return {
      images: {
        moonImage: "../public/moonGiusta.png",
        mountainBack: "../public/mountainB.png",
        mountainFront: "../public/mountainF.png",
    }
    }
  },
  created() {
    // Chiamato quando il componente viene creato se voglio ascoltare eventi della window
    window.addEventListener('scroll', () => {
    let value = window.scrollY;
    let initialTitlePosition = -350/* Posizione iniziale desiderata per title */
    moon.style.top = value * 0.35 + 'px',
    title.style.right = initialTitlePosition + value * 1.50 + 'px'
    title.style.marginTop = value * 0.25 + 'px'
    mountainBack.style.bottom = value * 0.15 + 'px'
    mountainFront.style.top = value * 0.15 + 'px'
  });
  },
  methods: {

  },
  components: {


  }
}
</script>

<template>
    <div class="image-container">
      <img :src="images.moonImage" id="moon" alt="">
      <img :src="images.mountainBack" id="mountainBack" alt="">
      <h1 class="text-white" id="title">
        My portfolio
      </h1>
      <img :src="images.mountainFront" id="mountainFront" alt="">
    </div>
</template>

<style lang="scss" scoped>;
@use "../assets/scss/main";
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &::before {
    content:'';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    background:linear-gradient(to top, #121212, transparent);
    z-index: 1000;
  }
  
  img {
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #title{
  position: absolute;
  right: -350px;
  white-space: nowrap;
  font-size: 7rem;
  z-index: 9;
  }

  #mountainFront{
  z-index: 10;
  }
}
</style>