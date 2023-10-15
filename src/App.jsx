import { useEffect, useState } from "react";
import "./App.css";
import * as speechCommands from "@tensorflow-models/speech-commands";
import Canvas from "./components/Canvas";
import { findIndexOfLargestNumber } from "./utils/helper-functions";
import { updateMaze, generateMaze } from "./utils/logic-functions";
import Output from "./components/Output";
import { runFireworks } from "./utils/confetti";

function App() {
    const [maze, setMaze] = useState(generateMaze(5, 5));
    const [messageObj, setMessageObj] = useState({ maze, message: "", messageValue: 0 });
    const [playAgain, setPlayAgain] = useState(false);
    const [micActiveListening, setMicActiveListening] = useState(0);

    async function createModel() {
        // the link to training model provided by Teachable Machine export
        const URL = "https://teachablemachine.withgoogle.com/models/7_pWxhluP/";

        const checkpointURL = URL + "model.json"; // model topology
        const metadataURL = URL + "metadata.json"; // model metadata

        const recognizer = speechCommands.create(
            "BROWSER_FFT", // fourier transform type, not useful to change
            undefined, // speech commands vocabulary feature, not useful for your models
            checkpointURL,
            metadataURL
        );

        // check that model and metadata are loaded via HTTPS requests.
        await recognizer.ensureModelLoaded();

        return recognizer;
    }

    async function run() {
        const recognizer = await createModel();
        let directionPrediction;
        setMicActiveListening(() => 1);

        const stopRecognizerAndUpdateMaze = (direction) => {
            setMicActiveListening(() => 2);
            recognizer.stopListening();
            const returnedMazeAndMessageObj = updateMaze(maze, "a", direction);
            setMaze(() => returnedMazeAndMessageObj.maze);
            setMessageObj(() => returnedMazeAndMessageObj);
            if (returnedMazeAndMessageObj.messageValue === 0) {
                setMicActiveListening(() => 0);
                return;
            }
            if (returnedMazeAndMessageObj.messageValue === 2) {
                setPlayAgain(() => true);
                runFireworks();
                return;
            } else
                setTimeout(() => {
                    setMessageObj((prev) => ({ ...prev, message: "", messageValue: 0 }));
                    setMicActiveListening(() => 0);
                }, 3000);
        };

        recognizer.startStreaming(
            (result) => {
                const scores = result.scores; // probability of prediction for each class
                directionPrediction = findIndexOfLargestNumber(scores);
                switch (directionPrediction) {
                    case 1:
                        stopRecognizerAndUpdateMaze("down");
                        break;
                    case 2:
                        stopRecognizerAndUpdateMaze("left");
                        break;
                    case 3:
                        stopRecognizerAndUpdateMaze("right");
                        break;
                    case 4:
                        stopRecognizerAndUpdateMaze("up");
                        break;
                }
            },
            {
                includeSpectrogram: true, // in case listen should return result.spectrogram
                probabilityThreshold: 0.75,
                invokeCallbackOnNoiseAndUnknown: true,
                overlapFactor: 0.5 // probably want between 0.5 and 0.75. More info in README
            }
        );
    }

    useEffect(() => {
        createModel();
    }, []);

    return (
        <div className=" min-h-screen p-8 bg-gradient-to-b from-sky-100 to-sky-300">
            <h1 className="text-xl xsm:text-2xl sm:text-3xl lg:text-5xl mb-12 tablet:mb-24">
                Speech Recognition Maze
            </h1>
            <div className="grid tablet:grid-cols-2 justify-items-center gap-y-6 xsm:gap-y-10 tablet:gap-10 lg:gap-12 xlg:gap-y-32">
                <Canvas maze={maze} />
                <Output messageObj={messageObj} />
            </div>
            {!playAgain && (
                <button
                    className={`mt-12 lg:mt-20 tablet:col-span-2 material-symbols-outlined rounded-full p-4 border-2 text-white
                        ${micActiveListening === 1 && "animate-quickPing disabled cursor-none"}
                        `}
                    onClick={run}>
                    mic
                </button>
            )}
        </div>
    );
}

export default App;
