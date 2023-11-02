import type Realm from 'realm';
import {createRealmContext} from '@realm/react';
import {Report} from './realm-models';

// Create a configuration object
const realmConfig: Realm.Configuration = {
  schema: [Report],
};
// Create a realm context
export const {RealmProvider, useRealm, useObject, useQuery} =
  createRealmContext(realmConfig);
