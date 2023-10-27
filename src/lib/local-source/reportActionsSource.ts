import CONST from '../constants';
import OriginalMessage from './originalMessage';

type Decision = {
  decision: 'hidden' | 'pending' | 'pendingHide' | 'pendingRemove' | 'approved';
  timestamp: string;
};

type User = {
  accountID: number;
  skinTone: number;
};

type Reaction = {
  emoji: string;
  users: User[];
};

type Person = {
  type?: string;
  style?: string;
  text?: string;
};

type Message = {
  /** The type of the action item fragment. Used to render a corresponding component */
  type: string;

  /** The html content of the fragment. */
  html: string;

  /** The text content of the fragment. */
  text: string;

  /** Used to apply additional styling. Style refers to a predetermined constant and not a class name. e.g. 'normal'
   * or 'strong'
   */
  style?: string;

  /** ID of a report */
  reportID?: string;

  /** ID of a policy */
  policyID?: string;

  /** The target of a link fragment e.g. '_blank' */
  target?: string;

  /** The destination of a link fragment e.g. 'https://www.expensify.com' */
  href?: string;

  /** An additional avatar url - not the main avatar url but used within a message. */
  iconUrl?: string;

  /** Fragment edited flag */
  isEdited: boolean;

  isDeletedParentAction: boolean;

  /** Whether the pending transaction was reversed and didn't post to the card */
  isReversedTransaction?: boolean;
  whisperedTo: number[];
  reactions: Reaction[];

  moderationDecision?: Decision;
  translationKey?: string;
};

type ReportActionBase = {
  /** The ID of the reportAction. It is the string representation of the a 64-bit integer. */
  reportActionID: string;

  /** @deprecated Used in old report actions before migration. Replaced by reportActionID. */
  sequenceNumber?: number;

  /** The ID of the previous reportAction on the report. It is a string represenation of a 64-bit integer (or null for CREATED actions). */
  previousReportActionID?: string;

  actorAccountID?: number;

  /** Person who created the action */
  person?: Person[];

  /** ISO-formatted datetime */
  created: string;

  /** report action message */
  message?: Message[];

  /** Whether we have received a response back from the server */
  isLoading?: boolean;

  /** Error message that's come back from the server. */
  error?: string;

  /** accountIDs of the people to which the whisper was sent to (if any). Returns empty array if it is not a whisper */
  whisperedToAccountIDs?: number[];

  avatar?: string;
  automatic?: boolean;
  shouldShow?: boolean;
  childReportID?: string;
  childReportName?: string;
  childType?: string;
  childOldestFourEmails?: string;
  childOldestFourAccountIDs?: string;
  childCommenterCount?: number;
  childLastVisibleActionCreated?: string;
  childVisibleActionCount?: number;
  childMoneyRequestCount?: number;

  /** ISO-formatted datetime */
  lastModified?: string;

  pendingAction?: 'delete' | 'add' | 'update';
  delegateAccountID?: string;

  /** Server side errors keyed by microtime */
  errors?: Record<string, string>;

  isAttachment?: boolean;
};

export type ReportAction = ReportActionBase & OriginalMessage;
export type ReportActions = Record<string, ReportAction>;

