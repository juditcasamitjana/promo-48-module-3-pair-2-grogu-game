import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";

function App() {
    let [grogu, setGrogu] = useState(0); //valor inicial del dato
    const [diceRoll, setdiceRoll] = useState(0);
    const [goodsCookies, setGoodsCookies] = useState(["🍪", "🍪", "🍪"]);
    const [goodsEggs, setGoodsEggs] = useState(["🥚", "🥚", "🥚"]);
    const [goodsFrogs, setGoodsFrogs] = useState(["🐸", "🐸", "🐸"]);
    let [gameStatus, setgameStatus] = useState("En curso");

    console.log(goodsCookies, goodsEggs, goodsFrogs);

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
            setGoodsFrogs(goodsFrogs.slice(1));
        }
    };

    return (
        <>
            <div>
                <Header />
                <main className="page">
                    <Board groguPosition={grogu} />
                    <section>
                        <Dice rollDice={rollDice} onClick={handleClickDice} />
                        <div className="game-status">{gameStatus}</div>
                    </section>

                    <section className="goods-container">
                        {goodsCookies.map((cookie) => {
                            return <div className="goods-item">{cookie}</div>;
                        })}
                    </section>
                    <section className="goods-container">
                        {goodsEggs.map((egg) => {
                            return <div className="goods-item">{egg}</div>;
                        })}
                    </section>
                    <section className="goods-container">
                        {goodsFrogs.map((frog) => {
                            return <div className="goods-item">{frog}</div>;
                        })}
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
