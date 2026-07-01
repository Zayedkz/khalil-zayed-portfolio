const buttons = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll("[data-category]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");

    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    cards.forEach((card) => {
      const category = card.getAttribute("data-category");
      card.hidden = filter !== "all" && category !== filter;
    });
  });
});
