export const transformDateToNewDate = (date) => {
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
    data_inicio: transformDateToNewDate(data.dataEntrada),
    data_final: transformDateToNewDate(data.dataSaida),
    quarto: data.quarto ?? "651c8264a680be92252577c4",
    hospede: data.hospede,
    services: [],
  };

  return formattedData;
};
