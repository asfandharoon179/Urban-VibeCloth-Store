// Array of messages to rotate
const messages = [
  "Where tradition meets elegance — discover ethnic styles crafted with passion.",
  "Check out our latest 3-piece collection! that just dropped out this season.",
  "Discover perfumes with amazing long-lasting fragrance that matches your style!",
  "Contact us and share your feedback today!",
  "Browse our 2-piece suits for everyday elegance!",
  "Explore our exclusive accessories to complete your look!",
  "Sign up, log in, and send us a message! We greatly appreciate your feedback."
];

let msgIndex = 0;
const dynamicMsgElem = document.getElementById("dynamicMessage");

function updateMessage() {
  // Update text
  dynamicMsgElem.textContent = messages[msgIndex];

  // Move to next message
  msgIndex = (msgIndex + 1) % messages.length;
}

// Update every 3 seconds
setInterval(updateMessage, 3000);
