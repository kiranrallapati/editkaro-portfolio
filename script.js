// Mobile nav
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Portfolio filter
const filterButtons = document.querySelectorAll(".filter-btn");
const videoCards = document.querySelectorAll(".video-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    videoCards.forEach((card) => {
      const category = card.dataset.category;
      if (filter === "all" || category === filter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Modal preview
const modal = document.getElementById("videoModal");
const modalBackdrop = modal.querySelector(".video-modal-backdrop");
const modalCloseButtons = modal.querySelectorAll("[data-close]");
const iframe = document.getElementById("videoFrame");

videoCards.forEach((card) => {
  card.addEventListener("click", () => {
    const videoUrl = card.dataset.video;
    if (!videoUrl) return;
    iframe.src = videoUrl + "?autoplay=1&rel=0";
    modal.classList.add("open");
  });
});

function closeModal() {
  modal.classList.remove("open");
  iframe.src = "";
}

modalBackdrop.addEventListener("click", closeModal);
modalCloseButtons.forEach((btn) =>
  btn.addEventListener("click", closeModal)
);

// Stop modal with Escape key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Simple contact form handler (front-end only)
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your project brief has been recorded (demo only).");
    form.reset();
  });
}
