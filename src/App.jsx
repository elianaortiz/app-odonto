import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import AppRoutes from "./Routes/AppRoutes";
import { ContextProvider } from "./Components/utils/global.context";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
      <ContextProvider>
        <div className="App">
          <BrowserRouter>
            <Navbar/>
            <AppRoutes/>
            <Footer/>
          </BrowserRouter>
        </div>
      </ContextProvider>
    
  );
}

export default App;
