function decrement() {
    console.log('decrement!!!');

    let quantity = document.getElementById('qty').value;
    let value = Number(quantity);
    if (value > 1) {
        value = value - 1;
    }
    document.getElementById('qty').value = value;
}

function increment() {
    console.log('increment!!!');
    let quantity = document.getElementById('qty').value;
    let value = Number(quantity);
    value = value + 1;
    document.getElementById('qty').value = value;
}

const imageIds = ['thumbnail1', 'thumbnail2', 'thumbnail3', 'thumbnail4'];

function changeImage(num) {
    for(let imageId of imageIds) {
        document.getElementById(imageId).classList.remove('active');
    }

    document.getElementById(`thumbnail${num}`).classList.add('active');
    document.getElementById('main-product-image').src = `./images/image-product-${num}.jpg`
    // src="./images/image-product-1.jpg" alt="" id="main-product-image"

}
