document.addEventListener("DOMContentLoaded", function () {
  const faqs = document.querySelectorAll(".faq");
  const searches = document.querySelectorAll(".search");

  faqs.forEach(faq => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });

  searches.forEach(search => {
    search.addEventListener("click", () => {
      search.classList.toggle("active");
    });
  });
});

document.getElementById('logo').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});