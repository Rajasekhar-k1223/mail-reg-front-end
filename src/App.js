import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomPage from './Components/WelcomPage';
import Dashboard from './Components/DashboardPage';
import CreateDomain from './Components/CreateDomain';
import GetMXCname from './Components/GetMXCname';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import DomainDetails from './Components/DomainDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>

        <Route index element={<WelcomPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/createDomain' element={<CreateDomain />} />
        <Route path='/domainDetails' element={<DomainDetails />} />
        <Route path='/getMXCname' element={<GetMXCname />} />
        

      </Routes>
      </BrowserRouter>
  );
}

export default App;
