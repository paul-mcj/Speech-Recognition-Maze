// NOTE: this file is trying to update the app by not start/sopping the microphone and having it streamlined.

import { useState, useEffect } from "react";
import "./App.css";
import * as speechCommands from "@tensorflow-models/speech-commands";
import Canvas from "./components/Canvas";
import { findIndexOfLargestNumber } from "./utils/helper-functions";
import { updateMaze, generateMaze } from "./utils/logic-functions";
import Output from "./components/Output";
import { runFireworks } from "./utils/confetti";

// messageObj.messageValue
// 0 => valid move to empty space
// 1 => hit a wall
// 2 => won!
// 3 => out of bounds

function App() {
	const [maze, setMaze] = useState(generateMaze(5, 5));
	const [messageObj, setMessageObj] = useState({
		maze,
		message: "",
		messageValue: 0
	});
	const [playAgain, setPlayAgain] = useState(false);
	const [micActiveListening, setMicActiveListening] = useState(false);
	const [recognizerState, setRecognizerState] = useState(null);

	// initial load
	useEffect(() => {
		const initializeRecongnizer = async () => {
			try {
				// the link to training model provided by Teachable Machine export
				const URL =
					"https://teachablemachine.withgoogle.com/models/7_pWxhluP/";

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

				setRecognizerState(() => recognizer);
			} catch (error) {
				console.log(error);
			}
		};

		initializeRecongnizer();
		console.log(recognizerState);
	}, []);

	// useEffect(() => {
	//     // re run recognizer
	// }, [messageObj])

	const pauseRecognizerAndUpdateMaze = (direction) => {
		// upadate ui maze
		const returnedMazeAndMessageObj = updateMaze(maze, "a", direction);

		// pause recognizer
		recognizerState.stopListening();

		// update maze state
		setMaze(() => returnedMazeAndMessageObj.maze);

		// end game condition
		if (returnedMazeAndMessageObj.messageValue === 2) {
			setPlayAgain(() => true);
			// TODO: turn off the mic as well? or does a page refresh do that automatically?
			recognizerState.stopListening();
			runFireworks();
			return;
		}

		// update message state
		setMessageObj(() => returnedMazeAndMessageObj);

		run();

		// setTimeout(() => {
		// else
		// 	setMessageObj((prev) => ({
		// 		...prev,
		// 		message: "",
		// 		messageValue: 0
		// 	}));
		// }, 100);
		// TODO: maybe train the model to listen for a noise thats NOT the directions, and if there is any noise other than those and or is silent for more than 0.5 secs after a maze change is made, can clear some value and hopefully the mic would be ready for next command
	};

	const run = () => {
		// FIXME:
		// update ui to show microphone is active
		setMicActiveListening(() => true);

		recognizerState.listen(
			(result) => {
				// probability of prediction for each class in scores array of length 5 (as determined from custom teachable model: https://teachablemachine.withgoogle.com/models/7_pWxhluP/):
				// 0 => background noise
				// 1 => down
				// 2 => left
				// 3 => right
				// 4 => up
				let directionPrediction = findIndexOfLargestNumber(
					result.scores
				);
				switch (directionPrediction) {
					case 1:
						pauseRecognizerAndUpdateMaze("down");
						break;
					case 2:
						pauseRecognizerAndUpdateMaze("left");
						break;
					case 3:
						pauseRecognizerAndUpdateMaze("right");
						break;
					case 4:
						pauseRecognizerAndUpdateMaze("up");
						break;
				}
			},
			{
				probabilityThreshold: 0.9, // only invoke callback if max probability of all result scores is at least 90% positive
				invokeCallbackOnNoiseAndUnknown: false, // specifically ignore invoking callback if the top score is "unknown" or "background noise"
				overlapFactor: 0.001 // recognizer performs predictions every 1ms
			}
		);
	};

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
                        ${
						micActiveListening &&
						"animate-quickPing disabled cursor-none"
					}
                        `}
					onClick={run}>
					mic
				</button>
			)}
		</div>
	);
}

export default App;
