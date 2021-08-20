// import { LoginPage } from './pages/auth/LoginPage';

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { GlobalProvider } from "./components/GlobalContext";
import { AppRouter } from "./routes/AppRouter";
function App() {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </GlobalProvider>
    );
}

export default App;
