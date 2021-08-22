// import { LoginPage } from './pages/auth/LoginPage';

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { FirebaseProvider } from "./firebase/components/FirebaseProvider";
import { store } from "./redux/store";
import { AppRouter } from "./routes/AppRouter";
function App() {
    return (
        <FirebaseProvider>
            <Provider store={store}>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </Provider>
        </FirebaseProvider>
    );
}

export default App;
