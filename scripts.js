// scripts.js
function uploadFiles() {
  const fileInput = document.getElementById('fileInput');
  const files = fileInput.files;
  const gallery = document.getElementBId('gallery');

  gallery.innerHTML = '';  // Clear the gallery before adding new images
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function(event) {
      const imgElement = document.createElement('img');
      imgElement.src = event.target.result;
      
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');
      galleryItem.appendChild(imgElement);
      
      gallery.appendChild(galleryItem);
    }
    reader.readAsDataURL(file);      
  }
}
