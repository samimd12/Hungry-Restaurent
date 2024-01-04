
const home = document.getElementById("hom");
const about = document.getElementById("abt");
const menu = document.getElementById("menu");
const special = document.getElementById("spl");
const team = document.getElementById("team");
const contact = document.getElementById("contact");

let navigation = [home,about,menu,special,team,contact];

home.addEventListener("click", () => {
  for (let i = 0; i < navigation.length; i++) {
    navigation[i].classList.remove("act");
  } 
  home.classList.add("act")
})

about.addEventListener("click", () => {
  for (let i = 0; i < navigation.length; i++) {
    navigation[i].classList.remove("act");
  }
  abt.classList.add("act")
})

menu.addEventListener("click", () => {
  for (let i = 0; i < navigation.length; i++) {
    navigation[i].classList.remove("act");
  }
  menu.classList.add("act")
})

special.addEventListener("click", () => {
  for (let i = 0; i < navigation.length; i++) {
    navigation[i].classList.remove("act");
  }
  spl.classList.add("act")
})

team.addEventListener("click", () => {
  for (let i = 0; i < navigation.length; i++) {
    navigation[i].classList.remove("act");
  }
  team.classList.add("act")
})

contact.addEventListener("click", () => {
  for (let i = 0; i < navigation.length; i++) {
    navigation[i].classList.remove("act");
  }
  contact.classList.add("act")
})

const swiperEl = document.querySelector('swiper-container')
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
swiperEl.initialize();


let sections = document.querySelectorAll('section')
let navlink = document.querySelectorAll('nav ul li a')

window.onscroll = () =>{
  sections.forEach(sec=>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navlink.forEach(links=>{
        links.classList.remove('act');
        document.querySelector('nav ul li a[href* =' + id + ']').classList.add('act');
      })
    }
  })
}








let title1 = document.getElementById('title1');
let title2 = document.getElementById('title2');
let title3 = document.getElementById('title3');
let title4 = document.getElementById('title4');

// let dishes = document.querySelectorAll('.specialdishes')
let para = document.getElementById('para')
let heading = document.getElementById('heading')
let image = document.getElementById('image')

let buttons = [title1, title2, title3, title4]
let jsonfilenames = ["sizzling", "crispy", "miso", "rustic"]

title1.addEventListener("click", () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active")
  }
  title1.classList.add("active")
  gettingJson(0)
})

title2.addEventListener("click", () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active")
  }
  title2.classList.add("active")
  gettingJson(1)
})

title3.addEventListener("click", () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active")
  }
  title3.classList.add("active")
  gettingJson(2)
})

title4.addEventListener("click", () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active")
  }
  title4.classList.add("active")
  gettingJson(3)
})

async function gettingJson(val) {
  let response = await fetch(`${jsonfilenames[val]}.json`)
  let data = await response.json();
  // console.log(data[0]['name'])
  heading.innerHTML = data[0]['name']
  image.src = data[0]['image']
  para.innerHTML = data[0]['para']
}

gettingJson()



let navbar = document.getElementById("navbar")
let bar = document.querySelector(".bar")
let checkbtn = document.getElementById("check")
let haambur = document.querySelector('.hamburger')
bar.addEventListener("click", () => {
  if (checkbtn.checked) {
    navbar.style.transform = "translateY(0%)"
    navbar.style.opacity = "1"
    haambur.style.transform = "translateY(0%)"
    // navbar.style.display ="flex"

  }
  else {
    navbar.style.transform = "translateY(-100%)"
    navbar.style.opacity = "0"
    haambur.style.transform = "translateY(-90%)"
  }
})


let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');
let menus = document.querySelector('.menus')
// let dishes = document.querySelectorAll('.specialdishes')
let mpara = document.getElementById('m-para')
let mhead = document.getElementById('m-head')
let photo = document.getElementById('photo')

let mbuttons = [btn1,btn2,btn3,btn4]
let jsonfilename = ["all", "breakfast", "lunch", "dinner"]

btn1.addEventListener("click", () => {
  for (let i = 0; i < mbuttons.length; i++) {
    mbuttons[i].classList.remove("active-btn")
  }
  btn1.classList.add("active-btn")
  gettingMenuJson(jsonfilename[0])
})

btn2.addEventListener("click", () => {
  for (let i = 0; i < mbuttons.length; i++) {
    mbuttons[i].classList.remove("active-btn")
  }
  btn2.classList.add("active-btn")
  gettingMenuJson(jsonfilename[1])
})

btn3.addEventListener("click", () => {
  for (let i = 0; i < mbuttons.length; i++) {
    mbuttons[i].classList.remove("active-btn")
  }
  btn3.classList.add("active-btn")
  gettingMenuJson(jsonfilename[2])
})

btn4.addEventListener("click", () => {
  for (let i = 0; i < mbuttons.length; i++) {
    mbuttons[i].classList.remove("active-btn")
  }
  btn4.classList.add("active-btn")
  gettingMenuJson(jsonfilename[3])
})

async function gettingMenuJson(v) {
  let response = await fetch(`${v}.json`)
  let data = await response.json();

  // console.log(data.length)
  menus.innerHTML="";

  data.forEach(element => {
    // MainDiv
    let mainDiv = document.createElement('div')
    mainDiv.classList.add('single-menu')
    menus.appendChild(mainDiv)


    // Image
    let img= document.createElement('img')
    img.src=element.mImage;
    mainDiv.appendChild(img)

    // Sub Div
    let subDiv = document.createElement('div')
    subDiv.classList.add('menu-content')
    mainDiv.appendChild(subDiv)

    //Dish Name
    let h5 = document.createElement('h5')
    h5.innerHTML= element.mPara
    subDiv.appendChild(h5)

    //Dish Name
    let p = document.createElement('p')
    p.innerHTML= "Lorem ipsum dolor sit amet."
    subDiv.appendChild(p)

  });
  heading.innerHTML = data[0]['name']
  photo.src = data[0]['mImage']
  para.innerHTML = data[0]['mPara']
}

gettingMenuJson()


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}