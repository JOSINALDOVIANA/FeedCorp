import Swal from "sweetalert2";

// Successo feedback
export function successAlert() {
    Swal.fire({
        icon: "success",
        title: "Muito Bem!",
        text: "Criado com sucesso",
        allowOutsideClick: false,
    });
}
//Erro feedback
export function dangerAlert(params) {
    Swal.fire({
        icon: "warning",
        title: "Erro",
        text: "Sem dados",
        allowOutsideClick: false,
    });
}
// PROFILE
//Salvar alterações profile
export function saveAlert() {
    Swal.fire({
        icon: "success",
        title: "Alterações salvas!",
        text: "Dados atualizados",
        allowOutsideClick: false,
    });
}
//Criar questão clima
export function ClimaQuestionAdd() {
    Swal.fire({
        icon: "success",
        title: "Nova questão!",
        text: "Questão adicionado com sucesso",
        allowOutsideClick: false,
    });
}
//Erro questão clima
export function ClimaQuestionError() {
    Swal.fire({
        icon: "warning",
        title: "Erro na criação",
        text: "Preencha com os dados necessários",
        allowOutsideClick: false,
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
        icon: "warning",
        title: "Não foi possível entrar",
        text: "Preencha com os dados necessários",
        allowOutsideClick: false,
    });
}

