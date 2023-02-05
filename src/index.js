// import "./styles.scss";


window.onload = () => {
    console.log('load');
    console.log(window.innerWidth);
    let burgerBtn = document.querySelector('.burger__btn');
    //console.log(burgerBtn)
    burgerBtn.onclick = function () {
        console.log('click')
        //burgerBtn.toggleAttribute('hidden')
        hideMenu();
    }


    function hideMenu() {
        const menuMobile = document.querySelector('.menu-mobile');
        //menuMobile.toggleAttribute('hidden');
        menuMobile.classList.toggle('hidden');
      
       
    }

    // if(window.innerWidth >= 768) {
    //     menuMobile.classList.toggle = '.hidden' ;
    // }



}