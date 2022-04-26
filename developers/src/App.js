
import './App.css';
import NavigationBar from './components/Navigation/Navigation.component'

import './App.css';
import Carousel from './components/Carousel/Carousel.component'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Carousel></Carousel>
      </header>
      <NavigationBar></NavigationBar>
    </div>
  );
}

export default App;
