
import './App.css';
import Card from './components/Card/Card.component'

function App() {
  return (
    <div className="App">
     <Card text={false}></Card>
     <Card text={true}></Card>
    </div>
  );
}

export default App;
