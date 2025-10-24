// Frontend main logic
console.log("MusicApp Home loaded!");

document.querySelectorAll('.card, .playlist').forEach(item => {
  item.addEventListener('click', () => {
    alert(`Phát bài: ${item.querySelector('p').textContent}`);
  });
});
