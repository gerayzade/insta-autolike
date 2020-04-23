setInterval(() => {
  // select heart icon from "like" button
  let hearts = document.querySelectorAll('.ltpMr svg[aria-label="Like"]');
  [...hearts].forEach(heart => heart.parentNode.click());
}, 200);

const scroll = () => {
  // scroll page to like
  window.scrollBy(0, 100);
  setTimeout(scroll, 20);
}

scroll();
