document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function() {
        alert("You clicked " + this.textContent);
    });
});
