var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
    
    "use strict";
    
    mainListDiv.classList.toggle("show_list");
    mediaButton.classList.toggle("active");
    
};
// /*-------------Slider-----------*/

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
}

// -------- dISPLAY jSON fORM --------------
// -----------------------------------------
const formEl = document.querySelector(".form");
formEl.addEventListener("submit", () => {
    event.preventDefault();

    const formData = new FormData(formEl);

    const data = Object.fromEntries(formData);
    // console.log(data);
 
   document.getElementById('showJson').innerHTML = JSON.stringify(data, null, 4);
});

// ------ What mean JsON File -------------
// ----------------------------------------


// ADVANCED DEMO WITH JSONPLACEHOLDER API 

const postSection = document.querySelector('#posts');
const postTemplate = document.querySelector('#post-template');

getData()
  .catch(err => console.error(err));

async function getData() {
  const postStream = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await postStream.json();
  let i = 0;

  // throw 'Get Data Error';
  // console.log(posts);

  posts.forEach(post => {
    i++;
    if(i < 10) {
      const title = post.title;
      const body = post.body;

      fetch('https://unsplash.it/300/200')
        .then(res => res.blob())
        .then(blob => {
          const newPost = document.importNode(postTemplate.content, true);
          const postTitle = newPost.querySelector('.post__title');
          const postBody = newPost.querySelector('.post__body');
          const postImg = newPost.querySelector('.post__img');

          // throw 'Image Fetch Error';

          postImg.src = URL.createObjectURL(blob);
          postTitle.innerText = title;
          postBody.innerText = body;
          postSection.appendChild(newPost);
        })
        .catch(err => console.error(err));
    }
  })

  /*------------------------dark mode-----------------*/
}
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
function toggles(){
  toggle.classList.toggle('active');
  body.classList.toggle('active');
}