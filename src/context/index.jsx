import { useState, createContext } from "react";
import { ToastContainer, toast } from 'react-toastify';

const MyContext = createContext();

const MyProvider = (props) => {
    const [stage, setStage] = useState(1);
    const [player, setPlayer] = useState([]);
    const [result, setResult] = useState('');

    const addPlayerHandler = (name) => {
        setPlayer(prevState => ([
            ...prevState,
            name
        ]));
    }

    const removePlayerHandler = (idx) => {
        let newArray = [...player];
        newArray.splice(idx, 1);

        setPlayer(newArray);
    }

    const nextHandler = () => {
        if (player.length < 2) {
            toast('You need more than one player')
        } else {
            setStage(2);
            setTimeout(() => {
                generateLoser();
            }, 2000);
        }
    }
    
    const generateLoser = () => {
        let result = player[Math.floor(Math.random() * player.length)];
        setResult(result);
        console.log(result)
    }

    const resetGameHandler = () => {
        setStage(1);
        setPlayer([]);
        setResult('');
    }
    

    return (
        <>
            <MyContext.Provider value={{
                //STATE
                stage: stage,
                player: player,
                result: result,
                //methods
                addPlayer: addPlayerHandler,
                removePlayer: removePlayerHandler,
                next: nextHandler,
                resetGame: resetGameHandler,
                getNewLooser: generateLoser
            }}>
                {props.children}
            </MyContext.Provider>
            <ToastContainer />
        </>
    )
}

export {
    MyContext,
    MyProvider
}
