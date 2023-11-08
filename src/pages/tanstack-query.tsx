import React, {Suspense} from 'react';
import {View, Text, Button, ScrollView} from 'react-native';
import {createRandomReport} from '../lib/local-source/reportSource';
import {addReport, useAllReports} from '../lib/reports';

function EditComponent() {
  return (
    <View style={{flex: 1}}>
      <Button
        title="Create report"
        onPress={() => {
          const name = createRandomReport(0).reportName;
          addReport(name);
        }}
      />
    </View>
  );
}

function ReactWithSqlite() {
  const {data} = useAllReports();

  if (!data.length) {
    return <Text>No data</Text>;
  }

  return (
    <View style={{flex: 1, padding: 4, backgroundColor: 'lightgreen'}}>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
}

function TanstackQueryScreen() {
  return (
    <ScrollView>
      <EditComponent />

      <Suspense fallback={<Text>Loading reports...</Text>}>
        <ReactWithSqlite />
      </Suspense>
    </ScrollView>
  );
}

export default TanstackQueryScreen;
