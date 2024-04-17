$(document).ready(function () {
  $("#cpf").mask("000.000.000-00", { reverse: true });

  $("#telefone").mask("(00) 00000-0000");

  $("#cep").mask("00000-000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor, insira seu nome",
      email: "Por favor, insira seu email válido",
      telefone: "Por favor, insira seu telefone",
      cpf: "Por favor, insira seu cpf",
      endereco: "Por favor, insira seu endereço",
      cep: "Por favor, insira seu cep",
    },

    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();

      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
});
