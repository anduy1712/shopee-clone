let base64String = '';

const imageUploaded = (file) => {
  
    var reader = new FileReader();
    reader.onload = function () {
    
    };
    reader.readAsDataURL(file);
  return base64String;
};

export default imageUploaded;
