// let i = 0;
// let skill = document.getElementById('skill')

// const move = () => {
//   if (i == 0) {
//     i = 1;
//     let elem = document.getElementById("myBar");
//     let width = 10;
//     let id = setInterval(frame, 18);
//     function frame() {
//       if (width >= 70) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//         elem.innerHTML = width  + "%";
//       }
//     }
//   }
//   skill.removeEventListener('mouseover', move, false)
// }
// skill.addEventListener('mouseover', move, false);


// let j = 0;
// const move2 = () => {
//   if (j == 0) {
//     j = 1;
//     let elem2 = document.getElementById("myBar2");
//     let width2 = 10;
//     let ij = setInterval(frame, 24);
//     function frame() {
//       if (width2 >= 70) {
//         clearInterval(ij);
//         j = 0;
//       } else {
//         width2++;
//         elem2.style.width = width2 + "%";
//         elem2.innerHTML = width2  + "%";
//       }
//     }
//   }
//   skill.removeEventListener('mouseover', move2, false)
// }
// skill.addEventListener('mouseover', move2, false);


// let g = 0;
// const move3 = () => {
//   if (g == 0) {
//     g = 1;
//     let elem3 = document.getElementById("myBar3");
//     let width3 = 10;
//     let ig = setInterval(frame, 22);
//     function frame() {
//       if (width3 >= 40) {
//         clearInterval(ig);
//         g = 0;
//       } else {
//         width3++;
//         elem3.style.width = width3 + "%";
//         elem3.innerHTML = width3 + "%";
//       }
//     }
//   }
//   skill.removeEventListener('mouseover', move3, false)
// }
// skill.addEventListener('mouseover', move3, false);



// const contactCard = document.getElementsByClassName('contact-icon');
// let iconWidth = 25;
// window.addEventListener('mouseover', function() {
// if (contactCard < 10) {
// iconWidth++;
// contactCard.style.width = iconWidth;

// }
// }, false);

// let r = 0;
// const move4 = () => {
//   if (r == 0) {
//     r = 1;
//     let elem4 = document.getElementById("myBar4");
//     let width4 = 10;
//     let ir = setInterval(frame, 22);
//     function frame() {
//       if (width4 >= 20) {
//         clearInterval(ir);
//         r = 0;
//       } else {
//         width4++;
//         elem4.style.width = width4 + "%";
//         elem4.innerHTML = width4 + "%";
//       }
//     }
//   }
//   skill.removeEventListener('mouseover', move4, false)
// }
// skill.addEventListener('mouseover', move4, false);


// let rr = 0;
// const move5 = () => {
//   if (rr == 0) {
//     rr = 1;
//     let elem5 = document.getElementById("myBar5");
//     let width5 = 10;
//     let irr = setInterval(frame, 22);
//     function frame() {
//       if (width5 >= 40) {
//         clearInterval(irr);
//         rr = 0;
//       } else {
//         width5++;
//         elem5.style.width = width5 + "%";
//         elem5.innerHTML = width5 + "%";
//       }
//     }
//   }
//   skill.removeEventListener('mouseover', move5, false)
// }
// skill.addEventListener('mouseover', move5, false);

//reeerg

const bars = document.querySelectorAll("[data-bar-id]");

const move = () => {
  let i = 0;
  if (i == 0) {
    i = 1;
    bars.forEach(bar => {
      let elem = document.getElementById(bar.dataset.barId);
      const percent = bar.dataset.percent
      let width = 10;
      let ir = setInterval(frame, 22);
    function frame() {
      if (width >= percent) {
        clearInterval(ir);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
    })
  }
  }


const progressBars = () => {
  bars.forEach(bar => {
    bar.addEventListener("mouseover", move(), false)
    bar.removeEventListener('mouseover', move(), false)
  })
}

progressBars();