const reportActionsSource = [
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'safari c',
        text: 'safari c',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'safari c',
      lastModified: '2023-08-23 17:52:13.856',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-23 17:52:13.856',
    timestamp: 1692813133,
    reportActionTimestamp: 1692813133856,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '3001309161075597269',
    previousReportActionID: '4773320097354174279',
    lastModified: '2023-08-23 17:52:13.856',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'safari b',
        text: 'safari b',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'safari b',
      lastModified: '2023-08-23 17:51:53.240',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-23 17:51:53.240',
    timestamp: 1692813113,
    reportActionTimestamp: 1692813113240,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '4773320097354174279',
    previousReportActionID: '859580281688464618',
    lastModified: '2023-08-23 17:51:53.240',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'testing',
        text: 'testing',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'testing',
      lastModified: '2023-08-23 14:01:18.838',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-23 14:01:18.838',
    timestamp: 1692799278,
    reportActionTimestamp: 1692799278838,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '1113057472752068484',
    previousReportActionID: '5735256724035687148',
    lastModified: '2023-08-23 14:01:18.838',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'hey',
        text: 'hey',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'hey',
      lastModified: '2023-08-23 14:01:15.849',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-23 14:01:15.849',
    timestamp: 1692799275,
    reportActionTimestamp: 1692799275849,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '5735256724035687148',
    previousReportActionID: '8119679455199402328',
    lastModified: '2023-08-23 14:01:15.849',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'bbbbbbbbbbbb',
        text: 'bbbbbbbbbbbb',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'bbbbbbbbbbbb',
      lastModified: '2023-08-22 18:13:13.119',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-22 18:13:13.119',
    timestamp: 1692727993,
    reportActionTimestamp: 1692727993119,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '8119679455199402328',
    previousReportActionID: '7761711493910220668',
    lastModified: '2023-08-22 18:13:13.119',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'aaaaaaa',
        text: 'aaaaaaa',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'aaaaaaa',
      lastModified: '2023-08-22 18:12:30.337',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-22 18:12:30.337',
    timestamp: 1692727950,
    reportActionTimestamp: 1692727950337,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '7761711493910220668',
    previousReportActionID: '4301478288646852377',
    lastModified: '2023-08-22 18:12:30.337',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'dddd',
        text: 'dddd',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'dddd',
      lastModified: '2023-08-22 17:52:15.139',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-22 17:52:15.139',
    timestamp: 1692726735,
    reportActionTimestamp: 1692726735139,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '4301478288646852377',
    previousReportActionID: '8702134279044817843',
    lastModified: '2023-08-22 17:52:15.139',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'new ones are coming',
        text: 'new ones are coming',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'new ones are coming',
      lastModified: '2023-08-22 17:51:10.025',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-22 17:51:10.025',
    timestamp: 1692726670,
    reportActionTimestamp: 1692726670025,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '8702134279044817843',
    previousReportActionID: '3896642591472234103',
    lastModified: '2023-08-22 17:51:10.025',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'Hey',
        text: 'Hey',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'Hey',
      lastModified: '2023-08-22 17:50:41.264',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-22 17:50:41.264',
    timestamp: 1692726641,
    reportActionTimestamp: 1692726641264,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '3896642591472234103',
    previousReportActionID: '6380397140130633318',
    lastModified: '2023-08-22 17:50:41.264',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: 'lol',
        text: 'lol',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'lol',
      lastModified: '2023-08-16 17:19:05.162',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-16 17:19:05.162',
    timestamp: 1692206345,
    reportActionTimestamp: 1692206345162,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '6380397140130633318',
    previousReportActionID: '8203086704621524285',
    lastModified: '2023-08-16 17:19:05.162',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: 'show green',
        text: 'show green',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'show green',
      lastModified: '2023-08-16 16:52:44.870',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-16 16:52:44.870',
    timestamp: 1692204764,
    reportActionTimestamp: 1692204764870,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '8203086704621524285',
    previousReportActionID: '1508001445645051920',
    lastModified: '2023-08-16 16:52:44.870',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: 'run',
        text: 'run',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'run',
      lastModified: '2023-08-16 16:51:55.597',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-16 16:51:55.597',
    timestamp: 1692204715,
    reportActionTimestamp: 1692204715597,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '1508001445645051920',
    previousReportActionID: '4444056063931252060',
    lastModified: '2023-08-16 16:51:55.597',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: 'hey',
        text: 'hey',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'hey',
      lastModified: '2023-08-16 16:36:48.385',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-16 16:36:48.385',
    timestamp: 1692203808,
    reportActionTimestamp: 1692203808385,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '4444056063931252060',
    previousReportActionID: '6777407626263218463',
    lastModified: '2023-08-16 16:36:48.385',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: '22222222',
        text: '22222222',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: '22222222',
      lastModified: '2023-08-11 18:29:15.958',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-11 18:29:15.958',
    timestamp: 1691778555,
    reportActionTimestamp: 1691778555958,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '6777407626263218463',
    previousReportActionID: '6573064325503484861',
    lastModified: '2023-08-11 18:29:15.958',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: '11111',
        text: '11111',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: '11111',
      lastModified: '2023-08-11 18:27:57.710',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-11 18:27:57.710',
    timestamp: 1691778477,
    reportActionTimestamp: 1691778477710,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '6573064325503484861',
    previousReportActionID: '1099847379756041979',
    lastModified: '2023-08-11 18:27:57.710',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'randomlag',
        text: 'randomlag',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'randomlag',
      lastModified: '2023-08-11 18:27:45.001',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-11 18:27:45.001',
    timestamp: 1691778465,
    reportActionTimestamp: 1691778465001,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '1099847379756041979',
    previousReportActionID: '9068094578546967467',
    lastModified: '2023-08-11 18:27:45.001',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'random',
        text: 'random',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'random',
      lastModified: '2023-08-11 18:26:29.702',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-11 18:26:29.702',
    timestamp: 1691778389,
    reportActionTimestamp: 1691778389702,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '9068094578546967467',
    previousReportActionID: '1358379918448305791',
    lastModified: '2023-08-11 18:26:29.702',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: '111',
        text: '111',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: '111',
      lastModified: '2023-08-11 18:26:21.856',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-11 18:26:21.856',
    timestamp: 1691778381,
    reportActionTimestamp: 1691778381856,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '1358379918448305791',
    previousReportActionID: '5755530190804271886',
    lastModified: '2023-08-11 18:26:21.856',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: '00000',
        text: '00000',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: '00000',
      lastModified: '2023-08-11 18:26:21.098',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-11 18:26:21.098',
    timestamp: 1691778381,
    reportActionTimestamp: 1691778381098,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '5755530190804271886',
    previousReportActionID: '1591369241914839447',
    lastModified: '2023-08-11 18:26:21.098',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: '99999',
        text: '99999',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: '99999',
      lastModified: '2023-08-11 18:26:20.290',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-11 18:26:20.290',
    timestamp: 1691778380,
    reportActionTimestamp: 1691778380290,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '1591369241914839447',
    previousReportActionID: '232410469613545592',
    lastModified: '2023-08-11 18:26:20.290',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: '8888',
        text: '8888',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: '8888',
      lastModified: '2023-08-11 18:26:19.493',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-11 18:26:19.493',
    timestamp: 1691778379,
    reportActionTimestamp: 1691778379493,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '232410469613545592',
    previousReportActionID: '4869445561508000847',
    lastModified: '2023-08-11 18:26:19.493',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: '7777',
        text: '7777',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: '7777',
      lastModified: '2023-08-11 18:26:18.746',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-11 18:26:18.746',
    timestamp: 1691778378,
    reportActionTimestamp: 1691778378746,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '4869445561508000847',
    previousReportActionID: '3562393904173433066',
    lastModified: '2023-08-11 18:26:18.746',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: '66666',
        text: '66666',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: '66666',
      lastModified: '2023-08-11 18:26:17.988',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-11 18:26:17.988',
    timestamp: 1691778377,
    reportActionTimestamp: 1691778377988,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '3562393904173433066',
    previousReportActionID: '7366283574167135213',
    lastModified: '2023-08-11 18:26:17.988',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: '55555',
        text: '55555',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: '55555',
      lastModified: '2023-08-11 18:26:17.236',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-11 18:26:17.236',
    timestamp: 1691778377,
    reportActionTimestamp: 1691778377236,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '7366283574167135213',
    previousReportActionID: '3554233763106883961',
    lastModified: '2023-08-11 18:26:17.236',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: '444444',
        text: '444444',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: '444444',
      lastModified: '2023-08-11 18:26:16.465',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-11 18:26:16.465',
    timestamp: 1691778376,
    reportActionTimestamp: 1691778376465,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '3554233763106883961',
    previousReportActionID: '3975091801373631410',
    lastModified: '2023-08-11 18:26:16.465',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: '33333',
        text: '33333',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: '33333',
      lastModified: '2023-08-11 18:26:15.688',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-11 18:26:15.688',
    timestamp: 1691778375,
    reportActionTimestamp: 1691778375688,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '3975091801373631410',
    previousReportActionID: '7304637025208713882',
    lastModified: '2023-08-11 18:26:15.688',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: '22222',
        text: '22222',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: '22222',
      lastModified: '2023-08-11 18:26:14.960',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-11 18:26:14.960',
    timestamp: 1691778374,
    reportActionTimestamp: 1691778374960,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '7304637025208713882',
    previousReportActionID: '6132182330418719772',
    lastModified: '2023-08-11 18:26:14.960',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'yeaaah',
        text: 'yeaaah',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'yeaaah',
      lastModified: '2023-08-11 18:26:12.005',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-11 18:26:12.005',
    timestamp: 1691778372,
    reportActionTimestamp: 1691778372005,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '6132182330418719772',
    previousReportActionID: '4054618384257774883',
    lastModified: '2023-08-11 18:26:12.005',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'woooww',
        text: 'woooww',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'woooww',
      lastModified: '2023-08-11 18:26:06.806',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-11 18:26:06.806',
    timestamp: 1691778366,
    reportActionTimestamp: 1691778366806,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '4054618384257774883',
    previousReportActionID: '2456983741154929486',
    lastModified: '2023-08-11 18:26:06.806',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: '1111',
        text: '1111',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: '1111',
      lastModified: '2023-08-11 18:25:46.456',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-11 18:25:46.456',
    timestamp: 1691778346,
    reportActionTimestamp: 1691778346456,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '2456983741154929486',
    previousReportActionID: '3022511089383667727',
    lastModified: '2023-08-11 18:25:46.456',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'random',
        text: 'random',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'random',
      lastModified: '2023-08-11 18:24:58.197',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-11 18:24:58.197',
    timestamp: 1691778298,
    reportActionTimestamp: 1691778298197,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '3022511089383667727',
    previousReportActionID: '1959013237168650075',
    lastModified: '2023-08-11 18:24:58.197',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'more stuff',
        text: 'more stuff',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'more stuff',
      lastModified: '2023-08-11 18:24:52.986',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-11 18:24:52.986',
    timestamp: 1691778292,
    reportActionTimestamp: 1691778292986,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '1959013237168650075',
    previousReportActionID: '7030344296020711883',
    lastModified: '2023-08-11 18:24:52.986',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'keep sendin',
        text: 'keep sendin',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'keep sendin',
      lastModified: '2023-08-11 18:24:48.578',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-11 18:24:48.578',
    timestamp: 1691778288,
    reportActionTimestamp: 1691778288578,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '7030344296020711883',
    previousReportActionID: '6189502861929408952',
    lastModified: '2023-08-11 18:24:48.578',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'more stuff',
        text: 'more stuff',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'more stuff',
      lastModified: '2023-08-11 18:24:29.507',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-11 18:24:29.507',
    timestamp: 1691778269,
    reportActionTimestamp: 1691778269507,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '6189502861929408952',
    previousReportActionID: '5591008819047816727',
    lastModified: '2023-08-11 18:24:29.507',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'random',
        text: 'random',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'random',
      lastModified: '2023-08-11 18:24:25.784',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-11 18:24:25.784',
    timestamp: 1691778265,
    reportActionTimestamp: 1691778265784,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '5591008819047816727',
    previousReportActionID: '154751925738987625',
    lastModified: '2023-08-11 18:24:25.784',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'what next',
        text: 'what next',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'what next',
      lastModified: '2023-08-11 18:24:22.457',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-11 18:24:22.457',
    timestamp: 1691778262,
    reportActionTimestamp: 1691778262457,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '154751925738987625',
    previousReportActionID: '4752117156322562297',
    lastModified: '2023-08-11 18:24:22.457',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'all good?',
        text: 'all good?',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'all good?',
      lastModified: '2023-08-11 18:24:18.728',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-11 18:24:18.728',
    timestamp: 1691778258,
    reportActionTimestamp: 1691778258728,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '4752117156322562297',
    previousReportActionID: '8940063906456053638',
    lastModified: '2023-08-11 18:24:18.728',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'hey',
        text: 'hey',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'hey',
      lastModified: '2023-08-11 18:24:13.376',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-11 18:24:13.376',
    timestamp: 1691778253,
    reportActionTimestamp: 1691778253376,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '8940063906456053638',
    previousReportActionID: '6225638391889539548',
    lastModified: '2023-08-11 18:24:13.376',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'cool',
        text: 'cool',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'cool',
      lastModified: '2023-08-10 11:51:53.118',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-10 11:51:53.118',
    timestamp: 1691668313,
    reportActionTimestamp: 1691668313118,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '8350483180585474598',
    previousReportActionID: '3219154408012514852',
    lastModified: '2023-08-10 11:51:53.118',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'nice',
        text: 'nice',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'nice',
      lastModified: '2023-08-10 11:51:27.055',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-10 11:51:27.055',
    timestamp: 1691668287,
    reportActionTimestamp: 1691668287055,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '3219154408012514852',
    previousReportActionID: '9068813117162574505',
    lastModified: '2023-08-10 11:51:27.055',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'lol',
        text: 'lol',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'lol',
      lastModified: '2023-08-10 11:12:29.281',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-10 11:12:29.281',
    timestamp: 1691665949,
    reportActionTimestamp: 1691665949281,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '9068813117162574505',
    previousReportActionID: '6885155317645034317',
    lastModified: '2023-08-10 11:12:29.281',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: 'hey',
        text: 'hey',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'hey',
      lastModified: '2023-08-10 11:01:11.147',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-10 11:01:11.147',
    timestamp: 1691665271,
    reportActionTimestamp: 1691665271147,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '6885155317645034317',
    previousReportActionID: '2545259573766546316',
    lastModified: '2023-08-10 11:01:11.147',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'jijij',
        text: 'jijij',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'jijij',
      lastModified: '2023-08-10 10:45:14.103',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-10 10:45:14.103',
    timestamp: 1691664314,
    reportActionTimestamp: 1691664314103,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '2545259573766546316',
    previousReportActionID: '876568815591812743',
    lastModified: '2023-08-10 10:45:14.103',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'eduardo.graciano+new1@callstack.com',
      },
    ],
    actorAccountID: 15221359,
    message: [
      {
        type: 'COMMENT',
        html: 'Hi there',
        text: 'Hi there',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'Hi there',
      lastModified: '2023-08-08 15:53:14.631',
    },
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_18.png',
    created: '2023-08-08 15:53:14.631',
    timestamp: 1691509994,
    reportActionTimestamp: 1691509994631,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '876568815591812743',
    previousReportActionID: '1497344643946838438',
    lastModified: '2023-08-08 15:53:14.631',
    whisperedToAccountIDs: [],
  },
  {
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: 'Edu HG Traffic',
      },
    ],
    actorAccountID: 14395114,
    message: [
      {
        type: 'COMMENT',
        html: 'Hey',
        text: 'Hey',
        isEdited: false,
        whisperedTo: [],
        isDeletedParentAction: false,
        reactions: [],
      },
    ],
    originalMessage: {
      html: 'Hey',
      lastModified: '2023-08-08 15:52:52.593',
    },
    avatar:
      'https://d1wpcgnaa73g0y.cloudfront.net/44901662618628e85271b86d3859144f92c7591f_128.jpeg',
    created: '2023-08-08 15:52:52.593',
    timestamp: 1691509972,
    reportActionTimestamp: 1691509972593,
    automatic: false,
    actionName: 'ADDCOMMENT',
    shouldShow: true,
    reportActionID: '1497344643946838438',
    previousReportActionID: '1741382470985922358',
    lastModified: '2023-08-08 15:52:52.593',
    whisperedToAccountIDs: [],
  },
  {
    reportActionID: '1741382470985922358',
    previousReportActionID: '0',
    actionName: 'CREATED',
    created: '2023-08-08 15:51:55.664',
    reportActionTimestamp: 1691509915664,
    avatar:
      'https://d2k5nsl2zxldvw.cloudfront.net/images/avatars/default-avatar_20.png',
    message: [
      {
        type: 'TEXT',
        style: 'strong',
        text: '__fake__',
      },
      {
        type: 'TEXT',
        style: 'normal',
        text: ' created this report',
      },
    ],
    person: [
      {
        type: 'TEXT',
        style: 'strong',
        text: '__fake__',
      },
    ],
    automatic: false,
    sequenceNumber: 0,
    shouldShow: true,
    lastModified: '2023-08-08 15:51:55.664',
  },
];

export default reportActionsSource;
