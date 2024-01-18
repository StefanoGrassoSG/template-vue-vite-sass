<script >
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<template>
    <header class="">
      <div class="header-nav">
        <div class="row justify-content-between align-items-center">
          <div class="col my-logo">
            <router-link :to="'/'">
              <a href="">
                <img src="../../public/myLogo-02.png" alt="">
              </a>
            </router-link>
          </div>
          <div class="col nav-dx">
            <ul class="d-flex justify-content-end">
              <li>
                <router-link :to="'/graphics'">
                  <a href="" class="hvr-underline-from-left">
                  Graphics
                  </a>
                </router-link>
              </li>
              <li>
                <router-link :to="'/web'">
                  <a href="" class="hvr-underline-from-left">
                  Web
                  </a>
                </router-link>
              </li>
              <li>
                <a href="" class="hvr-underline-from-left">
                  Video
                </a>
              </li>
              <li>
                <a href="" class="hvr-underline-from-left">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main";
@import "../../node_modules/rfs/scss";
h1 {
  @include font-size(4rem);
}
header {
  margin-bottom: 80px;
  position: fixed;
  width: 100%;
  z-index: 100000000;
  .my-logo {
    img {
      width: 45px;
    }
  }
  padding: 30px 100px;
  ul {
  text-decoration: none;
    li {
      list-style-type: none;
      margin-left: 30px;
      a {
        text-decoration: none;
        color: white;
        font-weight: bold;
        font-size: 1.2rem;
      }
    }
  }
}
</style>
