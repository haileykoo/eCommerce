/******* GLOABL VARIABLES/DATA ********/
const shoppingCart = [
    {itemsid:101, qty:1}
];

const items = [
    { //0
        id: 101,
        name: `Saint Eau de Parfum`,
        image: `https://www.sephora.com/productimages/sku/s1957216-main-zoom.jpg`,
        description: `Meet Saint—soft, alluring, and dreamy, this gourmand fragrance sweetens a bouquet of jasmine and tiaré flower with notes of mandarin, caramel, and sparkling Mirabelle plum.`,
        price: `69.00`,
        quantity: 50,
        category: `Eau de Parfum Spray`,
        scents: `Floral`,
        size: 100,
        brand: `KAT VON D`,
        review: 5
    }, { //1
        id: 102,
        name: `Flowerbomb`,
        image: `https://www.sephora.com/productimages/sku/s1377159-main-zoom.jpg`,
        description: `Deep amber, woody, and patchouli notes combine with warm vanilla and praline notes to complete a truly addictive fragrance.`,
        price: `199.00`,
        quantity: 0,
        category: `Eau de Parfum Spray`,
        scents: `Spicy`,
        size: 100,
        brand: `VIKTOR&ROLF`,
        review: 2
    }, { //2
        id: 103,
        name: `Black Opium`,
        image: `https://www.sephora.com/productimages/sku/s1688852-main-zoom.jpg`,
        description: `Black Opium is the highly addictive feminine fragrance from Yves Saint Laurent.`,
        price: `162.00`,
        quantity: 30,
        category: `Eau de Parfum Spray`,
        scents: `Spicy`,
        size: 90,
        brand: `YVES SAINT LAURENT`,
        review: 3.5
    }, { //3
        id: 104,
        name: `REPLICA’ By The Fireplace`,
        image: `https://www.sephora.com/productimages/sku/s1788058-main-zoom.jpg`,
        description: `These notes combine to make this Maison Margiela perfume the ultimate unisex cologne.`,
        price: `159.00`,
        quantity: 10,
        category: `Eau de Parfum Spray`,
        scents: `Warm`,
        size: 100,
        brand: `MAISON MARGIELA`,
        review: 4.2
    }, { //4
        id: 105,
        name: `Not A Perfume`,
        image: `https://www.sephora.com/productimages/sku/s1703321-main-zoom.jpg`,
        description: `This minimalist, fresh, and clean fragrance is hypoallergenic and ideal for those who don’t normally wear perfume.`,
        price: `154.00`,
        quantity: 50,
        category: `Eau de Parfum Spray`,
        scents: `Woody`,
        size: 100,
        brand: `JULIETTE HAS A GUN`,
        review: 4.9
    }, { //5
        id: 106,
        name: `Bright Crystal`,
        image: `https://www.sephora.com/productimages/sku/s1063619-main-zoom.jpg`,
        description: `Bright Crystal is a fresh, sensual blend of refreshing chilled yuzu and pomegranate mingled with soothing blossoms of peony, magnolia, and lotus flower, warmed with notes of musk and amber.`,
        price: `126.00`,
        quantity: 40,
        category: `Eau de Toilette Spray`,
        scents: `Floral`,
        size: 90,
        brand: `VERSACE`,
        review: 3.2
    }, { //6
        id: 107,
        name: `Daisy`,
        image: `https://www.sephora.com/productimages/sku/s1029941-main-zoom.jpg`,
        description: `Charmingly simple with a signature quality, Daisy Marc Jacobs transports you to a place that’s optimistic, beautiful, and pure.`,
        price: `98.00`,
        quantity: 20,
        category: `Eau de Toilette Spray`,
        scents: `Floral`,
        size: 50,
        brand: `MARC JACOBS FRAGRANCES`,
        review: 3.8
    }, { //8
        id: 109,
        name: `REPLICA’ By The Fireplace Travel Spray`,
        image: `https://www.sephora.com/productimages/sku/s2047629-main-zoom.jpg`,
        description: `By the Fireplace is a warm and spicy fragrance that evokes the comforting sensation of a crackling fireplace beside a frosted winter landscape with enveloping notes of clove, chestnut, and vanilla accord.`,
        price: `38.00`,
        quantity: 33,
        category: `Eau de Toilette Travel Spray`,
        scents: `Warm`,
        size: 10,
        brand: `MAISON MARGIELA`,
        review: 2.2
    }, { //9
        id: 110,
        name: `REPLICA’ By The Fireplace Travel Spray`,
        image: `https://www.sephora.com/productimages/sku/s1838234-main-zoom.jpg`,
        description: `Dressed in a dazzling shade of emerald green, the crystalline flacon of Divine Decadence celebrates a new facet of Marc Jacobs' iconic handbag, the ultimate luxury accessory.`,
        price: `120.00`,
        quantity: 30,
        category: `Eau de Parfum Spray`,
        scents: `Earthy`,
        size: 50,
        brand: `MARC JACOBS FRAGRANCES`,
        review: 1
    }, { //10
        id: 111,
        name: `Amazing Grace Eau de Toilette`,
        image: `https://www.sephora.com/productimages/sku/s607689-main-zoom.jpg`,
        description: `Embrace your beauty and express your femininity with Amazing Grace Eau de Toilette.`,
        price: `65.00`,
        quantity: 100,
        category: `Eau de Toilette Spray`,
        scents: `Floral`,
        size: 60,
        brand: `PHILOSOPHY`,
        review: 4.4
    }, { //11
        id: 112,
        name: `Flowerbomb Nectar`,
        image: `https://www.sephora.com/productimages/sku/s2042984-main-zoom.jpg`,
        description: `A sensual blend of bewitching flowers, flowerbomb nectar completes the flowerbomb collection. `,
        price: `156.00`,
        quantity: 20,
        category: `Eau de Parfum Spray`,
        scents: `Warm`,
        size: 50,
        brand: `VIKTOR&ROLF`,
        review: 2.9
    }, { //12
        id: 113,
        name: `REPLICA Under the Lemon Trees Eau de Toilette`,
        image: `https://www.sephora.com/productimages/sku/s2177996-main-zoom.jpg`,
        description: `This fragrance for women and men is a dreamy blend of kalamansi lime, green tea, citrus and soft musk perfumes.`,
        price: `159.00`,
        quantity: 70,
        category: `Eau de Parfum Spray`,
        scents: `Fresh`,
        size: 100,
        brand: `MAISON MARGIELA`,
        review: 3
    }, { //13
        id: 114,
        name: `Amazing Grace Ballet Rose Eau de Toilette`,
        image: `https://www.sephora.com/productimages/sku/s2039006-main-zoom.jpg`,
        description: `Introducing Amazing Grace Ballet Rose, which is inspired by the delicate scent of pink rose petals opening at first bloom and the beautiful femininity of philosophy’s bestselling Amazing Grace fragrance.`,
        price: `65.00`,
        quantity: 7,
        category: `Eau de Toilette Spray`,
        scents: `Floral`,
        size: 60,
        brand: `PHILOSOPHY`,
        review: 3.3
    }, { //14
        id: 115,
        name: `Blackberry & Bay Cologne`,
        image: `https://www.sephora.com/productimages/sku/s1946706-main-zoom.jpg`,
        description: `This fragrance evokes childhood memories of blackberry picking—a burst of deep, tart blackberry juice blends with the freshness of just-gathered bay and brambly woods for a vibrant and verdant impression.`,
        price: `184.00`,
        quantity: 20,
        category: `Spray`,
        scents: `Fresh`,
        size: 100,
        brand: `JO MALONE LONDON`,
        review: 4.5
    }, { //15
        id: 116,
        name: `Red Roses Cologne`,
        image: `https://www.sephora.com/productimages/sku/s2006021-main-zoom.jpg`,
        description: `Inspired by a voluptuous blend of seven of the world's most exquisite roses, this fragrance captures the essence of modern romance. `,
        price: `184.00`,
        quantity: 90,
        category: `Spray`,
        scents: `Floral`,
        size: 100,
        brand: `JO MALONE LONDON`,
        review: 1.8
    }, { //16
        id: 117,
        name: `Oud Wood Travel Spray`,
        image: `https://www.sephora.com/productimages/sku/s2101350-main-zoom.jpg`,
        description: `Oud wood is one of the most rare, precious, and expensive ingredients in a perfumer’s arsenal.`,
        price: `75.00`,
        quantity: 9,
        category: `Eau de Toilette Travel Spray`,
        scents: `Earthy`,
        size: 10,
        brand: `TOM FORD`,
        review: 4.1
    }, { //17
        id: 118,
        name: `Alien Travel Spray`,
        image: `https://www.sephora.com/productimages/sku/s2103190-main-zoom.jpg`,
        description: `Alien is a floral-woody-amber fragrance that borders the realms of spirituality and sensuality. It exudes a positive energy, charged with sensual and intriguing mystery.`,
        price: `39.00`,
        quantity: 90,
        category: `Eau de Toilette Travel Spray`,
        scents: `Floral`,
        size: 10,
        brand: `MUGLER`,
        review: 3.2
    }, { //18
        id: 119,
        name: `Lost Cherry`,
        image: `https://www.sephora.com/productimages/sku/s2251148-main-zoom.jpg`,
        description: `Black Cherry’s ripe flesh dripping in cherry liqueur glistens with a teasing touch of bitter almond.`,
        price: `535.00`,
        quantity: 2,
        category: `Eau de Parfum Spray`,
        scents: `Warm`,
        size: 100,
        brand: `TOM FORD`,
        review: 2.3
    }, { //19
        id: 120,
        name: `Vert d’Encens`,
        image: `https://www.sephora.com/productimages/sku/s1855527-main-zoom.jpg`,
        description: `The unbridled nature of the Corsican Coast, known as "the perfumed isle", inspires this distinguished scent’s sophisticated, aromatic, and wild side.`,
        price: `725.00`,
        quantity: 1,
        category: `Eau de Parfum Decanter`,
        scents: `Spicy`,
        size: 250,
        brand: `TOM FORD`,
        review: 4.3
    }, { //20
        id: 121,
        name: `Donna Born In Roma Eau de Parfum`,
        image: `https://www.sephora.com/productimages/sku/s2249712-main-zoom.jpg`,
        description: `The couture elegance is made of three qualities of jasmine which bring a luxurious femininity when blended with vanilla bourbon, the most expensive extract in the world.`,
        price: `39.00`,
        quantity: 15,
        category: `Eau de Parfum Spray`,
        scents: `Floral`,
        size: 10,
        brand: `VALENTINO`,
        review: 3.1
    }
];


