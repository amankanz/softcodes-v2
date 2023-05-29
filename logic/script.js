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





/*=== START OF SIDEBAR === */
window.addEventListener('scroll', function() {
  var sidebar = document.querySelector('.sidebar');
  var container = document.querySelector('.serivice_section');
  var containerRect = container.getBoundingClientRect();
  var sidebarRect = sidebar.getBoundingClientRect();
  var containerTop = containerRect.top;
  var containerBottom = containerRect.bottom - sidebarRect.height;

  if (window.pageYOffset >= containerTop && window.pageYOffset <= containerBottom) {
    sidebar.style.top = window.pageYOffset - containerTop + 'px';
  } else if (window.pageYOffset > containerBottom) {
    sidebar.style.top = containerBottom - containerTop + 'px';
  } else {
    sidebar.style.top = '0';
  }
});


/*=== END OF SIDEBAR === */


/*=== START OF ANIMATION === */

var boxes = document.querySelectorAll('.box');
var maxWidth = 600;

function stopAnimation() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.animationPlayState = 'paused';
  }
}

function startAnimation() {
  for (var i = 0; i < boxes.length; i++) {
    const randomDelay = Math.random() * 3; // Random delay between 0 and 3 seconds
    boxes[i].style.animationPlayState = 'running';
    boxes[i].style.animationDelay = `${randomDelay}s`;
  }
}

function checkScreenWidth() {
  if (window.innerWidth <= maxWidth) {
    stopAnimation();
  } else {
    startAnimation();
  }
}

window.addEventListener('resize', checkScreenWidth);

// Initial check when the page loads
checkScreenWidth();

/*=== STOP OF ANIMATION === */
