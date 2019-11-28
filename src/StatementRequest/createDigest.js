function transformDate(date) {
  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
  let day = date.substring(8, 10);
  return day + "." + month + "." + year;
}

function filterData(nonFilteredData) {
  let filteredAccounts = nonFilteredData.accounts
    .filter(item => item !== undefined)
    .filter(item => item !== null);
  let data = nonFilteredData;
  data.accounts = filteredAccounts;

  return data;
}

export function createDigest(nonFilteredData) {
  const data = filterData(nonFilteredData);
  const lineSeparator = "\n";

  let digest = "[Запрос на получение информации о движении денежных средств]" + lineSeparator;
  digest += "Номер документа=" + data.docNumber + lineSeparator;
  digest += "Дата документа=" + transformDate(data.docDate) + lineSeparator;
  digest += "Дата начала периода выписки=" + transformDate(data.fromDate) + lineSeparator;
  digest += "Дата окончания периода выписки=" + transformDate(data.toDate) + lineSeparator;
  digest += "Наименование организации автора документа=" + data.orgName + lineSeparator;
  digest += "ИНН организации клиента=" + data.orgInn + lineSeparator;
  for (let i = 0; i < data.accounts.length; i++) {
    digest += "[Счет #" + i + "]" + lineSeparator;
    digest += "Счет=" + data.accounts[i].account + lineSeparator;
    digest += "БИК банка, в котором обслуживается счет=" + data.accounts[i].bankBIC + lineSeparator;
    digest += "Наименование банка, в котором обслуживается счет=" + data.accounts[i].bankName + lineSeparator;    
  }

  return digest;
}