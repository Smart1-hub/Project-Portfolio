// mobile JavaScript DOM
/*const navSlide = () => {
  const burger = document.querySelector('.burger');
  const navbar = document.querySelector('.nav-links');
  burger.addEventListener('click', ()=> {
    navbar.classList.toggle('nav-active');
  });
}
navSlide();*/

const burger = document.querySelector('.burger');
const close = document.querySelector('.close');
const menu = document.querySelector('.mobile')
const links = document.querySelectorAll('.menu-links')

burger.addEventListener('click', (event) => {
    if (event.target) {
        menu.style.display = 'block'
    }
})

close.addEventListener('click', (event) => {
    if (event.target) {
        menu.style.display = 'none'
    }
})

links.forEach((link) => {
    link.addEventListener('click', (event) => {
        if (event.target) {
            menu.style.display = 'none'
        }
    })
});

/* object */
const projectCards = [{
        id: 1,
        title: 'Multi-Post Stories',
        image: './img-mobile.png',
        description: 'A daily selection of privately<br> personalized read; no accounts<br> or sign-ups required, has been the<br> industry\'s standard dummy text<br> ever since the 1500s, when an<br> unknown printer took a took a standard<br> dummy text',
        languages: [
            'css',
            'html',
            'bootstrap',
            'Ruby'
        ]
    },
    {
        id: 2,
        title: 'Multi-Post Stories',
        image: './img-mobile.png',
        description: 'A daily selection of privately<br> personalized read; no accounts<br> or sign-ups required, has been the<br> industry\'s standard dummy text<br> ever since the 1500s, when an<br> unknown printer took a took a standard<br> dummy text',
        languages: [
            'css', 'html', 'bootstrap', 'Ruby'
        ]

    },
    {
        id: 3,
        title: 'Multi-Post Stories',
        image: './img-mobile.png',
        description: 'A daily selection of privately<br> personalized read; no accounts<br> or sign-ups required, has been the<br> industry\'s standard dummy text<br> ever since the 1500s, when an<br> unknown printer took a took a standard<br> dummy text',
        languages: [
            'css',
            'html',
            'bootstrap',
            'Ruby'
        ]
    },
    {
        id: 4,
        title: 'Multi-Post Stories',
        image: './img-mobile.png',
        description: 'A daily selection of privately<br> personalized read; no accounts<br> or sign-ups required, has been the<br> industry\'s standard dummy text<br> ever since the 1500s, when an<br> unknown printer took a took a standard<br> dummy text',
        languages: [
            'css',
            'html',
            'bootstrap',
            'Ruby'
        ]

    }
];

/* projects */

const cards = document.querySelector('.works-container');

for (let i = 0; i < projectCards.length; i++) {
    cards.innerHTML += `<div class="sub-flex ${i % 2 !== 0 ? 'reverse' : ''}">
<div class="box">
  <img src="${projectCards[i].image}" alt="#">
</div>
<div class="story-title">
  <div>
      <h2>${projectCards[i].title}</h2>
      <p>${projectCards[i].description}</p>
  </div>
  <div>
      <ul>
          <li>${projectCards[i].languages[0]}</li>
          <li>${projectCards[i].languages[1]}</li>
          <li>${projectCards[i].languages[2]}</li>
          <li>${projectCards[i].languages[3]}</li>
      </ul>
  </div>
  <div>
      <button id='window-btn' onclick='' class="btn-1">See Project</button>
  </div>
</div>
</div>`;
}

/* popup window */

const openWindow = document.getElementById('window-btn');
const popupWindow = document.querySelector('.popup-window').style;





const workData = () => {
        const popup = `<div class="popup-window">
        <div class="popup-title">
            <h2>${projectCards[i].title}</h2>
            <i class="fa fa-close popup-close"></i>
        </div>
        <img src="${projectCards[i].image}" alt="">
        <p>${projectCards[i].description}</p>
        <div class="popup-languages">
            <ul class="laguages-list">${projectCards[i].languages.map((s) => `<li>${s}</li>`).join('')}</ul>
        </div>
        <div class="popup-button">
            <div class="link-btn">
                <button class="btn-ctc">See Live </button>
                <button class="btn-ctc">See Source</button>
            </div>
        </div>
    </div>`;
    document.querySelector('.popup-container').innerHTML = popup;
    document.querySelector('body').style = 'overflow: hidden';
    document.querySelector('.popup-window').style = 'display: flex; position: fixed; top: 5px; left: 15px';

};

function poppuWindow(cardId) {
    if (cardId === null) return;
    let item = projectsList.filter((elem) => elem.id === cardId);
    item = item.shift();
    const popup = `<div class="popup-window">
        <div class="popup-title">
            <h2>${item.title}</h2>
            <i class="fa fa-close popup-close"></i>
        </div>
        <img src="${item.image}" alt="">
        <p>${item.description}</p>
        <div class="popup-languages">
            <ul class="laguages-list">
                <li>html</li>
                <li>Ruby on rails</li>
                <li>css</li>
            </ul>
        </div>
        <div class="popup-button">
            <div class="link-btn">
                <button class="btn-ctc">See Live </button>
                <button class="btn-ctc">See Source</button>
            </div>
        </div>
    </div>`;
    document.querySelector('.popup-container').innerHTML = popup;

}