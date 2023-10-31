import {
  rand,
  randAvatar,
  randEmail,
  randBoolean,
  randCurrencyCode,
  randNumber,
  randPastDate,
  randWord,
} from '@ngneat/falso';
import {createRandomCollection} from './utils';

function createRandomPolicy(index: number) {
  return {
    id: index.toString(),
    name: randWord(),
    role: rand(['admin', 'auditor', 'user']),
    type: rand(['free', 'personal', 'corporate', 'team']),
    owner: randEmail(),
    ownerAccountID: randNumber({length: 16}).toLocaleString(),
    outputCurrency: randCurrencyCode(),
    avatar: randAvatar(),
    errorFields: {},
    pendingAction: {},
    errors: {},
    isFromFullPolicy: randBoolean(),
    lastModified: randPastDate().toISOString(),
    customUnits: {},
    areChatRoomsEnabled: randBoolean(),
    isPolicyExpenseChatEnabled: randBoolean(),
    autoReporting: randBoolean(),
    autoReportingFrequency: rand(['immediate', 'weekly', 'monthly']),
  };
}

function createRandomPoliciesMap(length = 500) {
  return createRandomCollection('policies', createRandomPolicy, length);
}

export {createRandomPolicy, createRandomPoliciesMap};
export type Policy = ReturnType<typeof createRandomPolicy>;
