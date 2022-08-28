const reviewContainer = document.getElementById("review-container");

const reviews = [
  {
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Indvah Almeh",
    text: "I Really enjoyed this course! It was fun and intructive as well as educational.I Learnt a lot",
    name: "Indvah Almeh",
  },
  {
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    alt: "Profile picture of Andrew Log",
    text: "This is the amazing course that I ever see. I like it a lot",
    name: "Andrew Ligo",
  },
  {
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
    alt: "Ciar Ani Profile Picture",
    text: "I Really enjoyed this course! It was fun and intructive as well as educational.I Learnt a lot",
    name: "Cira ani",
  },
  {
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    alt: "Profile Picture Tommy Harman",
    text: "I Really enjoyed this course! It was fun and intructive as well as educational.I Learnt a loI Really enjoyed this course! It was fun and intructive as well as educational.I Learnt a lo",
    name: "Tommy Harman",
  },
];

function polulateDisplay() {
  reviews.forEach((review) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.addEventListener("mouseover", showCard);
    cardElement.addEventListener("mouseleave", blurCard);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", review.img);
    imageElement.setAttribute("alt", review.alt);
    const parapgraphElement = document.createElement("p");
    parapgraphElement.textContent = review.text;
    const nameContainer = document.createElement("div");
    nameContainer.classList.add("name-container");
    nameContainer.textContent = review.name;

    imageContainer.append(imageElement);
    cardElement.append(imageContainer, parapgraphElement, nameContainer);

    reviewContainer.append(cardElement);
  });
}
polulateDisplay();

function showCard() {
  this.classList.add("active");
}
function blurCard() {
  this.classList.remove("active");
}
