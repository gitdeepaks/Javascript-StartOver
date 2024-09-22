const sections = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Section 2",
    content:
      "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
  },

  {
    title: "Section 3",
    content: "Animi amet cumque sint cupiditate officia expedita? Voluptate!",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const accordianContainer = document.querySelector("#accordian");

  sections.forEach((section, index) => {
    const sectionsItem = document.createElement("div");
    sectionsItem.classList.add("accordian-item");

    const sectionsHeader = document.createElement("div");
    sectionsHeader.classList.add("accordian-header");
    sectionsHeader.textContent = section.title;

    const sectionsContent = document.createElement("div");
    sectionsContent.classList.add("accordian-content");
    sectionsContent.innerHTML = `<p>${section.content}</p>`;

    sectionsItem.appendChild(sectionsHeader);
    sectionsItem.appendChild(sectionsContent);
    accordianContainer.appendChild(sectionsItem);

    if (index === 0) {
      sectionsItem.classList.add("active");
      sectionsContent.style.display = "block";
    }
  });

  accordianContainer.addEventListener("click", function (event) {
    const header = event.target.closest(".accordian-header");
    if (!header) return;

    const sectionsItem = header.parentNode;
    const content = sectionsItem.querySelector(".accordian-content");
    const isActive = sectionsItem.classList.contains("active");

    document.querySelectorAll(".accordian-item").forEach(function (item) {
      item.classList.remove("active");
      item.querySelector(".accordian-content").style.display = "none";
    });
    if (!isActive) {
      sectionsItem.classList.add("active");
      content.style.display = "block";
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const accordianContainer = document.querySelector("#accordian");

//   sections.forEach((section) => {
//     accordianContainer.innerHTML += `<details>
//     <summary>${section.title}</summary>
//     <p>${section.content}</p>
//     </details>`;
//   });
// });
