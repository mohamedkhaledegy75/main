 let likeBtn = document.getElementById("like-btn");
 let likeCount = document.getElementById("like-count");
 let count = 0;
 likeBtn.addEventListener("click", function() {
   count++;
   likeCount.textContent = count;
 });