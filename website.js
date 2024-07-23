document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('messageModal');
    var btn = document.getElementById("messageBtn");
    var span = document.getElementsByClassName("close")[0];
    var fileInput = document.getElementById('fileInput');
    var uploadedPicture = document.getElementById('uploadedPicture');
  
    btn.onclick = function() {
      modal.style.display = "block";
    }
  
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    fileInput.addEventListener('change', function() {
      var file = fileInput.files[0];
      var reader = new FileReader();
  
      reader.onload = function(event) {
        uploadedPicture.src = event.target.result;
        uploadedPicture.style.display = 'block';
      }
  
      reader.readAsDataURL(file);
    });
  });
  
