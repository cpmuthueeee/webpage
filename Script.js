var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");
for (var i = 1; i <= 50; i++) {
    var thumb = document.createElement("img");
    thumb.src = "ImagesJava/Image-" + i + ".jpg";
    thumb.alt = "Image " + i;
    thumb.classList.add("thumb");
    thumb.addEventListener(
    "click", function() {
        currentImage.src = this.src;
        currentImage.alt = this.alt;
    }
  );
  imageThumbs.appendChild(thumb);
}
