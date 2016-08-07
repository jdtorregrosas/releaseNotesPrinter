function configLoading() {
  swal({
    title: "Wait a moment, please!",
    text: "We are applying your configuration ",
    imageUrl: "/public/assets/images/loading.png"
  });
}

function indexLoading() {
  swal({
    title: "Wait a moment, please!",
    text: "We are trying to proccess your request",
    imageUrl: "/public/assets/images/thumbs-up.jpg",
    timer: 2000,
    showConfirmButton: false
  });
}

function error(err) {
  swal("Oops Error!", err,"error");
}
