import Swal from "sweetalert2";
// SuccessAlert
export function successAlert() {
    Swal.fire({
        icon: "success",
        title: "Muito Bem!",
        text: "Criado com sucesso",
        allowOutsideClick: false,
    });
}

//DangerAlert
export function dangerAlert(params) {
    Swal.fire({
        icon: "warning",
        title: "Erro",
        text: "Sem dados",
        allowOutsideClick: false,
    });
}
