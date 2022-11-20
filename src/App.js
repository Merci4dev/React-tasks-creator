import logo from './logo.svg';
import './App.css';
// import CrudApp from './components/curd/CrudApp.js';
import TodoList from './components/todoLIst/TodoList';

function App() {

  return (

    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='author'>
            <p>React Project</p>
            <p>Merci4dev</p>
          </div>
        </header>

          <div>
            <h2 className='p-3 text-primary'>Tasks Creator App</h2>
          </div>

        <div className='container text-white col-md-6 offset-md-5 m-auto'>
          {/* <CrudApp/> */}
          <TodoList/>
          
        </div>

          
    </div>

  );
}

export default App;
