//   nav menu functionality
  document.querySelector('.menu-btn').addEventListener("click", () => {
              document.querySelector(".nav-menu").classList.toggle("show");
              console.log(document.querySelector(".nav-menu"));
        })

// adding comments functionality

// add event listener for form being submitted
// save users input
// dyanmically create a element for comment
// append comment to page

const commentForm = document.querySelector("form");

 commentForm.addEventListener('submit', function(event) {
   event.preventDefault();
  // get date
  const date = new Date()

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "August", "October", "November", "December"];

  let dateNumber = date.getDate();
  let month = monthsOfYear[date.getMonth()];
  let year = date.getFullYear();
  let day = daysOfWeek[date.getDay()];
  let todayIs = `${day} ${month} ${dateNumber}, ${year}`;
  console.log(todayIs);
  // variable to store input element
  const commentElement = document.querySelector("textarea");
  const nameElement = document.querySelector("input");

  // variable to store users input
  const comment = commentElement.value;
  const name = nameElement.value;
  console.log(nameElement.value)
 
  // check these elements are not empty strings 
  if (comment && name) {
     // create a comment item element
    const nameArea = document.createElement("div")
    // const commentArea = document.createElement("div")

  //  create picture item element 
    const picArea = document.createElement("div")
   // create a p to hold the users tasks
    const paragraph = document.createElement("p")
     paragraph.textContent = comment
    const nameForm = document.createElement("p")
      nameForm.textContent = todayIs + " By " + name 

    //  create an img to hold user img
    pic = document.createElement("img");
    pic.src= "./assets/comment-2.jpg"

    
    // append the p to the comment area as a child
    nameArea.appendChild(nameForm)
    nameArea.appendChild(paragraph)
    picArea.appendChild(pic)
      // append this to the comment section of my blog 
    document.querySelector(".new-comments").appendChild(picArea);
    document.querySelector(".new-comments").appendChild(nameArea);
    document.querySelector(".new-comments").appendChild(commentArea);
 
  } else {
    alert("Please put in a comment! :)")
  }
})

// Image Carousel 
const nextButton = document.querySelector(".right-arrow");
const prevButton = document.querySelector(".left-arrow");
const track = document.querySelector(".img-car")
const slides = Array.from(track.children);
const circleNav = document.querySelector(".carousel-tracker");
const circle = Array.from(circleNav.children);

// add event listener for the arrows on click             
// move images right when i click arrow
//  change class name of Icon when active and inactive
nextButton.addEventListener("click", e => {
  const currentSlide = track.querySelector(".active");
  const currentCircle = circleNav.querySelector(".fas");
  currentSlide.classList.remove("active");
  currentCircle.classList.remove("fas");
  currentCircle.classList.add("far");

  let nextSlide = currentSlide.nextElementSibling;
  let nextCircle = currentCircle.nextElementSibling;
  if (!nextSlide && !nextCircle){
    nextSlide = slides[0];
    nextCircle = circle[0];
  }  nextSlide.classList.add("active");
    nextCircle.classList.add("fas");
    nextCircle.classList.remove("far");
    console.log(nextSlide, nextCircle);
})

prevButton.addEventListener("click", e => {
  const currentSlide = track.querySelector(".active");
  const currentCircle = circleNav.querySelector(".fas");
  currentCircle.classList.remove("fas");
  currentCircle.classList.add("far");
  currentSlide.classList.remove("active");

// move images left when i click arrow
  let prevSlide = currentSlide.previousElementSibling;
  let prevCircle = currentCircle.previousElementSibling;
  if (!prevSlide && !prevCircle){
    prevSlide = slides[slides.length-1];
    prevCircle = circle[circle.length-1];
  }  prevSlide.classList.add("active");
    prevCircle.classList.add("fas");
    prevCircle.classList.remove("far");
})

