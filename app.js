let back = document.querySelector(".back");
let chatbox = document.querySelector(".chatbox");
let open = document.querySelector(".open");

console.log(open);


open.addEventListener('click', function () {
  chatbox.classList.remove('hide')
})

back.addEventListener('click', function () {
  chatbox.classList.add('hide')
});