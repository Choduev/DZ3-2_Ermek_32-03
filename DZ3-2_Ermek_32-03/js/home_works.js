// dz 1.1

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._-]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'ОК'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}
// dz 1.2

// const parentBlock = document.querySelector('.parent_block');
// const childBlock = document.querySelector('.child_block');
// let position = 0;
//
// function moveRight() {
//     if (position < parentBlock.offsetWidth - childBlock.offsetWidth) {
//         position++;
//         childBlock.style.left = `${position}px`
//         setTimeout(moveRight, 10)
//     }
// }
//
// moveRight()


// dz 2.1

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');

let positionX = 0;
let positionY = 0;
let direction = 'right'
let stopped = false

function moveInsideSquare() {
    const speed = 2

    if (!stopped) {
        switch (direction) {
            case 'right':
                positionX += speed
                if (positionX + childBlock.offsetWidth >= parentBlock.offsetWidth) {
                    positionX = parentBlock.offsetWidth - childBlock.offsetWidth
                    direction = 'down'
                }
                break
            case 'down':
                positionY += speed
                if (positionY + childBlock.offsetHeight >= parentBlock.offsetHeight) {
                    positionY = parentBlock.offsetHeight - childBlock.offsetHeight
                    direction = 'left'
                }
                break
            case 'left':
                positionX -= speed
                if (positionX <= 0) {
                    positionX = 0
                    direction = 'up'
                }
                break
            case 'up':
                positionY -= speed
                if (positionY <= 0) {
                    positionY = 0
                    direction = 'right'
                }
                break
        }

        childBlock.style.left = `${positionX}px`
        childBlock.style.top = `${positionY}px`

        requestAnimationFrame(moveInsideSquare)
    }
}
if (positionX >= 200) {
    stopped = true
}

moveInsideSquare()

// dz 2.2

const intervalDisplay = document.querySelector(".interval")
const startButton = document.querySelector("#start")
const stopButton = document.querySelector("#stop")
const resetButton = document.querySelector("#reset")

let seconds = 0
let intervalId

function updateDisplay() {
    intervalDisplay.textContent = seconds
}

function startTimer() {
    intervalId = setInterval(function () {
        seconds++
        updateDisplay()
    }, 1000)

    startButton.disabled = true
    stopButton.disabled = false
}

function stopTimer() {
    clearInterval(intervalId)
    startButton.disabled = false
    stopButton.disabled = true
}

function resetTimer() {
    stopTimer()
    seconds = 0
    updateDisplay()
}

startButton.addEventListener("click", startTimer)
stopButton.addEventListener("click", stopTimer)
resetButton.addEventListener("click", resetTimer)



