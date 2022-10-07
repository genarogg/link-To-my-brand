const dominioGenarogg = "https://xiana.tk/portafolio"
const isoLogo = "https://genarogg.github.io/link-To-my-brand/img/isotipo.svg"
const logoTipo = "https://genarogg.github.io/link-To-my-brand/img/logoGG.svg"
const  background = "https://genarogg.github.io/link-To-my-brand/img/portada-de-linkedin.png"

const genaroggBrand = `<style>.container-my-script{background: #282828 !important;border-radius: 0 0 0 10px !important;box-shadow: 0px 1px 0px 2px #ffffff !important;color: #fff  !important;cursor: pointer !important;font-size: 20px  !important;right: -133px;padding:5px  !important;position: fixed  !important;transition: all ease 600ms !important;top: 0px !important;z-index: 9000 !important;}.container-my-script:hover{right: 0;transition: all ease 600ms !important;}.button-genarogg{background-color: transparent !important;border: none !important;cursor: pointer !important;}img.isoLogo{width: 30px !important;}img.img-logo{height: 29px !important;padding-left: 4px !important;width: 125px !important;}</style><div class="container-my-script"><button class="button-genarogg"><a href="${dominioGenarogg}" target="__back"><img class="isoLogo" src="${isoLogo}" alt="isoTipo de ${dominioGenarogg}"><img class="img-logo" src="${logoTipo}" alt="Logo de ${dominioGenarogg}"></a></button></div>`
const buttonBrand = document.getElementById('buttonBrand').innerHTML = genaroggBrand;

