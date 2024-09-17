import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomPage from './Components/WelcomPage';
import Dashboard from './Components/DashboardPage';
import CreateDomain from './Components/CreateDomain';
import GetMXCname from './Components/GetMXCname';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import DomainDetails from './Components/DomainDetails';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignUpForm';

function App() {
  return (
    <BrowserRouter>
    <Routes>

        <Route index element={<WelcomPage />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/signup' element={<SignupForm />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/createDomain' element={<CreateDomain />} />
        <Route path='/domainDetails' element={<DomainDetails />} />
        <Route path='/getMXCname' element={<GetMXCname />} />
        

      </Routes>
      </BrowserRouter>
  );
}

export default App;
