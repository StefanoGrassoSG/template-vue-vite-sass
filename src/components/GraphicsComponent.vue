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
<div class="container">
    <div class="row">
        <div class="col-6">
            <h2 class="text-white text-center mb-3">Art</h2>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="../../public/fren.png" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="../../public/rut.png" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="../../public/montagnacar.png" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="../../public/ny.png" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="../../public/spidey-nuovo.gif" class="d-block w-100" alt="...">
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="col-6">
            <h2 class="text-white text-center mb-3">Logo</h2>
            <div id="carouselExampleIndicators2" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="../../public/logo300.png" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="../../public/cck.png" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="../../public/logoky.png" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <div class="d-flex justify-content-center align-items-center">
                            <img src="../../public/mw.png" class="d-block w-100" alt="...">
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
@use "../assets/scss/main";

img {
    max-width: 400px;
    max-height: 400px;
    min-width: 400px;
}
</style>
