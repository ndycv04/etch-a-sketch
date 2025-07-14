const container = document.querySelector("#grid-container");

for (let j = 0; j < 16; j++) {
    const parentDiv = document.createElement('div');
    parentDiv.classList.add("parent-div");

    for (let i = 0; i < 16; i++) {
        const childDiv = document.createElement('div');
        childDiv.classList.add("child-div");
        childDiv.style.border = "1px solid black";
        parentDiv.appendChild(childDiv);
    }

    container.appendChild(parentDiv);
}

container.addEventListener('mouseover', (event) => {
    let cell = event.target;

    if (cell.classList.contains("child-div")) {
        cell.classList.add("active");
        changeOpacity(cell);
        cell.style.backgroundColor = getRandomColor();
    }
});

function changeOpacity(div) {
    if (div.classList.contains("active")) {
        let currentOpacity = parseFloat(window.getComputedStyle(div).opacity);
        if (currentOpacity < 1) {
            let newOpacity = Math.min(currentOpacity + 0.1, 1);
            div.style.opacity = newOpacity;
        }
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
