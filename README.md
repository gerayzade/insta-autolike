# insta-autolike

#### Script for dev console to get posts in feed liked automatically

1. Visit your [instagram feed](https://www.instagram.com)
2. Open the developer console (use the keyboard shortcut `Cmd` `Shift` `J` on Windows or `Cmd` `Option` `J` on Mac)
3. Copy paste the following script and press `Enter`

```javascript
setInterval(() => {
  let hearts = document.querySelectorAll('.ltpMr svg[aria-label="Like"]');
  [...hearts].forEach(heart => heart.parentNode.click());
}, 200);

const scroll = () => {
  window.scrollBy(0, 100);
  setTimeout(scroll, 20);
}

scroll();
```
