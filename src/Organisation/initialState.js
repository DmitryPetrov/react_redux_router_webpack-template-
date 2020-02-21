import { REQUEST } from './../globalInitialState'

export const ORG_NAME = "";
export const ORG_ID = "2fb49185-712d-4be9-9242-a03e35a7e003";
export const PAYER_NAME = "ООО \"Лагуна\"";
export const PAYER_INN = "5035017318";
export const PAYER_ID = "";

export const ACCOUNT = "40702810042010000403";
export const ACCOUNT_ID = "40702810042010000403";
export const BANK_NAME = "ЦЕНТРАЛЬНЫЙ ФИЛИАЛ АБ \"РОССИЯ\" г. Москва";
export const BANK_BIC = "044525220";
export const BANK_CORR_ACCOUNT = "30101810145250000220";

const ACC = {
	account: ACCOUNT,
	accountId: ACCOUNT_ID,
	bankName: BANK_NAME,
	bankBic: BANK_BIC,
	bankCorrAccount: BANK_CORR_ACCOUNT,
}

const ORG = {
	orgName: ORG_NAME,
	orgId: ORG_ID,
	payerName: PAYER_NAME,
	payerInn: PAYER_INN,
	payerId: PAYER_ID,
	accounts: [ACC],
};

export const ORGANISATION = {
  selectedOrg: {
  	org: ORG,
  	acc: ACC,
  },
  newOrg: ORG,
  orgForUpdate: ORG,
  request: REQUEST,
}



