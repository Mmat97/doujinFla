// ============================
// FIREBASE IMPORTS
// ============================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  increment 
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// ============================
// FIREBASE CONFIG
// ============================
const firebaseConfig = {
  apiKey: "AIzaSyA3TPLeIVhSgPClBcF0Y_IztKJqTYVZWJc",
  authDomain: "doujinflash.firebaseapp.com",
  projectId: "doujinflash",
  storageBucket: "doujinflash.firebasestorage.app",
  messagingSenderId: "758136407006",
  appId: "1:758136407006:web:4d7a40d9bcdff4fca0134f",
  measurementId: "G-6G8VQ2LBKJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ============================
// GALLERY DATA
// ============================
// Example: replace with full converted LIST.txt data
const galleryData = {
  "Isekai Smartphone": [
    { url: "https://www.patreon.com/posts/defeated-by-zako-123920788", subgenre: "feet/dream/harem" },
    { url: "https://www.patreon.com/posts/defeated-by-zako-124092807", subgenre: "motherDaughter/bath" },
    { url: "https://www.patreon.com/posts/royal-127866137", subgenre: "milfs/beach" },
    { url: "https://www.patreon.com/posts/harem-switch-133782770", subgenre: "crossover/brainwashing/harem" },
    { url: "https://www.patreon.com/posts/in-another-world-115302353", subgenre: "evilGuy/powerDrain" },
    { url: "https://www.patreon.com/posts/isekai-2-5-138342705", subgenre: "grunts/olderFemales" },
    { url: "https://www.patreon.com/posts/isekai-alternate-136385040", subgenre: "milfs/imposters" }
  ],
  "Spirit Chronicles": [
    { url: "https://www.patreon.com/posts/defeated-by-113020062", subgenre: "interrogation/rematch" },
    { url: "https://www.patreon.com/posts/rio-and-3-armies-115877764", subgenre: "dream/imposters" },
    { url: "https://www.patreon.com/posts/liselottes-honey-120002486", subgenre: "feet/seduction" }
  ],
  "Maid Dragon": [
    { url: "https://www.patreon.com/posts/new-doujinshi-140518041", subgenre: "imposters/rematch" }
  ],
  "Musaigen no Phantom World": [
    { url: "https://www.patreon.com/posts/haruhiko-x-x-111367831", subgenre: "harem" }
  ],
  "Tsugumomo": [
    { url: "https://www.patreon.com/posts/tsugualbum-115118952", subgenre: "romance/brainwashing" }
  ],
  "Knight's & Magic": [
    { url: "https://www.patreon.com/posts/breasts-and-120933745", subgenre: "evilGirl/blackmailedFemale" }
  ]
  // continue adding other sections here...
};

// ============================
// BUILD SECTIONS
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.getElementById("library-container");

  Object.keys(galleryData).forEach(genreName => {
    // ----- Section -----
    const section = document.createElement("section");
    section.classList.add("genre");
    section.dataset.genre = genreName;

    // ----- Header -----
    const header = document.createElement("div");
    header.classList.add("genre-header");

    const leftSide = document.createElement("div");
    leftSide.classList.add("left-side");

    const heartBtn = document.createElement("button");
    heartBtn.classList.add("heart-btn");
    heartBtn.textContent = "🤍";

    const voteCount = document.createElement("p");
    voteCount.classList.add("vote-count");
    voteCount.innerHTML = 'Votes: <span>0</span>';

    leftSide.appendChild(heartBtn);
    leftSide.appendChild(voteCount);

    const h2 = document.createElement("h2");
    h2.textContent = genreName;

    header.appendChild(leftSide);
    header.appendChild(h2);
    section.appendChild(header);

    // ----- Carousel -----
    const carouselContainer = document.createElement("div");
    carouselContainer.classList.add("carousel-container");

    const leftArrow = document.createElement("button");
    leftArrow.classList.add("arrow", "left");
    leftArrow.textContent = "⬅";

    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    const rightArrow = document.createElement("button");
    rightArrow.classList.add("arrow", "right");
    rightArrow.textContent = "➡";

    carouselContainer.appendChild(leftArrow);
    carouselContainer.appendChild(carousel);
    carouselContainer.appendChild(rightArrow);
    section.appendChild(carouselContainer);
    mainContainer.appendChild(section);

    // ----- Voting system -----
    const docRef = doc(db, "votes", genreName);
    const votedKey = "voted_" + genreName;

    async function loadVotes() {
      try {
        const snap = await getDoc(docRef);
        voteCount.querySelector("span").textContent = snap.exists() ? snap.data().count : 0;
        if (!snap.exists()) await setDoc(docRef, { count: 0 });
      } catch (e) { console.error("Error loading votes:", e); }
    }

    function checkLocalVote() {
      if (localStorage.getItem(votedKey)) heartBtn.textContent = "❤️";
    }

    heartBtn.addEventListener("click", async () => {
      try {
        const hasVoted = localStorage.getItem(votedKey);
        if (hasVoted) {
          await updateDoc(docRef, { count: increment(-1) });
          localStorage.removeItem(votedKey);
          heartBtn.textContent = "🤍";
        } else {
          await updateDoc(docRef, { count: increment(1) });
          localStorage.setItem(votedKey, "true");
          heartBtn.textContent = "❤️";
        }
        loadVotes();
      } catch (e) { console.error("Error updating vote:", e); }
    });

    loadVotes();
    checkLocalVote();

    // ----- Populate carousel items -----
    galleryData[genreName].forEach(itemData => {
      const fileName = itemData.url.split("/").pop();
      const item = document.createElement("div");
      item.classList.add("carousel-item");

      const img = document.createElement("img");
      img.src = `./images/${fileName}.jpg`;
      img.onerror = function() {
        this.onerror = null;
        this.src = `./images/${fileName}.png`;
        this.onerror = function() { this.src = `./images/${fileName}.webp`; };
      };
      img.onclick = () => window.open(itemData.url, "_blank");

      item.appendChild(img);

      // Subgenre label
      if (itemData.subgenre) {
        const subgenreP = document.createElement("p");
        subgenreP.classList.add("subgenre");
        subgenreP.textContent = itemData.subgenre;
        item.appendChild(subgenreP);
      }

      carousel.appendChild(item);
    });

    // ----- Carousel arrows & swipe support -----
    function getVisibleItems() {
      const item = carousel.querySelector(".carousel-item");
      if (!item) return 1;
      const itemWidth = item.offsetWidth + 10; // include gap
      return Math.floor(carousel.offsetWidth / itemWidth) || 1;
    }

    leftArrow.addEventListener("click", () => {
      const visibleItems = getVisibleItems();
      const itemWidth = carousel.querySelector(".carousel-item").offsetWidth + 10;
      carousel.scrollBy({ left: -(itemWidth * visibleItems), behavior: "smooth" });
    });

    rightArrow.addEventListener("click", () => {
      const visibleItems = getVisibleItems();
      const itemWidth = carousel.querySelector(".carousel-item").offsetWidth + 10;
      carousel.scrollBy({ left: itemWidth * visibleItems, behavior: "smooth" });
    });

    // Swipe support
    let xStart = null;
    carousel.addEventListener("touchstart", e => xStart = e.touches[0].clientX, false);
    carousel.addEventListener("touchmove", e => {
      if (!xStart) return;
      let xEnd = e.touches[0].clientX;
      let xDiff = xStart - xEnd;
      const visibleItems = getVisibleItems();
      const itemWidth = carousel.querySelector(".carousel-item").offsetWidth + 10;

      if (xDiff > 50) {          // swipe left
        carousel.scrollBy({ left: itemWidth * visibleItems, behavior: "smooth" });
      } else if (xDiff < -50) {  // swipe right
        carousel.scrollBy({ left: -(itemWidth * visibleItems), behavior: "smooth" });
      }
      xStart = null;
    }, false);

  }); // end of Object.keys().forEach
}); // end of DOMContentLoaded
