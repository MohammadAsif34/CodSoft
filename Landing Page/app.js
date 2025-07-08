console.log("Welcome to the Codsoft Landing Page!");

const ourCycles = [
  {
    id: "CID01",
    title: "men",
    subTitle:
      "For all the men who seek to blaze through the urban jungle or offbeat paths with confidence and style.",
    bgImg: "./assets/showcase/s1.png",
  },
  {
    id: "CID02",
    title: "women",
    subTitle:
      "Designed for women who embrace freedom, adventure, and elegance on every ride—through city streets or winding trails.",
    bgImg: "./assets/showcase/s2.png",
  },
  {
    id: "CID03",
    title: "kids",
    subTitle:
      "Built for kids ready to explore their world, with safety, fun, and excitement in every turn of the pedal.",
    bgImg: "./assets/showcase/s3.png",
  },
  {
    id: "CID04",
    title: "e-cycle",
    subTitle:
      "For riders who want effortless power, extended journeys, and an eco-friendly way to conquer every mile ahead.",
    bgImg: "./assets/showcase/s4.png",
  },
  {
    id: "CID05",
    title: "hybrid",
    subTitle:
      "Perfectly balanced for those who ride both smooth roads and rough trails—versatile, reliable, and built for all terrains.",
    bgImg: "./assets/showcase/s5.png",
  },
  {
    id: "CID06",
    title: "classic",
    subTitle:
      "Timeless cycles that combine vintage charm with modern features, made for those who value elegance in motion.",
    bgImg: "./assets/showcase/s6.png",
  },
  {
    id: "CID07",
    title: "MTB mountain",
    subTitle:
      "Engineered for mountain adventurers who crave control, durability, and peak performance on steep climbs and tough descents.",
    bgImg: "./assets/showcase/s7.png",
  },
];

const faqs = [
  {
    id: "FAQ01",
    question: "What size cycle should I choose?",
    answer:
      "Cycle size depends on your height and leg inseam. Refer to our sizing chart or visit our store for a perfect fit.",
  },
  {
    id: "FAQ02",
    question: "Do your bikes come with a warranty?",
    answer:
      "Yes, all our bikes come with a standard 1-year warranty on frame and a 6-month warranty on components.",
  },
  {
    id: "FAQ03",
    question: "Are your e-cycles water resistant?",
    answer:
      "Yes, our e-cycles are designed to withstand light rain and splashes, but should not be submerged or pressure washed.",
  },
  {
    id: "FAQ04",
    question: "Can I get my cycle delivered at home?",
    answer:
      "Absolutely! We offer home delivery across major cities. Delivery timelines and charges depend on your location.",
  },
];

const cycles = [
  {
    id: "C001",
    name: "Thunderbolt MTB 26T",
    price: 15999,
    finalPrice: 12999,
    rating: 4.5,
    img: "./assets/cycle/c1.png",
  },
  {
    id: "C002",
    name: "City Rider Hybrid",
    price: 13999,
    finalPrice: 11999,
    rating: 4.3,
    img: "./assets/cycle/c2.png",
  },
  {
    id: "C003",
    name: "Velocity Electric Cycle",
    price: 32999,
    finalPrice: 29999,
    rating: 4.7,
    img: "./assets/cycle/c3.png",
  },
  {
    id: "C004",
    name: "Trail Blazer Kids 20T",
    price: 9999,
    finalPrice: 7999,
    rating: 4.2,
    img: "./assets/cycle/c4.png",
  },
  {
    id: "C005",
    name: "Classic Vintage Cruiser",
    price: 10999,
    finalPrice: 8999,
    rating: 4.4,
    img: "./assets/bg-img-1.png",
  },
  {
    id: "C006",
    name: "Women's Comet Roadster",
    price: 12499,
    finalPrice: 10999,
    rating: 4.6,
    img: "./assets/bg-img-1.png",
  },
];

// cycle showcase
function renderCycles() {
  const bicycles = document.getElementById("bicycles");
  bicycles.innerHTML = ourCycles
    .map(
      (t, idx) => `
        <div class="bicycle-card ${idx === 0 ? "active" : ""}">
          <div class="bg-img">
            <img src="${t.bgImg}" alt="${t.title}"  loading="lazy">
          </div>
          <div class="bicycle-head" style={{background-color:"red}}>
            <p>${t.title}</p>
          </div>
          <div class="bicycle-content">
            <h3>${t.title}</h3>
            <p>${t.subTitle}</p>
            <button>Explore</button>
          </div>
        </div>
      `
    )
    .join("");
  attachClickEvents();
}

function attachClickEvents() {
  const cards = document.querySelectorAll(".bicycle-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
    });
  });
}

// cycle card
function BestSellerCycle() {
  const bs_cycle = document.getElementById("best-seller-container");
  bs_cycle.innerHTML = cycles
    .slice(0, 4)
    .map(
      (t) => `
    <div class="item-card">
    <div class="card-img">
    <img src=${t.img} alt="product image"  loading="lazy">
    </div>
    <div class="card-content">
    <p class="title">${t.name}</p>
    <div class="price">
    <p class="price-tag"><span>MRP</span> <span>${t.finalPrice}</span> <span> ${t.price} </span></p>
    <p class="rating">price is inclusive of taxes<span>${t.rating}/5.0 <i class="bi bi-star-fill"></i></span></p>
    </div>
    <div class="order">
    <button> <i class="bi bi-heart"></i></button>
    <button>add to cart</button>
    <button>order now</button>
    </div>
    </div>
    </div>
    `
    )
    .join("");
}

// FAQ
function FAQs() {
  const faq = document.getElementById("FAQ-container");
  faq.innerHTML = faqs
    .map(
      (t) => `
    <div class="FAQ-item active ">
    <p>${t.question}<span><i class="bi bi-caret-down"></i></span></p>
    <p>${t.answer}</p>
    </div>
    `
    )
    .join("");
}

renderCycles();
BestSellerCycle();
FAQs();
