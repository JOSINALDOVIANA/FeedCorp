import Swal from "sweetalert2";
// Delete ITEM
export function deleteQuestionAlert() {
    return Swal.fire({
        title: 'Você tem certeza?',
        text: "Gostaria de excluir este item?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: 'primary',
        cancelButtonColor: 'secondary',
        confirmButtonText: 'apagar',
        cancelButtonText: 'cancelar'
    });

}
// Delete ITEM sucesso
export function deleteSucessAlert() {
    const Toast = Swal.mixin({
        toast: true, //trata o alert como notifcação
        position: 'top-end',
        timer: 3000,
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: "success",
        title: "Item apagado com sucesso",
    })
}
// Delete ITEM erro
export function deleteErrorAlert() {
    Swal.fire({
        icon: "warning",
        title: "Erro",
        text: "Não foi possível apagar este item",
        allowOutsideClick: false,
        showConfirmButton: false,
        timerProgressBar: true,
    });
}
// Successo feedback
export function successAlert() {
    Swal.fire({
        icon: "success",
        title: "Criado com sucesso",
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 1500
    });
}
//Erro feedback
export function dangerAlert(params) {
    Swal.fire({
        icon: "warning",
        title: "Erro",
        text: "Sem dados",
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 1500
    });
}
//Salvar alterações profile
export function saveAlert() {
    const Toast = Swal.mixin({
        toast: true, //trata o alert como notifcação
        position: 'bottom-end',
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: "success",
        title: "Alterações salvas!",
        text: "Dados atualizados",
    })
}
//Salvar alterações profile
export function errorSaveAlert() {
    const Toast = Swal.mixin({
        toast: true, //trata o alert como notifcação
        position: 'top-end',
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: "danger",
        title: "Não foi possível salvar as alterações",
        text: "Verifique os dados e tente novamente",
    })
}
//Criar questão clima
export function ClimaQuestionAdd() {
    Swal.fire({
        icon: "success",
        title: "Nova questão!",
        text: "Questão adicionado com sucesso",
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
    });
}
//Erro questão clima
export function ClimaQuestionError() {
    Swal.fire({
        icon: "warning",
        title: "Erro na criação",
        text: "Preencha com os dados necessários",
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 1500
    });
}
//Deletar questão clima
export function ClimaQuestionDelete() {
    Swal.fire({
        icon: "success",
        title: "Apagado com sucesso",
        text: "Questão removida",
        allowOutsideClick: false,
    });
}
//Erro Login
export function LoginError() {
    Swal.fire({
        icon: "error",
        title: "Não foi possível entrar",
        text: "Preencha com os dados necessários",
        allowOutsideClick: false,
        showConfirmButton: true,
    });
}



