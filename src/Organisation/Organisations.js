import React from 'react';
import { connect } from 'react-redux';

import store from './../store';
import OrganisationsView from './OrganisationsView'

const orgs = [
{
  orgName: "Organisation name1",
  orgId: "Organisation id1",
  payerName: "Payer name1",
  payerInn: "Payer inn1",
  payerId: "Payer id1",
  accounts: [{
    payerBankCity: "Payer bank city1.1",
    payerBankSettlementType: "Payer settlement type1.1",
    accountId: "accountId1.1",
    account: "Account1.1",
    bankName: "Bank name1.1",
    bankBic: "Bank BIC1.1",
    bankCorrAccount: "Bank corr account1.1",
  },
  {
    payerBankCity: "Payer bank city1.2",
    payerBankSettlementType: "Payer settlement type1.2",
    accountId: "accountId1.2",
    account: "Account1.2",
    bankName: "Bank name1.2",
    bankBic: "Bank BIC1.2",
    bankCorrAccount: "Bank corr account1.2",
  },
  {
    payerBankCity: "Payer bank city1.3",
    payerBankSettlementType: "Payer settlement type1.3",
    accountId: "accountId1.3",
    account: "Account1.3",
    bankName: "Bank name1.3",
    bankBic: "Bank BIC1.3",
    bankCorrAccount: "Bank corr account1.3",
  }]
},
{
  orgName: "Organisation name2",
  orgId: "Organisation id2",
  payerName: "Payer name2",
  payerInn: "Payer inn2",
  payerId: "Payer id2",
  accounts: [{
    payerBankCity: "Payer bank city2.1",
    payerBankSettlementType: "Payer settlement type2.1",
    accountId: "accountId2.1",
    account: "Account2.1",
    bankName: "Bank name2.1",
    bankBic: "Bank BIC2.1",
    bankCorrAccount: "Bank corr account2.1",
  },
  {
    payerBankCity: "Payer bank city2.2",
    payerBankSettlementType: "Payer settlement type2.2",
    accountId: "accountId2.2",
    account: "Account2.2",
    bankName: "Bank name2.2",
    bankBic: "Bank BIC2.2",
    bankCorrAccount: "Bank corr account2.2",
  },
  {
    payerBankCity: "Payer bank city2.3",
    payerBankSettlementType: "Payer settlement type2.3",
    accountId: "accountId2.3",
    account: "Account2.3",
    bankName: "Bank name2.3",
    bankBic: "Bank BIC2.3",
    bankCorrAccount: "Bank corr account2.3",
  }]
},
{
  orgName: "Organisation name3",
  orgId: "Organisation id3",
  payerName: "Payer name3",
  payerInn: "Payer inn3",
  payerId: "Payer id3",
  accounts: [{
    payerBankCity: "Payer bank city3.1",
    payerBankSettlementType: "Payer settlement type3.1",
    accountId: "accountId3.1",
    account: "Account3.1",
    bankName: "Bank name3.1",
    bankBic: "Bank BIC3.1",
    bankCorrAccount: "Bank corr account3.1",
  },
  {
    payerBankCity: "Payer bank city3.2",
    payerBankSettlementType: "Payer settlement type3.2",
    accountId: "accountId3.2",
    account: "Account3.2",
    bankName: "Bank name3.2",
    bankBic: "Bank BIC3.2",
    bankCorrAccount: "Bank corr account3.2",
  },
  {
    payerBankCity: "Payer bank city3.3",
    payerBankSettlementType: "Payer settlement type3.3",
    accountId: "accountId3.3",
    account: "Account3.3",
    bankName: "Bank name3.3",
    bankBic: "Bank BIC3.3",
    bankCorrAccount: "Bank corr account3.3",
  }]
},
{
  orgName: "Organisation name4",
  orgId: "Organisation id4",
  payerName: "Payer name4",
  payerInn: "Payer inn4",
  payerId: "Payer id4",
  accounts: [{
    payerBankCity: "Payer bank city4.1",
    payerBankSettlementType: "Payer settlement type4.1",
    accountId: "accountId4.1",
    account: "Account4.1",
    bankName: "Bank name4.1",
    bankBic: "Bank BIC4.1",
    bankCorrAccount: "Bank corr account4.1",
  },
  {
    payerBankCity: "Payer bank city4.2",
    payerBankSettlementType: "Payer settlement type4.2",
    accountId: "accountId4.2",
    account: "Account4.2",
    bankName: "Bank name4.2",
    bankBic: "Bank BIC4.2",
    bankCorrAccount: "Bank corr account4.2",
  },
  {
    payerBankCity: "Payer bank city4.3",
    payerBankSettlementType: "Payer settlement type4.3",
    accountId: "accountId4.3",
    account: "Account4.3",
    bankName: "Bank name4.3",
    bankBic: "Bank BIC4.3",
    bankCorrAccount: "Bank corr account4.3",
  }]
},
{
  orgName: "Organisation name5",
  orgId: "Organisation id5",
  payerName: "Payer name5",
  payerInn: "Payer inn5",
  payerId: "Payer id5",
  accounts: [{
    payerBankCity: "Payer bank city5.1",
    payerBankSettlementType: "Payer settlement type5.1",
    accountId: "accountId5.1",
    account: "Account5.1",
    bankName: "Bank name5.1",
    bankBic: "Bank BIC5.1",
    bankCorrAccount: "Bank corr account5.1",
  },
  {
    payerBankCity: "Payer bank city5.2",
    payerBankSettlementType: "Payer settlement type5.2",
    accountId: "accountId5.2",
    account: "Account5.2",
    bankName: "Bank name5.2",
    bankBic: "Bank BIC5.2",
    bankCorrAccount: "Bank corr account5.2",
  },
  {
    payerBankCity: "Payer bank city5.3",
    payerBankSettlementType: "Payer settlement type5.3",
    accountId: "accountId5.3",
    account: "Account5.3",
    bankName: "Bank name5.3",
    bankBic: "Bank BIC5.3",
    bankCorrAccount: "Bank corr account5.3",
  }]
},
]

