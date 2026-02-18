// 🔥 Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  increment 
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";


// 🔥 Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyA3TPLeIVhSgPClBcF0Y_IztKJqTYVZWJc",
  authDomain: "doujinflash.firebaseapp.com",
  projectId: "doujinflash",
  storageBucket: "doujinflash.firebasestorage.app",
  messagingSenderId: "758136407006",
  appId: "1:758136407006:web:4d7a40d9bcdff4fca0134f",
  measurementId: "G-6G8VQ2LBKJ"
};


// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// =============================
// ❤️ VOTING SYSTEM
// =============================

document.querySelectorAll(".genre").forEach(section => {

  const genreName = section.dataset.genre;
  const heartBtn = section.querySelector(".heart-btn");
  const countSpan = section.querySelector(".vote-count span");
  const docRef = doc(db, "votes", genreName);
  const votedKey = "voted_" + genreName;

  // Load vote count
  async function loadVotes() {
    const snap = await getDoc(docRef);

    if (snap.exists()) {
      countSpan.textContent = snap.data().count;
    } else {
      await setDoc(docRef, { count: 0 });
      countSpan.textContent = 0;
    }
  }

  // Check localStorage for heart state
  function checkLocalVote() {
    if (localStorage.getItem(votedKey)) {
      heartBtn.textContent = "❤️";
    }
  }

  // Toggle vote
  heartBtn.addEventListener("click", async () => {

    const hasVoted = localStorage.getItem(votedKey);

    if (hasVoted) {
      // Remove vote
      await updateDoc(docRef, { count: increment(-1) });
      localStorage.removeItem(votedKey);
      heartBtn.textContent = "🤍";
    } else {
      // Add vote
      await updateDoc(docRef, { count: increment(1) });
      localStorage.setItem(votedKey, "true");
      heartBtn.textContent = "❤️";
    }

    loadVotes();
  });

  loadVotes();
  checkLocalVote();
});


// =============================
// 🖼 LOAD GALLERY FROM List.txt
// =============================

async function loadGallery() {

  const response = await fetch("List.txt");
  const text = await response.text();
  const lines = text.split("\n");

  lines.forEach(line => {

    if (!line.trim()) return;

    const [url, sectionName, subgenre] = line.split("|");

    const carousel = document.querySelector(
      `.genre[data-genre="${sectionName.trim()}"] .carousel`
    );

    if (!carousel) return;

    const fileName = url.trim().split("/").pop();

    const item = document.createElement("div");
    item.classList.add("carousel-item");

    const img = document.createElement("img");

    // Try .jpg → .png → .webp
    img.src = `images/${fileName}.jpg`;
    img.onerror = function () {
      this.onerror = null;
      this.src = `images/${fileName}.png`;
      this.onerror = function () {
        this.src = `images/${fileName}.webp`;
      };
    };

    img.onclick = () => {
      window.open(url.trim(), "_blank");
    };

    const label = document.createElement("p");
    label.textContent = subgenre ? subgenre.trim() : "";

    item.appendChild(img);
    item.appendChild(label);
    carousel.appendChild(item);
  });
}

loadGallery();


// =============================
// ⬅➡ ARROW SCROLLING
// =============================

document.querySelectorAll(".genre").forEach(section => {

  const carousel = section.querySelector(".carousel");
  const leftArrow = section.querySelector(".arrow.left");
  const rightArrow = section.querySelector(".arrow.right");

  if (leftArrow) {
    leftArrow.addEventListener("click", () => {
      carousel.scrollBy({ left: -300, behavior: "smooth" });
    });
  }

  if (rightArrow) {
    rightArrow.addEventListener("click", () => {
      carousel.scrollBy({ left: 300, behavior: "smooth" });
    });
  }

});
