// Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().
const getButton = document.getElementById('btn-submit');
const photoCheck = document.querySelector('#agree-terms');

// Crie um botão que limpe as informações contidas nos campos.

const createBtn = () => {
    const newBtn = document.createElement('button');
    newBtn.setAttribute('id', 'btn-reset');
    newBtn.setAttribute('type', 'reset');
    newBtn.innerText = 'Limpar formulário';
    document.getElementsByTagName('fieldset')[0].appendChild(newBtn);
}


// (Bônus) A TrybeTrip precisa muito de fotos para divulgar seus concursos. Tendo isso em mente, faça com que somente quem autorizar o uso de imagens possa enviar suas informações.
const requirePhotoCheck = () => {
    const photoCheck = document.querySelector('#agree-terms');
    photoCheck.setAttribute('required', '');
}

// (Bônus) Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: ‘Dados Inválidos’. Caso contrário, a mensagem ‘Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.’ deverá aparecer na tela.
const countCaracthers = () => {
    const getTextArea = document.getElementById('textarea');
    const counter = getTextArea.value.length;

    if (photoCheck.checked === false) {
        return;
    }

    if (counter > 500) {
        alert('Dados inválidos');
    } else {
        alert('Dados enviados com Sucesso!');
    }
}

getButton.addEventListener('click', function(event){ event.preventDefault(); });
getButton.addEventListener('click', countCaracthers);

window.onload = () => {
    createBtn();
    requirePhotoCheck();
}