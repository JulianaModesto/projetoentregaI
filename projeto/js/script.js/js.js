document.addEventListener("DOMContentLoaded", function () {
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");

  // Máscara de CPF (formato: 000.000.000-00)
  cpf.addEventListener("input", () => {
    cpf.value = cpf.value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  });

  // Máscara de telefone (formato: (00) 00000-0000)
  telefone.addEventListener("input", () => {
    telefone.value = telefone.value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})$/, '$1-$2');
  });

  // Máscara de CEP (formato: 00000-000)
  cep.addEventListener("input", () => {
    cep.value = cep.value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d{3})$/, '$1-$2');
  });
});