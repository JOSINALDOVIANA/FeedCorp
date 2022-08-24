import media17 from "../../assets/img/media/17.jpg";
import Swal from "sweetalert2";
// BasicAlert
export function Basicsweetalert() {
  Swal.fire({
    text: " Welcome to Your Admin Page",
    allowOutsideClick: false,
  });
}
// TitleAlert
export function Titlealert() {
  Swal.fire({
    title: "Here is a title! ,All are available in the template",
    allowOutsideClick: false,
  });

}
// SuccessAlert
export function Successalert() {
  Swal.fire({
    icon: "success",
    title: "Well done!",
    text: "You Clicked Button",
    allowOutsideClick: false,
  });
}
//DangerAlert
export function Dangeralert(params) {
  Swal.fire({
    title: "Are you sure?",
    text: "Your will not be able to recover this imaginary file!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#6259ca",
    cancelButtonColor: "#6259ca",
    confirmButtonText: "Yes, delete it!",
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your imaginary file has been deleted.", "success");
    }
  });
}
// Passing Parameter
export function Passingparameter(params) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-primary me-2",
      cancelButton: "btn btn-primary me-2",
      allowOutsideClick: false,
    },
    buttonsStyling: false,
  });

  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: " You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      allowOutsideClick: false,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Your imaginary file is safe :)",
          "error"
        );
      }
    });
}
// ImageAlert
export function Sweetalertimage(params) {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: media17,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
    allowOutsideClick: false,
  });
}

//  AutoAlert
export function Autoalert(params) {
  let timerInterval;
  Swal.fire({
    title: "Auto close alert!",
    html: "I will close in <b></b> milliseconds.",
    timer: 2000,
    timerProgressBar: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log("I was closed by the timer");
    }
  });
}
// fileAlert
export function Filealert() {
  (async () => {
    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      allowOutsideClick: false,
      inputAttributes: {
        accept: "image",
        "aria-label": "Upload your profile picture",
      },
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: "Your uploaded picture",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture",
        });
      };
      reader.readAsDataURL(file);
    }
  })();
}
