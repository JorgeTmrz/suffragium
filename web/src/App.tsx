// import { LoginPage } from './pages/auth/LoginPage';

import "./App.css"
import Dashboard from './pages/admin/Dashboard';
import { GlobalProvider } from './components/GlobalContext';
function App() {
  return (
    <GlobalProvider>
      <Dashboard/>
    </GlobalProvider>
  );
}

export default App;