/************* FUNCTIONS *************/
const addItemToCart = courseid => {
  
    const cartItem = shoppingCart.find(item => item.courseid == courseid);
  
    if (cartItem) {  // if a cartItem was found
      cartItem.qty++;
    } else {
      shoppingCart.push({courseid: courseid, qty: 1});
    }
}



// EVENT HANDLER FUNCTIONS **************
const loadItemByNameandBrand = event => {

    const whatToSearch = document.getElementById('itemSearch').value;
    console.log(whatToSearch)
    const cleanVersion = whatToSearch.trim().toLowerCase();
  
    const resultsFromSearch = items.filter(c => c.name.toLowerCase().includes(cleanVersion) || c.brand.toLowerCase().includes(cleanVersion));
    renderItemsFromArray(resultsFromSearch);
  }

const itemsByOrder = event => {
    console.log(event.target.value)
  
    let sorteditems;
  
    if (event.target.value == 'priceAsc') {
        // Smallest to largest
        sorteditems = items.slice().sort((a, b) => a.price - b.price);
    } else if (event.target.value == 'priceDesc') {
        // Largest to smallest
        sorteditems = items.slice().sort((a, b) => b.price - a.price);
    } else if (event.target.value == 'nameAsc') {
        // Largest to smallest
        sorteditems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (event.target.value == 'nameDesc') {
        // Largest to smallest
        sorteditems = items.slice().sort((a, b) => b.name.localeCompare(a.name));
    } else if (event.target.value == 'bestSelling') {
        // Best Sellings
        sorteditems = items.slice().sort((a, b) => a.price - b.price);
    } else if (event.target.value == 'topRated') {
        // Highest customer reviews
        sorteditems = items.slice().sort((a, b) => a.review - b.review);
    }else {
      return;
    }
    renderItemsFromArray(sorteditems);
}

/*
const itemsBySize = event => {
  
    let size;
  
    if (document.getElementById("size-regular").checked) {
        // items > 20ml
        size = items.filter(items => items.size>20);
    } else if (document.getElementById("size-mini").checked) {
        // items < 20ml
        size = items.filter(items => items.size<20);
    } else {
        return;
    }
    renderItemsFromArray(size);
}
*/


const itemsByBrand = event => {
    let brands;
  
    if (document.getElementById("kat").checked) {
        brands = items.filter(items => items.brand == `KAT VON D`);
    } else if (document.getElementById("vik").checked) {
        brands = items.filter(items => items.brand == `VIKTOR&ROLF`);
    } else if (document.getElementById("yve").checked) {
        brands = items.filter(items => items.brand == `YVES SAINT LAURENT`);
    } else if (document.getElementById("mai").checked) {
        brands = items.filter(items => items.brand == `MAISON MARGIELA`);
    } else if (document.getElementById("jul").checked) {
        brands = items.filter(items => items.brand == `JULIETTE HAS A GUN`);
    } else if (document.getElementById("ver").checked) {
        brands = items.filter(items => items.brand == `VERSACE`);
    } else if (document.getElementById("mar").checked) {
        brands = items.filter(items => items.brand == `MARC JACOBS FRAGRANCES`);
    } else if (document.getElementById("phi").checked) {
        brands = items.filter(items => items.brand == `PHILOSOPHY`);
    } else if (document.getElementById("jo").checked) {
        brands = items.filter(items => items.brand == `JO MALONE LONDON`);
    } else if (document.getElementById("tom").checked) {
        brands = items.filter(items => items.brand == `TOM FORD`);
    } else if (document.getElementById("mug").checked) {
        brands = items.filter(items => items.brand == `MUGLER`);
    } else if (document.getElementById("val").checked) {
        brands = items.filter(items => items.brand == `VALENTINO`);
    } else {
      return;
    }
    renderItemsFromArray(brands);
}

const itemsByScent = event => {
    debugger;
    console.log('clicked')
    let scents;
  
    if (document.getElementById("floral").checked) {
        scents = items.filter(items => items.scents == `Floral`);
    } else if (document.getElementById("spicy").checked) {
        scents = items.filter(items => items.scents == `Spicy`);
    } else if (document.getElementById("warm").checked) {
        scents = items.filter(items => items.scents == `Warm`);
    } else if (document.getElementById("woody").checked) {
        scents = items.filter(items => items.scents == `Woody`);
    } else if (document.getElementById("earthy").checked) {
        scents = items.filter(items => items.scents == `Earthy`);
    } else if (document.getElementById("fresh").checked) {
        scents = items.filter(items => items.scents == `Fresh`);
    } else {
      return;
    }
    console.log(scents, document.getElementById(`floral`))
    renderItemsFromArray(scents);
}

// FUNCTIONS THAT BUILD OUR VIEW **************
const getItemsAsHtmlString = items => {
    let callout = ``;
    let soldout = ``;
    if (items.quantity <= 0) {
      callout = ``;
      soldout = `soldout`;
      register = ``;
    } else if (items.quantity < 50 && items.quantity >0) {
      callout = `<small class="callout urgent">Limited Stock</small>`;
    }

    return `
        <article>
        <img src="${items.image}" alt="">
        <div class="text">
          <h3> ${items.name} </h3> 
          <p> ${soldout} ${callout} </p>
          <p> ${items.brand}</p>
          <p> ${items.description}</p>
          <p> ${items.size} ml</p>
          <p> ${items.category}</p>
          <p> $${items.price}</p>
          <a class="btn btn-primary btn-block">Add to cart</a>
        </div>
        </article>`;
}

const renderItemsFromArray = arr => {
    if (arr.length > 0) {
        document.getElementById('items').innerHTML = arr.map(getItemsAsHtmlString).join('\n');
    } else {
        document.getElementById('items').innerHTML = `Sorry, no matching results.`
    }
    document.getElementById('numResults').innerHTML = `(${arr.length} ${(arr.length == 1) ? 'result' : 'results'})`; // Display number of total results
}

/************* EXECUTABLE *************/
window.addEventListener('load', () => {
    document.getElementById('itemSearch').addEventListener('input', loadItemByNameandBrand);
    document.getElementById('sortOrder').addEventListener('change', itemsByOrder);
    // document.getElementById('size-regular').addEventListener('click', itemsBySize);
    // document.getElementById('size-mini').addEventListener('click', itemsBySize);
    document.getElementById('brand').addEventListener('click', itemsByBrand);
    document.getElementById('scents').addEventListener('click', itemsByScent);
    renderItemsFromArray(items);
});



/****** DROPDOWN MENU */
document.getElementById('dropdown-btn').addEventListener ('click', event => 
{
    document.getElementById('inside-menu').classList.toggle('open');
});