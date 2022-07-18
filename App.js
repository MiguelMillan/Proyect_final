import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./views/Home/Home";
import Login from "./views/Login";
import Logaut from "./views/Logaut";
import Private from "./views/Private";
import { HOME, LOGIN, LOGAUT, PRIVATE } from "./Config/Routes/paths";
import AuthContextsProvider from "./contexts/AuthContexts";
import PrivateRoute from "./component/router/PrivateRoute";
import PublicRoute from "./component/router/PublicRoute";

function App() {
  return (
<>

     <Header />
    <AuthContextsProvider>
      <BrowserRouter>
        <Routes>
          <Route path={HOME} element={<PublicRoute />}>
          <Route path="/comer" element={<Donde_comer />}>
          <Route path="/dormir" element={<Donde_Dormir />}>
          <Route path="/comprar" element={<Donde_Comprar />}>
          <Route path="/visitar" element={<Que_Visitar />}>
          <Route path="/turismoActivo" element={<Turismo_Activo />}>
          <Route path="/fiestaPopulares" element={<Fiesta_Populares />}>
          <Route path="/ciudadano" element={<Informarcion_Ciudadano />}>
          <Route path={LOGIN} element={<Login />} />
          <Route path={PRIVATE} element={<PrivateRoute />}>
          <Route index element={<Private />} />
          <Route path={LOGAUT} element={<Logaut />} />
          </Route>
          </Route>
          </Route>
          </Route>
          </Route>
          </Route>
          </Route>
          </Route>
          </Route>
          </Routes>
          </BrowserRouter>
          </AuthContextsProvider>
    <Footer/>
    </>
  );
}

export default App;
