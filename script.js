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
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// ============================
// GALLERY DATA
// ============================
const galleryData = {
  "Isekai Smartphone": [
    { url: "https://www.patreon.com/posts/defeated-by-zako-123920788", subgenre: "feet/dream/harem" },
    { url: "https://www.patreon.com/posts/defeated-by-zako-124092807", subgenre: "motherDaughter/bath" },
    { url: "https://www.patreon.com/posts/royal-127866137", subgenre: "milfs/beach" }
  ],
  "Spirit Chronicles": [
    { url: "https://www.patreon.com/posts/defeated-by-113020062", subgenre: "interrogation/rematch" }
  ]
};

// ============================
// BUILD SECTIONS
// ============================
document.addEventListener("DOMContentLoaded", () => {
  const mainContainer = document.getElementById("library-container");

  Object.keys(galleryData).forEach(genreName => {
    const section = document.createElement("section");
    section.classList.add("genre");
    section.dataset.genre = genreName;

    // Header
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

    // Carousel
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

    // Voting
    const votedKey = "voted_" + genreName;

    async function loadVotes() {
      try {
        const docRef = db.collection("votes").doc(genreName);
        const snap = await docRef.get();
        voteCount.querySelector("span").textContent = snap.exists ? snap.data().count : 0;
        if (!snap.exists) await docRef.set({ count: 0 });
      } catch (e) {
        voteCount.querySelector("span").textContent = 0;
      }
    }

    function checkLocalVote() {
      if (localStorage.getItem(votedKey)) heartBtn.textContent = "❤️";
    }

    heartBtn.addEventListener("click", async () => {
      try {
        const docRef = db.collection("votes").doc(genreName);
        if (localStorage.getItem(votedKey)) {
          await docRef.update({ count: firebase.firestore.FieldValue.increment(-1) });
          localStorage.removeItem(votedKey);
          heartBtn.textContent = "🤍";
        } else {
          await docRef.update({ count: firebase.firestore.FieldValue.increment(1) });
          localStorage.setItem(votedKey, "true");
          heartBtn.textContent = "❤️";
        }
        loadVotes();
      } catch (e) {
        const span = voteCount.querySelector("span");
        let val = parseInt(span.textContent) || 0;
        if (localStorage.getItem(votedKey)) { val--; localStorage.removeItem(votedKey); heartBtn.textContent = "🤍"; }
        else { val++; localStorage.setItem(votedKey, "true"); heartBtn.textContent = "❤️"; }
        span.textContent = val;
      }
    });

    loadVotes();
    checkLocalVote();

    // Populate carousel
    galleryData[genreName].forEach(itemData => {
      const item = document.createElement("div");
      item.classList.add("carousel-item");

      const fileName = itemData.url.split("/").pop();

      // Image element
      const img = document.createElement("img");
      img.src = `./images/${fileName}.jpg`; // attempt local
      img.onerror = function() {
        this.onerror = null;
        this.src = "https://via.placeholder.com/200x300?text=Click+to+open"; // fallback
      };
      img.onclick = () => window.open(itemData.url, "_blank");

      item.appendChild(img);

      // Subgenre
      if (itemData.subgenre) {
        const subgenreP = document.createElement("p");
        subgenreP.classList.add("subgenre");
        subgenreP.textContent = itemData.subgenre;
        item.appendChild(subgenreP);
      }

      carousel.appendChild(item);
    });

    // Carousel arrows
    function getVisibleItems() {
      const itemWidth = carousel.querySelector(".carousel-item").offsetWidth + 10;
      return Math.floor(carousel.offsetWidth / itemWidth) || 1;
    }

    leftArrow.addEventListener("click", () => {
      const itemWidth = carousel.querySelector(".carousel-item").offsetWidth + 10;
      carousel.scrollBy({ left: -(itemWidth * getVisibleItems()), behavior: "smooth" });
    });

    rightArrow.addEventListener("click", () => {
      const itemWidth = carousel.querySelector(".carousel-item").offsetWidth + 10;
      carousel.scrollBy({ left: itemWidth * getVisibleItems(), behavior: "smooth" });
    });

    // Swipe support
    let xStart = null;
    carousel.addEventListener("touchstart", e => xStart = e.touches[0].clientX, false);
    carousel.addEventListener("touchmove", e => {
      if (!xStart) return;
      const xEnd = e.touches[0].clientX;
      const xDiff = xStart - xEnd;
      const itemWidth = carousel.querySelector(".carousel-item").offsetWidth + 10;
      const visible = getVisibleItems();

      if (xDiff > 50) carousel.scrollBy({ left: itemWidth * visible, behavior: "smooth" });
      else if (xDiff < -50) carousel.scrollBy({ left: -(itemWidth * visible), behavior: "smooth" });

      xStart = null;
    }, false);
  });
});
