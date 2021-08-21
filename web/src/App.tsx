// import { LoginPage } from './pages/auth/LoginPage';

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";
import "./App.css";
import { firebaseConfig } from "./firebase/firebaseConfig";
import { store } from "./redux/store";
import { AppRouter } from "./routes/AppRouter";
function App() {
    return (
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <Provider store={store}>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </Provider>
        </FirebaseAppProvider>
    );
}

export default App;
