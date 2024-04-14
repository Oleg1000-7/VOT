document.addEventListener("DOMContentLoaded", () => {
  const rangeSliderContainer = document.querySelector(".timeline-slider");
  const timelineDate = document.querySelector(".timeline-date");
  const leftDate = timelineDate.querySelector(".left-date");
  const rightDate = timelineDate.querySelector(".right-date");
  const timelineContent = document.querySelector(".timeline-content");
  

  const timelineDateArray = [
    "Июнь 1941",
    "Июль 1941",
    "Август 1941",
    "Сентябрь 1941",
    "Октябрь 1941",
    "Ноябрь 1941",
    "Декабрь 1941",
    "Январь 1942",
    "Февраль 1942",
    "Март 1942",
    "Апрель 1942",
    "Май 1942",
    "Июнь 1942",
    "Июль 1942",
    "Август 1942",
    "Сентябрь 1942",
    "Октябрь 1942",
    "Ноябрь 1942",
    "Декабрь 1942",
    "Январь 1943",
    "Февраль 1943",
    "Март 1943",
    "Апрель 1943",
    "Май 1943",
    "Июнь 1943",
    "Июль 1943",
    "Август 1943",
    "Сентябрь 1943",
    "Октябрь 1943",
    "Ноябрь 1943",
    "Декабрь 1943",
    "Январь 1944",
    "Февраль 1944",
    "Март 1944",
    "Апрель 1944",
    "Май 1944",
    "Июнь 1944",
    "Июль 1944",
    "Август 1944",
    "Сентябрь 1944",
    "Октябрь 1944",
    "Ноябрь 1944",
    "Декабрь 1944",
    "Январь 1945",
    "Февраль 1945",
    "Март 1945",
    "Апрель 1945",
    "Май 1945",
  ];

  const dict = new Map();
  timelineDateArray.forEach((el) => {
    dict.set(el, `какие то сведения про дату ${el}`);
  });

  leftDate.textContent = timelineDateArray[0];
  rightDate.textContent = timelineDateArray[47];

  const createTimelineCard = function (el) {
    let randImage = Math.floor(1 + Math.random() * (10 + 1 - 1));
    let randText = Math.floor(1 + Math.random() * (4 + 1 - 1));
    const timelineCard = document.createElement("a");
    timelineCard.className = "timeline-card";
    timelineCard.dataset.date = el[0];
    timelineCard.dataset.index = timelineDateArray.indexOf(el[0]);
    timelineCard.href = "#";
    // timelineCard.style.width = `${15+randText*5}%`;

    const timelineDivImage = document.createElement("div");

    const timelineImage = document.createElement("img");
    timelineImage.src = `images/bg${randImage}.jpg`;
    timelineDivImage.appendChild(timelineImage);
    timelineCard.appendChild(timelineDivImage);

    const timelineDescription = document.createElement("span");
    timelineDescription.className = "timeline-card-description";
    timelineDescription.textContent = (el[1] + " ").repeat(randText);
    timelineCard.appendChild(timelineDescription);

    const timelineLink = document.createElement("span");
    timelineLink.className = "timeline-card-link";
    timelineLink.textContent = "подробнее >>>";
    timelineCard.appendChild(timelineLink);

    timelineContent.appendChild(timelineCard);
  };

  dict.entries().forEach((el) => {
    createTimelineCard(el);
  });

  const inputSlider = (value, userInteraction) => {
    let left = parseInt(value[0] - 1);
    let right = parseInt(value[1] - 1);
    leftDate.textContent = timelineDateArray[left];
    rightDate.textContent = timelineDateArray[right];
    console.log(left, right);
    document.querySelectorAll(".timeline-card").forEach((el) => {
      if (el.dataset.index < left || el.dataset.index > right) {
        // el.classList.add("hidden");
       requestAnimationFrame(() => {
         el.classList.add("hidden");
       });
      } else {
        el.classList.remove("hidden");
      }
    });
  };

  const rangeSliderElement = rangeSlider(rangeSliderContainer, {
    step: "any",
    min: 1,
    max: 48,
    value: [1, 48],
    onInput: inputSlider,
  });

  document.addEventListener("scroll", (e) => {
    console.log(e, e.timeStamp);
  });

  let children = document.querySelectorAll(".width-text");
  for (const child of children) {
    const k = child.computedStyleMap().get("font-size").value / child.getBoundingClientRect().width;

    let observer = new ResizeObserver((mutations) => {
      const containerWidth = mutations[0].contentRect.width;
      console.log(containerWidth);
      child.style.fontSize = k * containerWidth + "px";
      child.style.lineHeight = k * containerWidth + "px";
    });

    observer.observe(document.querySelector(".header-title"));
  }
});

let link = document.querySelector(".to_test")

link.addEventListener("click", (evt) => {
let left_date = document.querySelector(".left-date");
let right_date = document.querySelector(".right-date");
link.href = link.href + `?left_date=${left_date.textContent}&right_date=${right_date.textContent}`
})

