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
	account: "",
	accountId: "",
	bankName: "",
	bankBic: "",
	bankCorrAccount: "",
  payerBankCity: "",
  payerBankSettlementType: "",
}

export const EMPTY_ORG = {
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
  payerBankCity: "",
  payerBankSettlementType: "",
}

const ORG = {
	orgName: ORG_NAME,
	orgId: ORG_ID,
	orgInn: ORG_INN,
	accounts: [ACC],
};


const orgs = [
{
  orgName: "Organisation name1",
  orgId: "Organisation id1",
  orgInn: "Organisation inn1",
  accounts: [{
    payerBankCity: "Payer bank city1.1",
    payerBankSettlementType: "Payer settlement type1.1",
    accountId: "accountId1.1",
    account: "Account1.1",
    bankName: "Bank name1.1",
    bankBic: "Bank Bic1.1",
    bankCorrAccount: "Bank corr account1.1",
  },
  {
    payerBankCity: "Payer bank city1.2",
    payerBankSettlementType: "Payer settlement type1.2",
    accountId: "accountId1.2",
    account: "Account1.2",
    bankName: "Bank name1.2",
    bankBic: "Bank Bic1.2",
    bankCorrAccount: "Bank corr account1.2",
  },
  {
    payerBankCity: "Payer bank city1.3",
    payerBankSettlementType: "Payer settlement type1.3",
    accountId: "accountId1.3",
    account: "Account1.3",
    bankName: "Bank name1.3",
    bankBic: "Bank Bic1.3",
    bankCorrAccount: "Bank corr account1.3",
  }]
},
{
  orgName: "Organisation name2",
  orgId: "Organisation id2",
  orgInn: "Organisation inn2",
  accounts: [{
    payerBankCity: "Payer bank city2.1",
    payerBankSettlementType: "Payer settlement type2.1",
    accountId: "accountId2.1",
    account: "Account2.1",
    bankName: "Bank name2.1",
    bankBic: "Bank Bic2.1",
    bankCorrAccount: "Bank corr account2.1",
  },
  {
    payerBankCity: "Payer bank city2.2",
    payerBankSettlementType: "Payer settlement type2.2",
    accountId: "accountId2.2",
    account: "Account2.2",
    bankName: "Bank name2.2",
    bankBic: "Bank Bic2.2",
    bankCorrAccount: "Bank corr account2.2",
  },
  {
    payerBankCity: "Payer bank city2.3",
    payerBankSettlementType: "Payer settlement type2.3",
    accountId: "accountId2.3",
    account: "Account2.3",
    bankName: "Bank name2.3",
    bankBic: "Bank Bic2.3",
    bankCorrAccount: "Bank corr account2.3",
  }]
},
{
  orgName: "Organisation name3",
  orgId: "Organisation id3",
  orgInn: "Organisation inn3",
  accounts: [{
    payerBankCity: "Payer bank city3.1",
    payerBankSettlementType: "Payer settlement type3.1",
    accountId: "accountId3.1",
    account: "Account3.1",
    bankName: "Bank name3.1",
    bankBic: "Bank Bic3.1",
    bankCorrAccount: "Bank corr account3.1",
  },
  {
    payerBankCity: "Payer bank city3.2",
    payerBankSettlementType: "Payer settlement type3.2",
    accountId: "accountId3.2",
    account: "Account3.2",
    bankName: "Bank name3.2",
    bankBic: "Bank Bic3.2",
    bankCorrAccount: "Bank corr account3.2",
  },
  {
    payerBankCity: "Payer bank city3.3",
    payerBankSettlementType: "Payer settlement type3.3",
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
    payerBankCity: "Payer bank city4.1",
    payerBankSettlementType: "Payer settlement type4.1",
    accountId: "accountId4.1",
    account: "Account4.1",
    bankName: "Bank name4.1",
    bankBic: "Bank Bic4.1",
    bankCorrAccount: "Bank corr account4.1",
  },
  {
    payerBankCity: "Payer bank city4.2",
    payerBankSettlementType: "Payer settlement type4.2",
    accountId: "accountId4.2",
    account: "Account4.2",
    bankName: "Bank name4.2",
    bankBic: "Bank Bic4.2",
    bankCorrAccount: "Bank corr account4.2",
  },
  {
    payerBankCity: "Payer bank city4.3",
    payerBankSettlementType: "Payer settlement type4.3",
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
    payerBankCity: "Payer bank city5.1",
    payerBankSettlementType: "Payer settlement type5.1",
    accountId: "accountId5.1",
    account: "Account5.1",
    bankName: "Bank name5.1",
    bankBic: "Bank Bic5.1",
    bankCorrAccount: "Bank corr account5.1",
  },
  {
    payerBankCity: "Payer bank city5.2",
    payerBankSettlementType: "Payer settlement type5.2",
    accountId: "accountId5.2",
    account: "Account5.2",
    bankName: "Bank name5.2",
    bankBic: "Bank Bic5.2",
    bankCorrAccount: "Bank corr account5.2",
  },
  {
    payerBankCity: "Payer bank city5.3",
    payerBankSettlementType: "Payer settlement type5.3",
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
  organisations: orgs,
}

