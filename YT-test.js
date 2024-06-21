
document.addEventListener("DOMContentLoaded", async () => {



//import { dataArray2 } from "./db.js";


// const dataArray = [
//     { title: "Card 1", content: "This is Card 1" },
//     { title: "Card 2", content: "This is Card 2" },
//     // Add more objects as needed
// ];

// function createCard(data) {
//     const cardHtml = `
//         <div class="card">
//             <h3>${data.title}</h3>
//             <p>${data.content}</p>
//         </div>`;
//     return cardHtml;
// }

// function renderCards() {
//     const container = document.getElementById('cardContainer');
//     dataArray.forEach(item => {
//         const cardHtml = createCard(item);
//         container.insertAdjacentHTML('beforeend', cardHtml);
//     });
// }

// renderCards();





// const dataArray = [
//     { title: "Card 1", content: "This is Card 1" },
//     { title: "Card 2", content: "This is Card 2" },
//     // Add more objects as needed
// ];


// const function_test = () => {
//   //const vvv = document.querySelector('.div-test')

//   //console.log(vvv);

// //   const card = document.createElement('div');
// //   card.classList.add('card-test');
// //   card.textContent = 'hello 444'
// //   vvv.appendChild(card)




// }
// function_test()



// function createCard(data) {
//     const cardHtml = `
//         <div class="card">
//             <h3>${data.title}</h3>
//             <p>${data.content}</p>
//         </div>`;
//     return cardHtml;
// }

// function renderCards() {
//     const container = document.getElementById('cardContainer');
//     dataArray.forEach(item => {
//         const cardHtml = createCard(item);
//         container.insertAdjacentHTML('beforeend', cardHtml);
//     });
// }

// renderCards();





// Correct the following code
// i need to use .forEach(), backtick html template and nsertAdjacentHTML
// const dataArray = [
//     { title: "Card 1", content: "This is Card 1" },
//     { title: "Card 2", content: "This is Card 2" },
//     // Add more objects as needed
// ];


// function createCard1(data) {
//     let container = document.getElementById('cardContainer');
//     container.innerHTML = `
//         <div class="card">
//             <h3>${data.title}</h3>
//             <p>${data.content}</p>
//         </div>`;
//         dataArray.forEach(item => {
//             const cardHtml = createCard(item);
//             container.insertAdjacentHTML('beforeend', cardHtml);
//         });
//     return cardHtml;
// }


// "https://www.youtube.com/embed/VIDEO_ID"

// const dataArray2 = [
//     { video: "https://www.youtube.com/embed/DvD04e8lS70?si=8-e6UctpwIH0sE5P",
//       image: "https://yt3.ggpht.com/v0qeWuW6uFcBnQUeQlS_miw4uQBcwCLC3tmKh7-E6u250A1OeprB_SU2Qdp84kX2Fl5NYTSF=s88-c-k-c0x00ffffff-no-rj",
//       h2: 'How to make YouTube Thumbnails the right way',
//       p: 'Electro bike',
//       subp: 'good',
//       views: '10000k Views',
//       period: '22 month ago',
//      },
//     { video: "https://www.youtube.com/embed/KFGES0sESy0?si=v-eIaqmGfPfEXOCu",
//       image: "https://yt3.ggpht.com/v0qeWuW6uFcBnQUeQlS_miw4uQBcwCLC3tmKh7-E6u250A1OeprB_SU2Qdp84kX2Fl5NYTSF=s88-c-k-c0x00ffffff-no-rj",
//       h2: 'How to make YouTube Thumbnails the right way',
//       p: 'Car Electrinics',
//       subp: 'good',
//       views: '10000k Views',
//       period: '22 month ago',
//      },
//     { video: "https://www.youtube.com/embed/DvD04e8lS70?si=8-e6UctpwIH0sE5P",
//       image: "https://yt3.ggpht.com/v0qeWuW6uFcBnQUeQlS_miw4uQBcwCLC3tmKh7-E6u250A1OeprB_SU2Qdp84kX2Fl5NYTSF=s88-c-k-c0x00ffffff-no-rj",
//       h2: 'How to make YouTube Thumbnails the right way',
//       p: 'Electro bike',
//       subp: 'good',
//       views: '10000k Views',
//       period: '22 month ago',
//      },
//     { video: "https://www.youtube.com/embed/DvD04e8lS70?si=8-e6UctpwIH0sE5P",
//       image: "https://yt3.ggpht.com/v0qeWuW6uFcBnQUeQlS_miw4uQBcwCLC3tmKh7-E6u250A1OeprB_SU2Qdp84kX2Fl5NYTSF=s88-c-k-c0x00ffffff-no-rj",
//       h2: 'How to make YouTube Thumbnails the right way',
//       p: 'Car Electrinics',
//       subp: 'good',
//       views: '10000k Views',
//       period: '22 month ago',
//      },
//     { video: "https://www.youtube.com/embed/DvD04e8lS70?si=8-e6UctpwIH0sE5P",
//       image: "https://yt3.ggpht.com/v0qeWuW6uFcBnQUeQlS_miw4uQBcwCLC3tmKh7-E6u250A1OeprB_SU2Qdp84kX2Fl5NYTSF=s88-c-k-c0x00ffffff-no-rj",
//       h2: 'How to make YouTube Thumbnails the right way',
//       p: 'Electro bike',
//       subp: 'good',
//       views: '10000k Views',
//       period: '22 month ago',
//      },
//     { video: "https://www.youtube.com/embed/DvD04e8lS70?si=8-e6UctpwIH0sE5P",
//       image: "https://yt3.ggpht.com/v0qeWuW6uFcBnQUeQlS_miw4uQBcwCLC3tmKh7-E6u250A1OeprB_SU2Qdp84kX2Fl5NYTSF=s88-c-k-c0x00ffffff-no-rj",
//       h2: 'How to make YouTube Thumbnails the right way',
//       p: 'Car Electrinics',
//       subp: 'good',
//       views: '10000k Views',
//       period: '22 month ago',
//      },
//     // Add more objects as needed
// ];


//import { dataArray2 } from "./db.mjs";
//import { dataArray2 } from "./db.js";
//import { dataArray2 } from "./db/db.mjs";
const { dataArray2 } = await import('./db/db.mjs');
console.log(dataArray2);


// // start random number 
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// var displayElement = document.querySelector('.random-number');
// // Generate a random number between 50 and 750
// var randomNumber = getRandomInt(50, 750);
// // Display the random number on the screen
// displayElement.textContent = randomNumber;
// // end random number



{/* <iframe class="iframe" src=${data.video}></iframe>  */}
{/* <iframe width="100%" height="auto" src=${data.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
// width="100%" height="auto" 
{/* <iframe  class="iframe" width="100%" height="0"  src=${data.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
{/* <iframe class="iframe" src=${data.video} frameborder="0" allowfullscreen></iframe>  */}

//import { dataArray2 } from "./db.js";


function createCard(data) {
    return `

<div class="video">

<div class="thumbnail">
       <iframe class="iframe" src=${data.video} frameborder="0" allowfullscreen></iframe> 
</div> 


    <div class="details">

        <div class="profile">
            <img src=${data.image} alt="">
        </div>

        <div class="video-details">
            <p>${data.p}</p>
                <div class="posted-by">
                    <span>${data.subp}</span>
                    <div class="views-date">
                      <span>${data.views}</span>
                      <span></span>
                      <span>${data.period}</span>
                    </div>
               </div>
        </div>  

    </div>

</div>
        


        `;
}

// function createCards() {
//     let container = document.querySelector('.cards-wrapper');
//     dataArray2.forEach(item => {
//         const cardHtml = createCard(item);
//         container.insertAdjacentHTML('beforeend', cardHtml);
//     });
// }

//  createCards();



{/* <div class="video">
<div class="thumbnail">

</div>
<div class="details">
    <div class="profile">
        <img src="https://yt3.ggpht.com/X9eoDIB9cgb1s-kvATRs1lQDcU4Fjc15NDV9s9FF8ck7IsA8u7OdijaernoDV9LLdePgjlt_=s68-c-k-c0x00ffffff-no-rj" alt="">
    </div>
    <div class="video-details">
        <p>How to make YouTube Thumbnails the right way</p>
        <div class="posted-by">
        <span>Tut Gal</span>
      <div class="views-date">
        <span>375k Views</span>
        <span>.</span>
        <span>22 month ago</span>
      </div>
    </div>
  </div>  
</div>
</div> */}



// "https://yt3.ggpht.com/v0qeWuW6uFcBnQUeQlS_miw4uQBcwCLC3tmKh7-E6u250A1OeprB_SU2Qdp84kX2Fl5NYTSF=s88-c-k-c0x00ffffff-no-rj"



}); // DOMContentLoaded

