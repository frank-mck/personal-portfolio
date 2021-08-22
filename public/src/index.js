document.addEventListener('DOMContentLoaded', () => {
  const progressBars = () => {
    let skill = document.getElementById('skill');
    const bars = document.querySelectorAll("[data-bar-id]");
    let i = 0;
    if (i == 0) {
      i = 1;
      bars.forEach(bar => {
        var width = 10
        const elem = bar
        const progress = bar.dataset.percent;
        let interval = setInterval(frame, 20);
        function frame() {
          if (width >= progress) {
            clearInterval(interval);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
          }
        }
      })
    }
    skill.removeEventListener('mouseover', progressBars, false);
  }

  skill.addEventListener("mouseover", progressBars, false)
})