import { REQUEST } from './../globalInitialState'

export const ORG_NAME = "ООО \"Лагуна\"";
export const ORG_ID = "2fb49185-712d-4be9-9242-a03e35a7e003";
export const ORG_INN = "5035017318";

export const ACCOUNT = "40702810042010000403";
export const ACCOUNT_ID = "40702810042010000403";
export const BANK_NAME = "ЦЕНТРАЛЬНЫЙ ФИЛИАЛ АБ \"РОССИЯ\" г. Москва";
export const BANK_BIC = "044525220";
export const BANK_CORR_ACCOUNT = "30101810145250000220";

export const EMPTY_ACC = {
  id: "",
	account: "",
	accountId: "",
	bankName: "",
	bankBic: "",
	bankCorrAccount: "",
  bankCity: "",
  bankSettlementType: "",
}

export const EMPTY_ORG = {
  id: "",
	orgName: "",
	orgId: "",
	orgInn: "",
	accounts: [EMPTY_ACC],
};

const ACC = {
	account: ACCOUNT,
	accountId: ACCOUNT_ID,
	bankName: BANK_NAME,
	bankBic: BANK_BIC,
	bankCorrAccount: BANK_CORR_ACCOUNT,
  bankCity: "",
  bankSettlementType: "",
}

const ORG = {
	orgName: ORG_NAME,
	orgId: ORG_ID,
	orgInn: ORG_INN,
	accounts: [ACC],
};


const orgs = [
{
  orgName: "ООО \"Лагуна\"",
  orgId: "2fb49185-712d-4be9-9242-a03e35a7e003",
  orgInn: "5035017318",
  accounts: [{
    bankCity: "Москва",
    bankSettlementType: "city",
    accountId: "40702810042010000403",
    account: "40702810042010000403",
    bankName: "ЦЕНТРАЛЬНЫЙ ФИЛИАЛ АБ \"РОССИЯ\" г. Москва",
    bankBic: "044525220",
    bankCorrAccount: "30101810145250000220",
  }]
},
{
  orgName: "АО \"РЗК\"",
  orgId: "0ce353c5-9a53-497d-ad02-df1fb6c37feb",
  orgInn: "7842170415",
  accounts: [{
    bankCity: "Санкт-Петербург",
    bankSettlementType: "city",
    accountId: "e0e91a9c-f448-4779-8267-921c350617b0",
    account: "40702810800000005897",
    bankName: "АО \"АБ \"РОССИЯ\"",
    bankBic: "044030861",
    bankCorrAccount: "30101810800000000861",
  }]
},
{
  orgName: "Organisation name3",
  orgId: "Organisation id3",
  orgInn: "Organisation inn3",
  accounts: [{
    bankCity: "Payer bank city3.1",
    bankSettlementType: "Payer settlement type3.1",
    accountId: "accountId3.1",
    account: "Account3.1",
    bankName: "Bank name3.1",
    bankBic: "Bank Bic3.1",
    bankCorrAccount: "Bank corr account3.1",
  },
  {
    bankCity: "Payer bank city3.2",
    bankSettlementType: "Payer settlement type3.2",
    accountId: "accountId3.2",
    account: "Account3.2",
    bankName: "Bank name3.2",
    bankBic: "Bank Bic3.2",
    bankCorrAccount: "Bank corr account3.2",
  },
  {
    bankCity: "Payer bank city3.3",
    bankSettlementType: "Payer settlement type3.3",
    accountId: "accountId3.3",
    account: "Account3.3",
    bankName: "Bank name3.3",
    bankBic: "Bank Bic3.3",
    bankCorrAccount: "Bank corr account3.3",
  }]
},
{
  orgName: "Organisation name4",
  orgId: "Organisation id4",
  orgInn: "Organisation inn4",
  accounts: [{
    bankCity: "Payer bank city4.1",
    bankSettlementType: "Payer settlement type4.1",
    accountId: "accountId4.1",
    account: "Account4.1",
    bankName: "Bank name4.1",
    bankBic: "Bank Bic4.1",
    bankCorrAccount: "Bank corr account4.1",
  },
  {
    bankCity: "Payer bank city4.2",
    bankSettlementType: "Payer settlement type4.2",
    accountId: "accountId4.2",
    account: "Account4.2",
    bankName: "Bank name4.2",
    bankBic: "Bank Bic4.2",
    bankCorrAccount: "Bank corr account4.2",
  },
  {
    bankCity: "Payer bank city4.3",
    bankSettlementType: "Payer settlement type4.3",
    accountId: "accountId4.3",
    account: "Account4.3",
    bankName: "Bank name4.3",
    bankBic: "Bank Bic4.3",
    bankCorrAccount: "Bank corr account4.3",
  }]
},
{
  orgName: "Organisation name5",
  orgId: "Organisation id5",
  orgInn: "Organisation inn5",
  accounts: [{
    bankCity: "Payer bank city5.1",
    bankSettlementType: "Payer settlement type5.1",
    accountId: "accountId5.1",
    account: "Account5.1",
    bankName: "Bank name5.1",
    bankBic: "Bank Bic5.1",
    bankCorrAccount: "Bank corr account5.1",
  },
  {
    bankCity: "Payer bank city5.2",
    bankSettlementType: "Payer settlement type5.2",
    accountId: "accountId5.2",
    account: "Account5.2",
    bankName: "Bank name5.2",
    bankBic: "Bank Bic5.2",
    bankCorrAccount: "Bank corr account5.2",
  },
  {
    bankCity: "Payer bank city5.3",
    bankSettlementType: "Payer settlement type5.3",
    accountId: "accountId5.3",
    account: "Account5.3",
    bankName: "Bank name5.3",
    bankBic: "Bank Bic5.3",
    bankCorrAccount: "Bank corr account5.3",
  }]
},
]


export const ORGANISATION = {
  selectedOrg: {
  	org: ORG,
  	acc: ACC,
  },
  request: REQUEST,
  organisations: [],
}

