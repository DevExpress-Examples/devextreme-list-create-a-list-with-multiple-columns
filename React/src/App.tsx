import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import List from 'devextreme-react/list';
import { tasks } from './data';

function App(): JSX.Element {
  return (
    <div className="main">
      <List
        dataSource={tasks}
        height={300}
        showSelectionControls={true}
        selectionMode="multiple"
      />
    </div>
  );
}

export default App;
