const data = [
    {
        id: 1,
        name: "Taylor: The Modern Acoustic Innovator",
        img: "Images/Guitar(1).svg",
        price: 10,
        cat: "Classical",
    },

    {
        id: 11,
        name: "PRS: The Boutique Guitar Brand",
        img: "Images/Guitar.svg",
        price: 74,
        cat: "Acoustic",
    },

    {
        id: 2,
        name: "Martin: The Acoustic Standard-Bearer",
        img: "Images/Guitar(2).svg",
        price: 40,
        cat: "Classical",
    },

    {
        id: 3,
        name: "Epiphone: Gibson’s Budget-Friendly Little Brother",
        img: "Images/Guitar(3).svg",
        price: 200,
        cat: "Acoustic",
    },

    {
        id: 4,
        name: "Yamaha: The Hidden Gem",
        img: "Images/Guitar(4).svg",
        price: 86,
        cat: "Electric",
    },

    {
        id: 5,
        name: "Gretsch: The Retro Rocker's Dream",
        img: "Images/Guitar(5).svg",
        price: 97,
        cat: "Base",
    },

    {
        id: 6,
        name: "Fender: The King of Electric Guitars",
        img: "Images/Guitar(6).svg",
        price: 110,
        cat: "Acoustic",
    },

    {
        id: 7,
        name: "Gibson: The Classic Choice",
        img: "Images/Guitar(7).svg",
        price: 230,
        cat: "Electric",
    },

    {
        id: 8,
        name: "Ibanez: The Metalhead’s Choice",
        img: "Images/Guitar(8).svg",
        price: 170,
        cat: "Base",
    },

    {
        id: 9,
        name: "Godin: Blending Tradition with Innovation",
        img: "Images/Guitar(9).svg",
        price: 130,
        cat: "Base",
    },

    {
        id: 10,
        name: "Gibson: The Classic Choice",
        img: "Images/Guitar(8).svg",
        price: 120,
        cat: "Classical",
    },
];

const productsContainer = document.querySelector(".products")
const searchInput = document.querySelector(".search")
const categoriesContainer = document.querySelector(".cats")
const priceRange = document.querySelector(".priceRange")
const priceValue = document.querySelector(".priceValue")

const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map(product =>

        `

            <div class="product">
                <img 
                src=${product.img} 
                alt="">
                <span class="name">${product.name}</span>
                <span class="priceText">${product.price}</span>
            </div>
`

    ).join("");
};

displayProducts(data)


searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if (value) {
        displayProducts(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1))

    } else {
        displayProducts(data);
    }
});


const setCategories = () => {
    const allCats = data.map(item => item.cat);
    const categories = [
        "All",
        ...allCats.filter((item, i) => {
            return allCats.indexOf(item) === i;
        }),
    ];

    categoriesContainer.innerHTML = categories.map(cat =>
        `
     <span class="cat">${cat}</span>
     `
    ).join("");

    categoriesContainer.addEventListener("click", (e) => {
        const selectedCat = e.target.textContent;

        selectedCat === "All"
            ? displayProducts(data)
            : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
};

const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);

    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value;
        displayProducts(data.filter((item) => item.price <= e.target.value));
    });
};


setCategories();
setPrices();