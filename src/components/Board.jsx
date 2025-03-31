import Grogu from "./Grogu";

function Board(props) {
    const cells = new Array(7).fill(null);

    return (
        <section className="board">
            {cells.map((cell, index) => {
                return (
                    <div className="cell" key={index}>
                        {index === props.groguPosition ? <Grogu /> : null}
                        <Grogu />
                    </div>
                );
            })}

            {/* <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div> */}
        </section>
    );
}

export default Board;
