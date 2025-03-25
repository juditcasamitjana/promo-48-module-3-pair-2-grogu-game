import "../scss/App.scss";
import { useState } from "react";

const numberOfCell = 7; //fuera porque no variará durante el juego

function App() {
    let [grogu, setGrogu] = useState(0); //valor inicial del dato
    const [rollDice, setRollDice] = useState(0);
    const [cookies, setCookies] = useState(3);
    const [eggs, setEggs] = useState(3);
    const [frogs, setFrogs] = useState(3);
    let [gameStatus, setgameStatus] = useState("En curso");

    return (
        <>
            <header>
                <h1>¡Cuidado con Grogu!</h1>
            </header>
            <main className="page">
                <section className="board">
                    <div className="cell">
                        <div className="grogu">👣</div>
                    </div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                    <div className="cell"></div>
                </section>

                <section>
                    <button className="dice">Lanzar Dado</button>
                    <div className="game-status">{gameStatus}</div>
                </section>

                <section className="goods-container">
                    <div className="goods-item">🍪</div>
                    <div className="goods-item">🍪</div>
                    <div className="goods-item">🍪</div>
                </section>
                <section className="goods-container">
                    <div className="goods-item">🥚</div>
                    <div className="goods-item">🥚</div>
                    <div className="goods-item">🥚</div>
                </section>
                <section className="goods-container">
                    <div className="goods-item">🐸</div>
                    <div className="goods-item">🐸</div>
                    <div className="goods-item">🐸</div>
                </section>
                <section>
                    <button className="restart-button">Reiniciar Juego</button>
                </section>
            </main>
        </>
    );
}

export default App;
