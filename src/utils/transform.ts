export const transformDateToNewDate = (date) => {
  const [day, month, year] = date.split("/");

  return new Date(`${month}/${day}/${year}`);
};

export const transformHospedeForm = (data) => {
  const formattedData = {
    nome: data.nome,
    cpf: data.cpf.replace(/\D/g, ''),
    email: data.email,
    telefone: data.celular,
  };

  return formattedData;
};

export const transformReservationData = (data) => {
  const formattedData = {
    data_inicio: transformDateToNewDate(data.dataEntrada),
    data_final: transformDateToNewDate(data.dataSaida),
    quarto: data.quarto,
    hospede: data.hospede,
    services: [],
  };

  return formattedData;
};

export const transformCPFInOnlyNumbers = (cpf) => {
  const cpfNumerico = cpf.replace(/\D/g, '');
  return cpfNumerico;
};
