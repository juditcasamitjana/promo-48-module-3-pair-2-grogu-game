const Dice = ({ onRollDice }) => { // prop para que avise a la madre cuando se tiren los dados y le pasa el num del dado
    const handleClickDice = () => { 
        const number = rollDice(); // la función que genera el núm aleatorio (rollDice), lo almacena en number
        onRollDice(number) // lifting --> le pasa la variable number a la madre por las props
    };

    return ( //esta función avisa cuando se clica en handleClickDice 
        <button className="dice" onClick={handleClickDice}> 
            Lanzar Dado
        </button>
    );
};

function rollDice() { //función que genera el núm aleatorio
    const number = Math.floor(Math.random() * 4) + 1;
    console.log("Tiro de dado", number);

    return number;
}

export default Dice;
