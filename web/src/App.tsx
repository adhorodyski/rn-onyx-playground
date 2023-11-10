import {addReport, useAllReports} from './db';

function App() {
  const {data} = useAllReports();

  return (
    <div>
      <h1>Reports</h1>
      <button onClick={() => addReport(Math.random() > 0.5 ? 'foo' : 'bar')}>
        Add report
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
