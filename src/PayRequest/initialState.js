import { v1 as generateUUID } from 'uuid';

import { REQUEST } from './../globalInitialState'

export const DIGEST_SCHEME_INFO = {
    digestScheme: "com.bssys.sbns.dbo.rur.paymentrequest.OutPayReqSignDigest",
    digestSchemeFormat: "",
    digestSchemeVersion: "8",
};

export const ORDER_DATE = "2010-10-10T10:10:10.710+03:00";
export const ORDER_NUMBER = "";
export const PART_PAYMENT_SUM = "";
export const PAYMENT_BALANCE = "";
export const STR_NUM = "";

export const PAY_REQUEST_PART_DATA = {
    orderDate: ORDER_DATE,
    orderNumber: ORDER_NUMBER,
    partPaymentSum: PART_PAYMENT_SUM,
    paymentBalance: PAYMENT_BALANCE,
    strNum: STR_NUM,
};

export const ACCEPT_TERM = "5";
export const ACCOUNT_ID = "27809083-1892-4467-b6a6-035a95b6230e";

export const BANK_ACCEPT_DATE = "";//"2010-10-10T10:10:10.710+03:00";
export const BANK_MESSAGE = "";
export const BANK_MESSAGE_AUTHOR = "";

export const DOC_DATE = "2019-05-24T01:00:00.000+03:00";
export const DOC_DISPATCH_DATE = "";//"2010-10-10T10:10:10.710+03:00";
export const DOC_ID = generateUUID();
export const DOC_NUMBER = "1263";

export const DOCUMENT_SUM = "10000";

export const EXTERNAL_ID = "";
export const EXTERNAL_UPG_ID = "";

export const LAST_MODIFY_DATE = "2010-10-10T10:10:10.710+03:00";
export const MESSAGE_ONLY_FOR_BANK = "";
export const NEW_STATE = "";

export const OPERATION_DATE = "";//"2010-10-10T10:10:10.710+03:00";
export const OPERATION_TYPE = "02";

export const ORG_ID = "2fb49185-712d-4be9-9242-a03e35a7e003";
export const ORG_NAME = "";

export const PAYER_ACCOUNT = "40702810042010000403";
export const PAYER_BANK_BIC = "044525220";
export const PAYER_BANK_CORR_ACCOUNT = "30101810145250000220";
export const PAYER_BANK_NAME = "ЦЕНТРАЛЬНЫЙ ФИЛИАЛ АБ \"РОССИЯ\" г. Москва";
export const PAYER_ID = "";
export const PAYER_INN = "5035017318";
export const PAYER_NAME = "ООО \"Лагуна\"";

export const PAYMENT_CONDITION = "1";
export const PAYMENT_CONDITION_CODE = "1";
export const PAYMENT_KIND = "";
export const PAYMENT_KIND_CODE = "";
export const PAYMENT_PRIORITY = "5";
export const PAYMENT_PURPOSE = "Договор № 197 от 01.10.14 за водоснабжение и водоотведение на основании показаний приборов учета в соответствии с договором за Май 2019 г. НДС (20%) - 110-15";

export const QUEUE_DATE = "2010-10-10T10:10:10.710+03:00";

export const RECEIVER_ACCOUNT = "40702810142010000251";
export const RECEIVER_BANK_BIC = "044525220";
export const RECEIVER_BANK_CORR_ACCOUNT = "30101810145250000220";
export const RECEIVER_BANK_NAME = "ЦЕНТРАЛЬНЫЙ ФИЛИАЛ АБ \"РОССИЯ\" г. Москва";
export const RECEIVER_INN = "5035019481";
export const RECEIVER_NAME = "МУП \"Энергетик\"";

export const RECIEVE_D_PAYER_BANK = "";//"2010-10-10T10:10:10.710+03:00";

export const RESERV_23 = "";

export const TEMPLATE = "";

export const UIP = "";

export const VAT_CALCULATION_RULE = "Vat1";
export const VAT_RATE = "0";
export const VAT_SUM = "0";

export const DATA = {
    acceptTerm: ACCEPT_TERM,
    accountId: ACCOUNT_ID,
    bankAcceptDate: BANK_ACCEPT_DATE,
    bankMessage: BANK_MESSAGE,
    bankMessageAuthor: BANK_MESSAGE_AUTHOR,
    docDate: DOC_DATE,
    docDispatchDate: DOC_DISPATCH_DATE,
    docId: DOC_ID,
    docNumber: DOC_NUMBER,
    documentSum: DOCUMENT_SUM,
    externalId: EXTERNAL_ID,
    externalUPGId: EXTERNAL_UPG_ID,
    lastModifyDate: LAST_MODIFY_DATE,
    messageOnlyForBank: MESSAGE_ONLY_FOR_BANK,
    newState: NEW_STATE,
    operationDate: OPERATION_DATE,
    operationType: OPERATION_TYPE,
    orgId: ORG_ID,
    orgName: ORG_NAME,
    payerAccount: PAYER_ACCOUNT,
    payerBankBic: PAYER_BANK_BIC,
    payerBankCorrAccount: PAYER_BANK_CORR_ACCOUNT,
    payerBankName: PAYER_BANK_NAME,
    payerId: PAYER_ID,
    payerInn: PAYER_INN,
    payerName: PAYER_NAME,
    paymentCondition: PAYMENT_CONDITION,
    paymentConditionCode: PAYMENT_CONDITION_CODE,
    paymentKind: PAYMENT_KIND,
    paymentKindCode: PAYMENT_KIND_CODE,
    paymentPriority: PAYMENT_PRIORITY,
    paymentPurpose: PAYMENT_PURPOSE,
    queueDate: QUEUE_DATE,
    receiverAccount: RECEIVER_ACCOUNT,
    receiverBankBic: RECEIVER_BANK_BIC,
    receiverBankCorrAccount: RECEIVER_BANK_CORR_ACCOUNT,
    receiverBankName: RECEIVER_BANK_NAME,
    receiverInn: RECEIVER_INN,
    receiverName: RECEIVER_NAME,
    recieveDPayerBank: RECIEVE_D_PAYER_BANK,
    reserv23: RESERV_23,
    template: TEMPLATE,
    uip: UIP,
    vatCalculationRule: VAT_CALCULATION_RULE,
    vatRate: VAT_RATE,
    vatSum: VAT_SUM,
    partPayments: [PAY_REQUEST_PART_DATA],
};

export const PAY_REQUEST = {
    data: DATA,
    request: REQUEST,
}

