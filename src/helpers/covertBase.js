let base64String = '';

const imageUploaded = (file) => {
  var reader = new FileReader();

  reader.onload = function () {
    base64String = reader.result.replace('data:', '').replace(/^.+,/, '');

    // alert(imageBase64Stringsep);
  };
  reader.readAsDataURL(file);
  alert(base64String);
  return base64String;
};

export default imageUploaded;
