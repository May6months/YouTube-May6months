

document.addEventListener("DOMContentLoaded", async () => {

    const { arrayVIDEOS } = await import('./db/db.mjs');

    function createCard(card) {
    return `
    <div class="video">
    <div class="thumbnail">
           <iframe class="iframe" src=${card.video} frameborder="0" allowfullscreen></iframe> 
    </div> 
        <div class="details">
            <div class="profile">
                <img src=${card.image} alt="image">
            </div>
            <div class="video-details">
                <p>${card.p}</p>
                    <div class="posted-by">
                        <span>${card.subp}</span>
                        <div class="views-date">
                          <span>${card.views}</span>
                          <span></span>
                          <span>${card.period}</span>
                        </div>
                   </div>
            </div>  
        </div>
    </div>
    `;
    };
    // YT cards
    function createCards() {
        let container = document.querySelector('.video-grid');
        arrayVIDEOS.forEach(video => {
            const toHTML = createCard(video);
            container.insertAdjacentHTML('beforeend', toHTML);
        });
    }
    createCards();


// YouTube logo click
const linkToYoutube = () => {
    const YT_logo = document.querySelector('.logo img')
    YT_logo.addEventListener('click', () => {
         window.open('http://www.youtube.com', '_blank');
    })
};
linkToYoutube()


// link to a YT Channel
const linkToChannel = () => {
    const toChannel = document.querySelectorAll('.video-details p')
    toChannel.forEach((channel) => {
         channel.addEventListener('click', () => {
         window.open('http://www.youtube.com', '_blank');
    })
  })
};
linkToChannel()


// link to a Category Channel
const toCategoryChannel = () => {
    const toCatChannel = document.querySelectorAll('.category-section .category')
    toCatChannel.forEach((channel) => {
         channel.addEventListener('click', () => {
         window.open('http://www.youtube.com', '_blank');
    })
  })
};
toCategoryChannel()


// footer links
const footerLinks = () => {
    const linkFromFooter = document.querySelectorAll('.footer-section span')
    linkFromFooter.forEach((link) => {
         link.addEventListener('click', () => {
         window.open('http://www.youtube.com', '_blank');
    })
  })
};
footerLinks()

    
// javascript spinner satrt -------------------------
setTimeout(function() {
  document.querySelector('.loader-wrapper').style.display = 'none';
  const thumbnails = document.querySelectorAll('.thumbnail')
  thumbnails.forEach((thumbnail) => {
    thumbnail.style.display = 'block'
  })
}, 4000); 

let countdown = document.querySelector(".countdown");
let seconds = document.querySelector(".seconds");
let countdownValue = 5;
function updateCountdown() {
  countdownValue--;
  countdown.innerHTML = `
  <img class="image-YT" src="https://www.vectorlogo.zone/logos/youtube/youtube-ar21.svg" alt="">
  `;
  seconds.innerHTML = `${countdownValue}`
  if (countdownValue === 0) {
    clearInterval(countdownInterval);
  }
}
let countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

}); // DOMContentLoaded  
