import "../scss/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import Instructions from "./Instructions";
import Options from "./Options";
import Game from "./Game";

import { Route, Router, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <div>
                <Header />
                <main className="page">
                    <Routes>
                        <Route path="/instructions" element={<Instructions />}/>
                        <Route path="/" element={<Game />}/>
                        <Route path="/options" element={<Options />}/>
                    </Routes>                    
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