function mock() {}

function Organisations(props) {

  const selectOrg = index => {
    if (index === undefined) {
      index = 0;
    }
    //store.dispatch(mock(props.request.organisations[index]));
  }

  const selectAcc = index => {
    if (index === undefined) {
      index = 0;
    }
    //store.dispatch(mock(props.selectedOrg.org.accounts[index]));
  }

  const updateNewOrg = data => {}//store.dispatch(mock(data));
  const updateOrg = data => {}//store.dispatch(mock(data));
  const addOrgForUpdate = index => {
    // const org = props.request.organisations[index];
    // store.dispatch(mock(org, index));
  }

  return (
    <div className="Organisations">
      <OrganisationsView
        selectOrg={selectOrg}
        selectAcc={selectAcc}

        addOrgForUpdate={(index) => console.log("addOrgForUpdate=" + index)}
        saveUpdatedOrg={() => console.log("saveUpdatedOrg")}
        addAccToUpdateOrg={() => console.log("addAccToUpdateOrg")}
        removeAccFromUpdateOrg={(index) => console.log("removeAccFromUpdateOrg=" + index)}
        updateOrg={(data) => console.log("updateOrg={" + Object.keys(data)[0] + ": " + data[Object.keys(data)[0]] + "}")}
        updateAccInUpdateOrg={(data, index) => console.log("updateAccInUpdateOrg= " + index + ": {" + Object.keys(data)[0] + ": " + data[Object.keys(data)[0]] + "}")}

        saveNewOrg={() => console.log("saveNewOrg")}
        addAccToNewOrg={() => console.log("addAccToNewOrg")}
        removeAccFromNewOrg={(index) => console.log("removeAccFromNewOrg=" + index)}
        updateNewOrg={(data) => console.log("updateNewOrg={" + Object.keys(data)[0] + ": " + data[Object.keys(data)[0]] + "}")}
        updateAccInNewOrg={(data, index) => console.log("updateAccInNewOrg= " + index + ": {" + Object.keys(data)[0] + ": " + data[Object.keys(data)[0]] + "}")}
        
        removeOrg={(index) => console.log("removeOrg=" + index)}

        orgs={props.request.organisations}
        selected={props.selectedOrg}
      />
    </div>
  )
}

function mapStateToProps(store) {
  return {
    selectedOrg: store.organisation.selectedOrg,
    newOrg: store.organisation.newOrg,
    orgForUpdate: store.organisation.newOrg,
    request: {organisations: orgs},//store.organisation.request,
  }
}

function mapDispatchToProps(dispatch) {
    return {
        getOrgs: (action) => store.dispatch(mock(action)),
        postOrgs: (action) => store.dispatch(mock(action)),
        putOrgs: (action) => store.dispatch(mock(action)),
        deleteOrgs: (action) => store.dispatch(mock(action)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Organisations);

