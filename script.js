import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, increment } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

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

document.querySelectorAll(".genre").forEach(section => {
  const genreName = section.dataset.genre;
  const heartBtn = section.querySelector(".heart-btn");
  const countSpan = section.querySelector(".vote-count span");
  const docRef = doc(db, "votes", genreName);
  const votedKey = "voted_" + genreName;

  // Load vote count from Firestore
  async function loadVotes() {
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      countSpan.textContent = snap.data().count;
    } else {
      await setDoc(docRef, { count: 0 });
      countSpan.textContent = 0;
    }
  }

  // Set heart state from localStorage
  function checkLocalVote() {
    if (localStorage.getItem(votedKey)) {
      heartBtn.classList.add("liked");
      heartBtn.textContent = "❤️";
    }
  }

  // Toggle vote on click
  heartBtn.addEventListener("click", async () => {
    const hasVoted = localStorage.getItem(votedKey);

    if (hasVoted) {
      // REMOVE vote
      await updateDoc(docRef, { count: increment(-1) });
      localStorage.removeItem(votedKey);
      heartBtn.classList.remove("liked");
      heartBtn.textContent = "🤍"; // unliked state
    } else {
      // ADD vote
      await updateDoc(docRef, { count: increment(1) });
      localStorage.setItem(votedKey, "true");
      heartBtn.classList.add("liked");
      heartBtn.textContent = "❤️";
    }

    loadVotes(); // Refresh count
  });

  loadVotes();
  checkLocalVote();
});

// Optional: on page load, mark all hearts liked based on localStorage
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".genre").forEach(section => {
    const genre = section.dataset.genre;
    const heart = section.querySelector(".heart-btn");
    if (localStorage.getItem("voted_" + genre)) {
      heart.classList.add("liked");
      heart.textContent = "❤️";
    }
  });
});
