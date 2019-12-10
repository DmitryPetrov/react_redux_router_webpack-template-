/*
  transform string with date
  from "2010-10-21..."
  to   "21.10.2010"
*/
export function transformDate(date) {
  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
  let day = date.substring(8, 10);
  return day + "." + month + "." + year;
}

export function createDigest(data) {
  const lineSeparator = "\n";

  let digest = "[Исходящее платежное требование]" + lineSeparator;
  digest += "Номер документа=" + data.docNumber + lineSeparator;
  digest += "Дата документа=" + transformDate(data.docDate) + lineSeparator;
  digest += "Вид платежа=" + data.paymentKind + lineSeparator;
  digest += "Условие оплаты=" + data.paymentCondition + lineSeparator;
  digest += "Срок для акцепта=" + data.acceptTerm + lineSeparator;
  digest += "Сумма=" + data.documentSum + lineSeparator;
  digest += "Наименование плательщика=" + data.payerName + lineSeparator;
  digest += "ИНН плательщика=" + data.payerInn + lineSeparator;
  digest += "Счет плательщика=" + data.payerAccount + lineSeparator;
  digest += "Банк плательщика=" + data.payerBankName + lineSeparator;
  digest += "БИК банка плательщика=" + data.payerBankBic + lineSeparator;
  digest += "Кор. счет банка плательщика=" + data.payerBankCorrAccount + lineSeparator;
  digest += "Название получателя=" + data.receiverName + lineSeparator;
  digest += "ИНН получателя=" + data.receiverInn + lineSeparator;
  digest += "Счет получателя=" + data.receiverAccount + lineSeparator;
  digest += "Банк получателя=" + data.receiverBankName + lineSeparator;
  digest += "БИК банка получателя=" + data.receiverBankBic + lineSeparator;
  digest += "Кор. счет банка получателя=" + data.receiverBankCorrAccount + lineSeparator;
  digest += "Резервное поле (23)=" + data.reserv23 + lineSeparator;
  digest += "Код=" + lineSeparator;
  digest += "Вид операции=" + data.operationType + lineSeparator;
  digest += "Очередность платежа=" + data.paymentPriority + lineSeparator;
  digest += "Назначение платежа=" + data.paymentPurpose + lineSeparator;
  digest += "Дата отсылки (вручения) плательщику предусмотренных договором документов=";
  digest += transformDate(data.docDispatchDate) + lineSeparator;

  return digest;
}