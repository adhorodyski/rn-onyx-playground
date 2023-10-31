import {createRandomCollection} from './utils';
import {
  rand,
  randBoolean,
  randCurrencyCode,
  randEmail,
  randNumber,
  randPastDate,
  randUrl,
  randWord,
} from '@ngneat/falso';

function createRandomReport(index: number) {
  return {
    reportID: index.toString(),
    reportName: `#${randWord()}`,
    type: rand(['chat']),
    chatType: rand(['policyAdmins', 'policyParticipants']),
    ownerEmail: randEmail(),
    ownerAccountID: randNumber({length: 16}).toString(),
    managerEmail: randEmail(),
    managerID: randNumber({length: 16}).toString(),
    policyID: index.toString(),
    participantAccountIDs: [randNumber({length: 16}).toString()],
    isPinned: randBoolean(),
    lastReadTime: randPastDate().toISOString(),
    lastReadSequenceNumber: randNumber(),
    lastVisibleActionCreated: randPastDate().toISOString(),
    lastVisibleActionLastModified: randPastDate().toISOString(),
    lastMessageText: randWord(),
    lastActorAccountID: randNumber(),
    notificationPreference: rand(['always']),
    welcomeMessage: randWord(),
    stateNum: randNumber(),
    statusNum: randNumber(),
    oldPolicyName: randWord(),
    isOwnPolicyExpenseChat: randBoolean(),
    lastMessageHtml: '',
    hasOutstandingIOU: randBoolean(),
    writeCapability: rand(['all']),
    total: randNumber(),
    currency: randCurrencyCode(),
    submitterPayPalMeAddress: randUrl(),
    isWaitingOnBankAccount: randBoolean(),
    hasDraft: randBoolean(),
    pendingFields: {
      createChat: null,
    },
    errorFields: {
      createChat: null,
    },
    isOptimizedReport: randBoolean(),
  };
}

function createRandomReportsMap(length = 500) {
  return createRandomCollection('reports', createRandomReport, length);
}

export {createRandomReport, createRandomReportsMap};
export type Report = ReturnType<typeof createRandomReport>;
