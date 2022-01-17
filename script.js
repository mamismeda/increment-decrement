let incrementButton = document.querySelector(".increment");
let decrementButton = document.querySelector(".decrement");
let inputArea = document.querySelector(".inpy");
let count = 0;

inputArea.innerHTML = count;

const fixIncrement = (el) => {

    count ++ ;
    inputArea.innerHTML = count;
    
};

const fixDecrement = () => {
    if (count !== 0) {
        inputArea.innerHTML = --count;
    }

    // count -- ;
    // inputArea.innerHTML = count;
};

incrementButton.addEventListener("click", fixIncrement);
decrementButton.addEventListener("click", fixDecrement);

