import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AddTraining from './trainings/AddTraining';
import EditTraining from './trainings/EditTraining';
import ViewTraining from './trainings/ViewTraining';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/addTraining" element={<AddTraining/>}/>
          <Route exact path="/editTraining/:id" element={<EditTraining/>}/>
          <Route exact path="/viewTraining/:id" element={<ViewTraining />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;