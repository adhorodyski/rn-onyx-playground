import Realm, {type ObjectSchema} from 'realm';

export interface Report {
  reportID: string;
  name: string;
  isPinned: boolean;
  chatType: 'policyAnnounce' | 'policyDiscuss' | 'policyRoom';
  isOwnPolicyExpenseChat: boolean;
  lastReadTime: Date;
  policyID?: string;
}

export class Report extends Realm.Object<Report> {
  static schema: ObjectSchema = {
    name: 'Report',
    properties: {
      reportID: 'objectId',
      name: 'string',
      isPinned: 'bool',
      chatType: 'string',
      isOwnPolicyExpenseChat: 'bool',
      lastReadTime: 'date',
      policyID: 'string?',
    },
    primaryKey: 'reportID',
  };
}
