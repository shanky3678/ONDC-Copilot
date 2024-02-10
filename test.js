var myHeaders = new Headers();
myHeaders.append("Content-Type", "multipart/form-data");
myHeaders.append("Accept", "application/json");

var formdata = new FormData();
formdata.append("user_id", "Testing");
formdata.append("document_name", "Testing");
formdata.append("document_category", "Testing");
formdata.append("document_source_url", "Testing");
formdata.append("upload_remark", "Testing");
formdata.append("file", fileInput.files[0], "/C:/Users/Shashank L K/Downloads/SOV copy.pdf");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("http://127.0.0.1:5000\n/upload/pdfdoc", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));