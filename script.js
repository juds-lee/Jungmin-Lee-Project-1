//   nav menu functionality

  document.querySelector('.menu-btn').addEventListener("click", () => {
    
              document.querySelector(".nav-menu").classList.toggle("show");
              console.log(document.querySelector(".nav-menu"));
        })
// adding comments
// add event listener for form being submitted
// save users input
// dyanmically create a element for comment
// append comment to page

const commentForm = document.querySelector("form");

 commentForm.addEventListener('submit', function(event) {
   event.preventDefault();
   console.log("submit");
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
      nameForm.textContent = name + " comments..."

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