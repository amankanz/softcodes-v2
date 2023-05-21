/*====== TRANSITIONNING ======*/

// // Function to transition between pages
// function transitionPages() {
//   // Hide current page
//   document.getElementById("home_page").classList.add("hidden");
  
//   // Show new page after a slight delay
//   setTimeout(function() {
//     document.getElementById("contact_page").classList.remove("hidden");
//   }, 100);
// }

// // Example: Trigger the transition on a button click
// document.getElementById("button").addEventListener("click", function() {
//   transitionPages();
// });



/*====== END OF TRANSITIONNING ======*/


const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  const randomDelay = Math.random() * 3; // Random delay between 0 and 3 seconds
  box.style.animationDelay = `${randomDelay}s`;
});

