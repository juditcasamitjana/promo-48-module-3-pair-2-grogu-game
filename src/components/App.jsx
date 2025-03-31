import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";

const numberOfCell = 7; //fuera porque no variará durante el juego

function App() {
    let [grogu, setGrogu] = useState(0); //valor inicial del dato
    const [diceRoll, setdiceRoll] = useState(0);
    const [goodsCookies, setGoodsCookies] = useState(["🍪", "🍪", "🍪"]);
    const [goodsEggs, setGoodsEggs] = useState(["🥚", "🥚", "🥚"]);
    const [goodsFrog, setGoodsFrog] = useState(["🐸", "🐸", "🐸"]);
    let [gameStatus, setgameStatus] = useState("En curso");

    const handleClickDice = () => {
        const number = rollDice();
        setdiceRoll(number);

        if (number === 4) {
            setGrogu(grogu + 1);
        } else if (number === 1) {
            setGoodsCookies(goodsCookies.slice(1));
        } else if (number === 2) {
            setGoodsEggs(goodsEggs.slice(1));
        } else {
            setGoodsFrog(goodsFrog.slice(1));
        }
    };

    return (
        <>
            <div>
                <Header />
                <main className="page">
                    <Board />
                    <section>
                        <Dice rollDice={rollDice} />
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
                        <button className="restart-button">
                            Reiniciar Juego
                        </button>
                    </section>
                </main>
            </div>
        </>
    );
}

function rollDice() {
    const number = Math.floor(Math.random() * 4) + 1;
    console.log("Tiro de dado", number);

    return number;
}

export default App;
