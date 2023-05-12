const burger_1 = document.querySelector(".burger");
const burger_spans = document.querySelectorAll(".burger button span");
const burger_2 = document.querySelector(".nav_con header nav ul button");
const mobile_nav = document.querySelector(".nav_ul");
const mobile_nav_li = document.querySelectorAll(".nav_ul li");
const sections = document.querySelectorAll(".section");

const handle_submit = (event) => event.preventDefault();

burger_1.addEventListener("click", () => {
  if (mobile_nav.classList[1] == "nav_close") {
    mobile_nav.classList.remove("nav_close");
  }
  mobile_nav.classList.add("nav_open");
});

burger_2.addEventListener("click", () => {
  mobile_nav.classList.remove("nav_open");
  mobile_nav.classList.add("nav_close");
});

mobile_nav_li.forEach((li) => {
  li.addEventListener("click", () => {
    mobile_nav.classList.remove("nav_open");
    mobile_nav.classList.add("nav_close");
  });
});
const options = {
  threshold: 0.5,
};

const check_visibility = (condition, entry) => {
  if (entry.isIntersecting) {
    burger_spans.forEach((span) => {
      if (span.classList[0] == `burger_span_${condition ? 'dark' : 'white'}`) {
        span.classList.remove(`burger_span_${condition ? 'dark' : 'white'}`);
      }
      span.classList.add(`burger_span_${condition ? 'white' : 'dark'}`);
    });
  }
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    let white_span_arr = [1, 4, 8]
    let dark_span_arr = [2, 3, 5, 6, 7, 9]
    white_span_arr.map( arr => {
      if (entry.target.getAttribute("class") == `section_${arr} section`) {
        check_visibility(true, entry);
      }
    })
    dark_span_arr.map( arr => {
      if (entry.target.getAttribute("class") == `section_${arr} section`) {
        check_visibility(false, entry);
      }
    })
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

AOS.init({
  duration: 1000,
});