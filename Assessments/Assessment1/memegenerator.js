// function repeatvalue() {
//     var txtName = document.getElementById("memeTop");
//     var lblName = document.getElementById("label");
//     lblName.innerHTML = txtName.value;
// }

// const img = document.createElement("img");
// img.src = "";
// // document.body.appendChild(img);

// var memeForm = document.getElementById("memeform");
// memeForm.addEventListener("submit", function (event) {
//     event.preventDefault()
//     console.log(memeForm)
// })

const imageInput = document.querySelector("#imageInput");
const textTopInput = document.querySelector("#textTopInput");
const textBottomInput = document.querySelector("#textBottomInput");
const canvas = document.querySelector("#meme");

let image;

imageInput.addEventListener("change", () => {
    const imageUrl = URL.createObjectURL(imageInput.
        files[0]);
    //Input create div for image

    image = new Image();
    image.src = imageUrl;

    image.addEventListener("load", () => {
        //Pass in image div
        updateCanvas(canvas, image, textTopInput.value, textBottomInput.value);
    }, { once: true });
});

textTopInput.addEventListener("change", () => {
    updateCanvas(canvas, image, textTopInput.value, textBottomInput.value);
});

textBottomInput.addEventListener("change", () => {
    updateCanvas(canvas, image, textTopInput.value, textBottomInput.value);
});



function updateCanvas(canvas, image, textTop, textBottom) {
    //create canvas tag
    //create delete button
    const context = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width / 10);
    const yOffset = height / 25;

    canvas.width = width;
    canvas.height = height;
    context.drawImage(image, 0, 0);
    context.drawImage(image, 0, 0);
    context.strokeStyle = "black";
    context.lineWidth = Math.floor(fontSize / 4);
    context.fillStyle = "white";
    context.textAlign = "center";
    context.lineJoin = "round";
    context.font = `${fontSize}px Ariel`;

    context.textBaseline = "top";
    context.strokeText(textTop, width / 2, yOffset);
    context.fillText(textTop, width / 2, yOffset);

    context.textBaseline = "bottom";
    context.strokeText(textBottom, width / 2, dheight - yOffset);
    context.fillText(textBottom, width / 2, height - yOffset);

    //append canvas and button to div tag
    //append to memeContainer
}

const deleteButton = document.createElement("BUTTON");
deleteButton.addEventListener("click", function () {
    this.closest("div").remove();
});