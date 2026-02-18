// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  increment 
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";


// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyA3TPLeIVhSgPClBcF0Y_IztKJqTYVZWJc",
  authDomain: "doujinflash.firebaseapp.com",
  projectId: "doujinflash",
  storageBucket: "doujinflash.firebasestorage.app",
  messagingSenderId: "758136407006",
  appId: "1:758136407006:web:4d7a40d9bcdff4fca0134f",
  measurementId: "G-6G8VQ2LBKJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// ============================
// ❤️ VOTING SYSTEM
// ============================

document.querySelectorAll(".genre").forEach(section => {

  const genreName = section.dataset.genre;
  const heartBtn = section.querySelector(".heart-btn");
  const countSpan = section.querySelector(".vote-count span");
  const docRef = doc(db, "votes", genreName);
  const votedKey = "voted_" + genreName;

  async function loadVotes() {
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      countSpan.textContent = snap.data().count;
    } else {
      await setDoc(docRef, { count: 0 });
      countSpan.textContent = 0;
    }
  }

  function checkLocalVote() {
    if (localStorage.getItem(votedKey)) {
      heartBtn.textContent = "❤️";
    }
  }

  heartBtn.addEventListener("click", async () => {

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
  });

  loadVotes();
  checkLocalVote();
});


// ============================
// 🖼 LOAD GALLERY (NO LABELS)
// ============================

const galleryData = {
  "Isekai Smartphone": [
    "https://www.patreon.com/posts/defeated-by-zako-123920788",
    "https://www.patreon.com/posts/defeated-by-zako-124092807",
    "https://www.patreon.com/posts/royal-127866137",
    "https://www.patreon.com/posts/harem-switch-133782770",
    "https://www.patreon.com/posts/in-another-world-115302353",
    "https://www.patreon.com/posts/isekai-2-5-138342705",
    "https://www.patreon.com/posts/isekai-alternate-136385040"
  ],
  "Spirit Chronicles": [
    "https://www.patreon.com/posts/defeated-by-113020062",
    "https://www.patreon.com/posts/rio-and-3-armies-115877764",
    "https://www.patreon.com/posts/liselottes-honey-120002486"
  ]
};


Object.keys(galleryData).forEach(sectionName => {

  const carousel = document.querySelector(
    `.genre[data-genre="${sectionName}"] .carousel`
  );

  galleryData[sectionName].forEach(url => {

    const fileName = url.split("/").pop();

    const item = document.createElement("div");
    item.classList.add("carousel-item");

    const img = document.createElement("img");

    img.src = `images/${fileName}.jpg`;
    img.onerror = function () {
      this.onerror = null;
      this.src = `images/${fileName}.png`;
      this.onerror = function () {
        this.src = `images/${fileName}.webp`;
      };
    };

    img.onclick = () => window.open(url, "_blank");

    item.appendChild(img);
    carousel.appendChild(item);
  });
});


// ============================
// ⬅➡ ARROW SCROLL
// ============================

document.querySelectorAll(".genre").forEach(section => {

  const carousel = section.querySelector(".carousel");
  const left = section.querySelector(".arrow.left");
  const right = section.querySelector(".arrow.right");

  left.addEventListener("click", () => {
    carousel.scrollBy({ left: -300, behavior: "smooth" });
  });

  right.addEventListener("click", () => {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
  });
});
