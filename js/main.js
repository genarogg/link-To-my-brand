const dominioGenarogg = "https://genarogg.tk"
const isoLogo = "https://genarogg.github.io/link-To-my-brand/img/isotipo.svg"
const logoTipo = "https://genarogg.github.io/link-To-my-brand/img/logoGG.svg"
const  background = "https://genarogg.github.io/link-To-my-brand/img/portada-de-linkedin.png"

const genaroggBrand = `<style>.container-my-script{background: #282828;border-radius: 0 0 0 10px;box-shadow: 0px 1px 0px 2px #ffffff;color: #fff;cursor: pointer;font-size: 20px;right: -133px;padding:5px;position: fixed;transition: all ease 600ms;top: 0px;z-index: 9000;}.container-my-script:hover{right: 0;transition: all ease 600ms;}.button-genarogg{background-color: transparent;border: none;cursor: pointer;}img.isoLogo{width: 30px;}img.img-logo{height: 29px;padding-left: 4px;width: 125px;}</style><div class="container-my-script"><button class="button-genarogg"><a href="${dominioGenarogg}" target="__back"><img class="isoLogo" src="${isoLogo}" alt="isoTipo de ${dominioGenarogg}"><img class="img-logo" src="${logoTipo}" alt="Logo de ${dominioGenarogg}"></a></button></div>`
const buttonBrand = document.getElementById('buttonBrand').innerHTML = genaroggBrand;

