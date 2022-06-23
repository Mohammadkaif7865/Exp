const url = "https://amazoncloneserver.herokuapp.com/products";
const getImages = async() => {
    let response = await fetch(url);
    let data = await response.json();
    data.map((item) => {
        let element = document.createElement('div');
        element.classList.add('imgCard');
        let picCont = document.createElement('img');
        picCont.classList.add('imgInCard');
        picCont.src = item.images.img1.link;
        picCont.alt = "img";
        picCont.title = item.name;
        let description = document.createElement('div');
        description.classList.add('dis');
        description.innerHTML = item.name;
        let rating = document.createElement('div');
        rating.classList.add('rating');
        rating.innerHTML = `Rating : ${item.rating} `;
        let star = document.createElement('i');
        star.classList.add('bi', 'bi-star-fill', 'colorGold');
        rating.appendChild(star);
        let price = document.createElement('div');
        price.classList.add('price');
        price.innerHTML = `Price : ₹ ${item.cost}`;
        element.appendChild(picCont);
        element.appendChild(description);
        element.appendChild(rating);
        element.appendChild(price);
        document.getElementById('itemLoader').appendChild(element);

    });
}
getImages();
//small progress is done
// let element = document.createElement('img');
// element.classList.add('imgCard');
// element.src = item.images.img1.link;
// element.alt = "img";
// element.title = item.name;
// document.getElementById('imageLoader').appendChild(element);