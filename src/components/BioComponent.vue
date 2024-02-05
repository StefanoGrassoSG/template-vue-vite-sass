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
    <div class="bio-section">
        <div class="d-flex align-items-center cit-section">
            <div class="col-12 align-items-center text-center my-4">
                <img src="../../public/grafica_portfolio_daje.png" class="avatar" alt="">
            </div>
        </div>
        <div class="bio-text">
            <div class="container py-3">
                <div class="row d-flex align-items-stretch justify-content-between">
                    <div class="col-6">
                        <div class="card card-style">
                            <h2 class="text-white my-4">
                                Hey!
                            </h2>
                            <h4 class="text-white">
                                Benvenuto nel mio Portfolio!.
                            </h4> 
                            <p class="text-justify">
                                Mi chiamo Alessandro Mungai e sono un Junior Frontend Developer con la passione per la Grafica.
                                Dopo aver conseguito il diploma, ho sempre svolto attività lavorative d'ufficio poco creative. Al termine
                                dell’ultimo percorso aziendale, ho deciso di rimettermi in gioco conseguendo dapprima un master come
                                Graphic Designer e successivamente un master come Fullstack Web Developer. La fusione di queste
                                due formazioni mi ha permesso di unire la mia passione per il design grafico alla competenza tecnica nel
                                campo dello sviluppo web, consentendomi cosi di trasformare le mie idee creative in applicazioni interattive.
                            </p>
                        </div>
                    </div>
                    <div class="col-6 d-flex align-self-stretch">
                        <div class="card card-style">
                            <h2 class="text-white my-4">
                                Le tecnologie che uso
                            </h2>
                            <p>
                                Nel corso del mio percorso di studi e formazione, ho approfondito le tecnologie per la grafica e lo sviluppo, acquisendo competenze significative in ambiti come:
                            </p>
                            <img src="../../public/icone lavoro.png" alt="" class="img-tec" srcset="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/main";
.bio-section {
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(61,60,60,1) 100%); 
    img {
        width: 700px;
        position: relative;
        z-index: 1000;
        margin-top: 80px;
        margin-bottom: 80px;
    }

    .card-style {
        background-color: rgb(30, 30, 30);
        padding: 20px;
        transition: all 0.3s ease-in-out;
        
        &:hover {
            background-color: rgb(24, 24, 24)
        }
    }
    .img-tec {
        width: 300px;
        margin-top: 10px;
    }
    p {
        color: white;
    }

    h2 {
        font-size: 2.5rem;
    }
    .bio-text {
        width: 100vw;
    }

}
</style>
