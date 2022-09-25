import Swal from "sweetalert2";
// SuccessAlert
export function Successalert() {
    Swal.fire({
        icon: "success",
        title: "Muito Bem!",
        text: "Criado com sucesso",
        allowOutsideClick: false,
    });
}

//DangerAlert
export function Dangeralert(params) {
    Swal.fire({
        icon: "warning",
        title: "Erro",
        text: "Sem dados",
        allowOutsideClick: false,
    });
}
