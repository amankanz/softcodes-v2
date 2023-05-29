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


/*=== START ANIMATION === */
// const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//   const randomDelay = Math.random() * 3; // Random delay between 0 and 3 seconds
//   box.style.animationDelay = `${randomDelay}s`;
// });

// const boxes = document.querySelectorAll('.box');
// const maxWidth = 600;

// function stopAnimation() {
//   boxes.forEach(box => {
//     box.style.animation = 'none';
//   });
// }

// function startAnimation() {
//   boxes.forEach(box => {
//     const randomDelay = Math.random() * 3; // Random delay between 0 and 3 seconds
//     box.style.animation = `moveBox 1s infinite ease-in-out ${randomDelay}s`;
//   });
// }

// function handleResize() {
//   if (window.innerWidth <= maxWidth) {
//     stopAnimation();
//   } else {
//     startAnimation();
//   }
// }

// window.addEventListener('resize', handleResize);



// const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//   const randomDelay = Math.random() * 3; // Random delay between 0 and 3 seconds
//   box.style.animationDelay = `${randomDelay}s`;
// });

/*=== END ANIMATION === */

/*===== START STOP ANIMATION === */
// function stopAnimation() {
//   var animationElement = document.getElementById('.box');
//   var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
//   if (windowWidth <= 500) {
//     animationElement.style.animation = 'none';
//   } else {
//     animationElement.style.animation = 'moveAnimation 2s infinite';
//   }
// }

// window.addEventListener('resize', stopAnimation);

/*===== END STOP ANIMATION === */

// function moveBox(box) {
//   var containerWidth = window.innerWidth;
//   var containerHeight = window.innerHeight;
  
//   var randomX = Math.random() * (containerWidth - box.clientWidth);
//   var randomY = Math.random() * (containerHeight - box.clientHeight);
  
//   box.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px)';
// }

// var boxes = document.querySelectorAll('.box');
// var maxWidth = 600;

// window.addEventListener('resize', function() {
//   if (window.innerWidth <= maxWidth) {
//     for (var i = 0; i < boxes.length; i++) {
//       boxes[i].removeEventListener('mouseenter', moveBox.bind(null, boxes[i]));
//     }
//   } else {
//     for (var i = 0; i < boxes.length; i++) {
//       boxes[i].addEventListener('mouseenter', moveBox.bind(null, boxes[i]));
//     }
//   }
// });


// var boxes = document.querySelectorAll('.box');
// var maxWidth = 600;

// function stopAnimation() {
//   for (var i = 0; i < boxes.length; i++) {
//     boxes[i].style.animation = 'none';
//   }
// }

// function startAnimation() {
//   for (var i = 0; i < boxes.length; i++) {
//     const randomDelay = Math.random() * 3; // Random delay between 0 and 3 seconds
//     boxes[i].style.animation = `moveBoxAnimation 3s ${randomDelay}s infinite ease-in-out`;
//   }
// }

// function checkScreenWidth() {
//   if (window.innerWidth <= maxWidth) {
//     stopAnimation();
//   } else {
//     startAnimation();
//   }
// }

// window.addEventListener('resize', checkScreenWidth);

// // Initial check when the page loads
// checkScreenWidth();


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
