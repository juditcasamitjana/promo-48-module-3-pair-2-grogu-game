const Dice = ({ rollDice }) => {
    const handleClickDice = () => {
        rollDice();
    };

    return (
        <button className="dice" onClick={handleClickDice}>
            Lanzar Dado
        </button>
    );
};

export default Dice;
