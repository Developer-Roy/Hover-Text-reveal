const items = document.querySelectorAll('.item');
const reveal = document.getElementById('reveal');


items.forEach( item => {
    item.addEventListener('mouseenter', () => {
        let name = item.getAttribute("data-name");

        reveal.textContent = name;
        reveal.style.opacity = "1";
        reveal.style.transform = "translateX(-50%) translateY(-50%)";
    });

    item.addEventListener("mouseleave", () => {
        reveal.style.opacity = "0";
        reveal.style.transform = "translateX(-50%) translateY(0)";
    });
});