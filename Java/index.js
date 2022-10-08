//typing animation starts here
var typed = new Typed('.typing',{
     strings:['Web designer', 'web developer', "Graphic's designer", "Youtuber", "Email marketer"],
     typeSpeed: 100,
     BackSpeed:60,
     loop:true
})
var typed = new Typed('.typing__about',{
     strings:['Web designer', 'web developer', "Graphic's designer", "Youtuber", "Email marketer"],
     typeSpeed: 100,
     BackSpeed:60,
     loop:true
})
// typing animation ends here

// the navigation section starts here
let navBar = document.querySelector('.header');
let menuBtn = document.querySelector('.open');
let eixtBtn = document.querySelector('.eixt');
let navigation =  document.querySelector('.navigation__links');
let quickLinks = document.querySelectorAll('.menulinks');
let home = document.querySelector('.active__home');
let about = document.querySelector('.active__about');
let skills = document.querySelector('.active__skills');
let service = document.querySelector('.active__service');
let portfilo = document.querySelector('.active__portfilo');
let contact = document.querySelector('.active___contact ');

menuBtn.addEventListener('click', ()=>{
     navigation.classList.add('show__mobile')
})
eixtBtn.addEventListener('click', ()=>{
     navigation.classList.remove('show__mobile')

})



quickLinks.forEach((linksitem)=>{
     linksitem.addEventListener('click', (e)=>{
          const indicator = e.currentTarget.classList;
          if(indicator.contains('home__on')){
               home.classList.add('show__active__link')
               about.classList.remove('show__active__link')
               skills.classList.remove('show__active__link')
               service.classList.remove('show__active__link')
               portfilo.classList.remove('show__active__link')
               contact.classList.remove('show__active__link')
          }
          if(indicator.contains('about__on')){
               home.classList.remove('show__active__link')
               about.classList.add('show__active__link')
               skills.classList.remove('show__active__link')
               service.classList.remove('show__active__link')
               portfilo.classList.remove('show__active__link')
               contact.classList.remove('show__active__link')
          }
          if(indicator.contains('skills__on')){
               home.classList.remove('show__active__link')
               about.classList.remove('show__active__link')
               skills.classList.add('show__active__link')
               service.classList.remove('show__active__link')
               portfilo.classList.remove('show__active__link')
               contact.classList.remove('show__active__link')
          }
          if(indicator.contains('service__on')){
               home.classList.remove('show__active__link')
               about.classList.remove('show__active__link')
               skills.classList.remove('show__active__link')
               service.classList.add('show__active__link')
               portfilo.classList.remove('show__active__link')
               contact.classList.remove('show__active__link')
          }
          if(indicator.contains('portfilo__on')){
               home.classList.remove('show__active__link')
               about.classList.remove('show__active__link')
               skills.classList.remove('show__active__link')
               service.classList.remove('show__active__link')
               portfilo.classList.add('show__active__link')
               contact.classList.remove('show__active__link')
          }
          if(indicator.contains('contact__on')){
               home.classList.remove('show__active__link')
               about.classList.remove('show__active__link')
               skills.classList.remove('show__active__link')
               service.classList.remove('show__active__link')
               portfilo.classList.remove('show__active__link')
               contact.classList.add('show__active__link')
          }
         
     })
})

window.addEventListener('scroll', function(){
     const navBarHeight = navBar.getBoundingClientRect().height;
     const windowScrollHeight = window.pageYOffset;
     
     if ( windowScrollHeight > navBarHeight ){
          navBar.classList.add('header__static')
     }
     else{
          navBar.classList.remove('header__static')
     }
})
// the navigation section ends here

// the home section starts here
let backToTop = document.querySelector('.back__to__top');

document.getElementById('homebtn').addEventListener('click', ()=>{
     document.querySelector('.random__email__me').classList.add('show__randomEmailMe')
})
document.querySelector('.random__exit').addEventListener('click', ()=>{
     document.querySelector('.random__email__me').classList.remove('show__randomEmailMe')
})
window.addEventListener('scroll', ()=>{
     const homeHeight = document.querySelector('.home').getBoundingClientRect().height;
     const windowHeight = window.pageYOffset;

     if ( windowHeight > homeHeight){
          backToTop.classList.add('show__backtotop')
     }
     else{
          backToTop.classList.remove('show__backtotop')
     }
})
// the home section ends here

// the skills section starts here
let skillsBtn = document.querySelectorAll('.togle');
let skillsExitBtn = document.querySelectorAll('.close');
let boxOne = document.querySelector('.containerux');
let boxtwo = document.querySelector('.containerfrontend');
let boxThree = document.querySelector('.containerbackend');

/*const bodyEixt = ()=>{
     document.querySelectorAll('.container__skills-box').forEach(
          (bodeyitem)=>{
               bodeyitem.addEventListener('click',(e)=>{
                    if(!e.currentTarget.classList.contains('togle','fa-gear','fa-solid', 'fa-gear-one','fa-gear-two','fa-gear-three')){
                         console.log('you are getting there')
                    }
                    else{
                         console.log('hello')
                    }
               })
          }
     )
}
bodyEixt()*/
skillsExitBtn.forEach((skillitems)=>{
     skillitems.addEventListener('click',(e)=>{
          const skillsMainBtn = e.currentTarget.classList;
          if( skillsMainBtn.contains('fa')){
               boxOne.classList.remove('show__containerSkillsbox')
             
          }
          if( skillsMainBtn.contains('fb')){
               boxtwo.classList.remove('show__containerSkillsbox')
           
          }
          if( skillsMainBtn.contains('fc')){
               boxThree.classList.remove('show__containerSkillsbox')
               
          }
         
     })
})
skillsBtn.forEach((skillsitems)=>{
     skillsitems.addEventListener('click',(e)=>{
          const skillsMainBtn = e.target.classList;
          if( skillsMainBtn.contains('fa-gear-one')){
               boxOne.classList.add('show__containerSkillsbox')
               boxtwo.classList.remove('show__containerSkillsbox')
               boxThree.classList.remove('show__containerSkillsbox')
          }
          if( skillsMainBtn.contains('fa-gear-two')){
               boxtwo.classList.add('show__containerSkillsbox')
               boxOne.classList.remove('show__containerSkillsbox')
               boxThree.classList.remove('show__containerSkillsbox')
          }
          if( skillsMainBtn.contains('fa-gear-three')){
               boxThree.classList.add('show__containerSkillsbox')
               boxOne.classList.remove('show__containerSkillsbox')
               boxtwo.classList.remove('show__containerSkillsbox')
          }
         
     })
})
// the skills section ends here

// the service section starts here
window.addEventListener('scroll', ()=>{
     var circleOne = document.querySelector('.circle-1');
     var cricleTwo = document.querySelector('.circle-2');
     var windowScrollserviceHeight = window.pageYOffset;
     var aboutHeight = document.querySelector('.about').getBoundingClientRect().height;     
     var skillsHeight = document.querySelector('.skills').getBoundingClientRect().height;
     var homesecondHeight = document.querySelector('.home').getBoundingClientRect().height;
     var navSecondHeight = document.querySelector('.header').getBoundingClientRect().height

     if( windowScrollserviceHeight > (homesecondHeight + aboutHeight +( ( skillsHeight)/2)) ){
          circleOne.classList.add('show__circleUpanimation')
          cricleTwo.classList.add('show__circleUpanimation')

     }
     else{
          circleOne.classList.remove('show__circleUpanimation')
          cricleTwo.classList.remove('show__circleUpanimation')
     }

})
// the service section ends here

