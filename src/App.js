import './App.css';
import {  BrowserRouter, Route, Routes  } from 'react-router-dom';
import AddEvent from './components/AddEvent';
import Calendar from './components/Calendar';
import Enter from './components/Enter';
import Signin from './components/Signin';
import FindEvent from './components/FindEvent';
import AddEventToC from './components/AddEventToC'


function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Enter/>}></Route>
          <Route path="/Signin" element={<Signin/>}></Route>
          <Route path="/Add" element={<AddEventToC/>}></Route>
          <Route path="/Calendar/:id" element={<Calendar/>}></Route>
          <Route path="/AddEvnt/:id" element={<AddEvent/>}></Route>
          <Route path="//FindEvent/:id" element={<FindEvent/>}></Route>

        </Routes>
        </BrowserRouter>

   

    </div>
  );
}

export default App;
