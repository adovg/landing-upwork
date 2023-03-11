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

function togglePrice () {
    const btn = document.querySelector('.switcher');
    const bilingItem = document.querySelectorAll('.biling__item');

    btn.addEventListener('click', ()=> {
        btn.classList.toggle('switcher-active');

        if( !btn.classList.contains('switcher-active') ) {
            bilingItem[0].classList.add('biling__item-active');
            bilingItem[1].classList.remove('biling__item-active');
        }else {
            bilingItem[0].classList.remove('biling__item-active');
            bilingItem[1].classList.add('biling__item-active');
        }
    })
    
}

togglePrice (); 


}