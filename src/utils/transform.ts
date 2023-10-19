const transformDateToNewDate = (date) => {
  const [day, month, year] = date.split("/");

  return new Date(`${month}/${day}/${year}`);
};

export const transformHospedeForm = (data) => {
  const formattedData = {
    nome: data.nome,
    cpf: data.cpf,
    email: data.email,
    telefone: data.celular,
    preferencias: [],
  };

  return formattedData;
};

export const transformReservationData = (data) => {
  const formattedData = {
    data_inicio: new Date(data.dataEntrada),
    data_final: new Date(data.dataSaida),
    quarto: data.quarto,
    hospede: data.hospede,
    services: [],
  };

  return formattedData;
};
