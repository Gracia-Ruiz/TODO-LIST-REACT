import './App.css';
import logo from './images/logo.gif';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='App'>
        <h1>Mis tareas pendientes</h1>
      <div className='container-main'>
      <img src={logo} className='logo' alt='Logo lista de tareas' height={60} width={60} />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
