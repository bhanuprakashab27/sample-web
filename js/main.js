function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("show");
}

// slider only if exists
const slides = document.getElementById("slides");
if(slides){
  let index = 0;
  const totalSlides = slides.children.length;

  function showSlide(){
    slides.style.transform = `translateX(-${index*100}%)`;
  }

  window.nextSlide = function(){
    index = (index+1) % totalSlides;
    showSlide();
  }

  window.prevSlide = function(){
    index = (index-1+totalSlides) % totalSlides;
    showSlide();
  }

  setInterval(nextSlide,4000);
}

// What we offer

let offerIndex = 0;
autoOffer();

function showOffer(index) {

  const tabs = document.querySelectorAll(".offer-tab");
  const boxes = document.querySelectorAll(".offer-box");
  const container = document.querySelector(".offer-tabs");

  if (!tabs.length || !boxes.length) return;

  tabs.forEach(t => t.classList.remove("active"));
  boxes.forEach(b => b.classList.remove("active"));

  if (tabs[index] && boxes[index]) {

    tabs[index].classList.add("active");
    boxes[index].classList.add("active");

    offerIndex = index;

    // ✅ Only scroll horizontally on mobile
    if (window.innerWidth <= 768) {

      const tab = tabs[index];

      const scrollPosition =
        tab.offsetLeft -
        (container.offsetWidth / 2) +
        (tab.offsetWidth / 2);

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  }
}

function autoOffer(){
  const total = document.querySelectorAll(".offer-tab").length;

  setInterval(()=>{
    offerIndex++;
    if(offerIndex >= total) offerIndex = 0;
    showOffer(offerIndex);
  },6000);
}

// admission process

 const steps = document.querySelectorAll(".step");
  const progressFill = document.querySelector(".progress-fill");

  let currentStep = 0;

  function activateStep() {
    if (currentStep < steps.length) {
      steps[currentStep].classList.add("active");
      progressFill.style.height = 
        ((currentStep + 1) / steps.length) * 100 + "%";
      currentStep++;
    }
  }

  setInterval(activateStep, 1000);


  // gallery with filter


// const buttons = document.querySelectorAll(".filter-btn");
// const items = document.querySelectorAll(".gallery-item");

// buttons.forEach(btn => {
//   btn.addEventListener("click", () => {

//     document.querySelector(".filter-btn.active").classList.remove("active");
//     btn.classList.add("active");

//     const filter = btn.getAttribute("data-filter");

//     items.forEach(item => {
//       if (filter === "all" || item.getAttribute("data-category") === filter) {
//         item.style.display = "block";
//       } else {
//         item.style.display = "none";
//       }
//     });

//   });
// });

// toast msg for contact

const form = document.querySelector("form");
  const toast = document.getElementById("toast");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        showToast();
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch(error => {
      alert("Error sending message.");
    });
  });

  function showToast() {
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }









