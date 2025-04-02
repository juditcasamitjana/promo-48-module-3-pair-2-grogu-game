import { useEffect, useState } from "react";
import Board from "./Board";
import Dice from "./Dice";

function Game() {
    let [grogu, setGrogu] = useState(0); //valor inicial del dato
    const [diceRoll, setdiceRoll] = useState(0);
    const [goodsCookies, setGoodsCookies] = useState(["🍪", "🍪", "🍪"]);
    const [goodsEggs, setGoodsEggs] = useState(["🥚", "🥚", "🥚"]);
    const [goodsFrogs, setGoodsFrogs] = useState(["🐸", "🐸", "🐸"]);
    let [gameStatus, setgameStatus] = useState("En curso");

    useEffect(() => {
        if (grogu === 6) {
            //si grogu llega a la casilla 6
            setgameStatus("Has perdido!"); // pierdes
            return; // y para
        }

        if (
            goodsCookies.length === 0 &&
            goodsEggs.length === 0 &&
            goodsFrogs.length === 0
        ) {
            //si se acaba el cargamento
            setgameStatus("Enhorabuena!! Has ganado!!"); // ganas
            return;
        }
    }, [grogu, goodsCookies, goodsEggs, goodsFrogs]);

    console.log(goodsCookies, goodsEggs, goodsFrogs);

    const handleOnRollDice = (number) => {
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

    return(
        <>
        <Board groguPosition={grogu} />
                    <section>
                        <Dice onRollDice={handleOnRollDice} />
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
        </>
    )
}

export default Game;