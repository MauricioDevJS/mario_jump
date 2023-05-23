const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
    mario.classList.add("jump");

    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = window
        .getComputedStyle(mario)
        .bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./images/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
    }
}, 10);

// Verificar se o dispositivo suporta eventos de toque
const supportsTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;

// Adicionar event listener apropriado com base no suporte a toque
if (supportsTouch) {
    document.addEventListener("touchstart", jump);
} else {
    document.addEventListener("keydown", jump);
}
