const achievements = [
  {
    id: 1,
    title: "Academical", 
    image: "./academical.png",
    description: "<ul><li>A purpose-built platform designed to support the everyday needs of educators and learners.</li><li>A full stack <b>MERN app, that uses react-pdf plugin</b> helping teachers focus on the content while it <b>converts them to PDFs</b>.</li><li>The <b>created pdfs can be downloaded and assigned to enlisted students</b>. Admins take hold of every action from assigning tasks to managing accounts and content</li>.</ul>",
    tag: "https://tryacademical.onrender.com"
  },
  {
    id: 2,
    title: "Tastebuds", 
    image: "./tastebuds.png",
    description: "<ul><li>A unique food ordering app with a stand-apart idea.</li><li>Built using <b>ExpressJs, MongoDB, Hbs, REST API</b>.</li><li>Customers can customize both the food they order and also the delivery date and time as per their conenience.</li><li>A social problem of hunger is also addressed in a unique way.</li></ul>",
    tag: "https://tastebuds-t0jz.onrender.com/"
  },
  {
    id: 3,
    title: "Mediheal",  
    image: "./mediheal.png",
    description: "<ul><li>A meditational web-app that helps combat daily life stress and negativities.</li><li>Mood is set as per user's choice and content is customized as per the mood.</li><li>Built using <b>HTML, CSS, JavaScript,Facebook API,Twitter API, Whatsapp API and random quote generating API</b>.</li></ul>",
    tag: "https://raj2852.github.io/Mediheal"
  },
  {
    id: 4,
    title: "Safar",    
    image: "./safar.png",
    description: "<ul><li>Safar includes all the infos needed to plan a travel destination included under a single roof so that users don't have to toggle among multiple tabs doing individual search.</li><li>Built using <b>HTML, CSS, JavaScript and Google maps places autosearch and autocomplete API</b>.</li></ul>",
    tag: "https://raj2852.github.io/safar"
  },
];

let activeIndex = 0;
const total = achievements.length;
const stage = document.getElementById("carousel-stage");
const dotsContainer = document.getElementById("pagination-dots");

// 1. Initial Render (Run Once)
function init() {
  achievements.forEach((item, index) => {
    // Create the card
    const card = document.createElement("div");
    card.className = "carousel-card";
    card.id = `card-${index}`;
    card.onclick = () => {
      activeIndex = index;
      update();
    };

    card.innerHTML = `
      <div class="card-image" style="background-image: url('${item.image}')">
      </div>
      <div class="card-content">
        <div class="card-header">
          <h3>${item.title}</h3>
          <a href="${item.tag}" target="_blank" style="text-decoration:"none";"><span class="tag-pill">Visit</span></a>
        </div>
        <p>${item.description}</p>
        
      </div>
    `;
    stage.appendChild(card);

    // Create the dot
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.id = `dot-${index}`;
    dot.onclick = () => {
      activeIndex = index;
      update();
    };
    dotsContainer.appendChild(dot);
  });

  update(); // First placement
}

// 2. The "Update" function (Triggers the smooth transition)
function update() {
  achievements.forEach((_, index) => {
    const card = document.getElementById(`card-${index}`);
    const dot = document.getElementById(`dot-${index}`);

    // Circular Offset Math
    let offset = index - activeIndex;
    if (offset > Math.floor(total / 2)) offset -= total;
    if (offset < -Math.floor(total / 2)) offset += total;

    // Apply classes based on offset
    let positionClass = "hidden";
    if (offset === 0) positionClass = "active";
    else if (offset === -1) positionClass = "left";
    else if (offset === 1) positionClass = "right";
    else if (offset < -1) positionClass = "far-left";
    else if (offset > 1) positionClass = "far-right";

    card.className = `carousel-card ${positionClass}`;
    dot.className = `dot ${index === activeIndex ? "active" : ""}`;
  });
}

// Navigation
const next = () => {
  activeIndex = (activeIndex + 1) % total;
  update();
};
const prev = () => {
  activeIndex = (activeIndex - 1 + total) % total;
  update();
};

document.getElementById("next-btn").onclick = next;
document.getElementById("prev-btn").onclick = prev;

// Keyboard Support
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});

init();
