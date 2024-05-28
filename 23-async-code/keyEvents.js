const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML`
        <div class="color">
            ${e.key === " " ? "Space" : e.key}
            ${e.keyCode}
            ${e.code}
        <div>
    
    `;
});
