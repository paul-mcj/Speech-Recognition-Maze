// prop types
import PropTypes from "prop-types";

import { refreshPage } from "../utils/helper-functions";

const Output = ({ messageObj }) => {
	return (
		<div className="min-h-[156px] max-w-[357px] tablet:min-w-[357px] tablet:max-w-[459px] lg:min-w-[459px] lg:max-w-[509px]">
			<div
				className={`border-2 p-4 tablet:p-8 text-sm tablet:text-lg min-h-full grid justify-items-center items-center
${messageObj.messageValue === 0 && "border-sky-500 bg-sky-200"}
${messageObj.messageValue === 1 && "border-red-500 bg-red-200"}
${messageObj.messageValue === 2 && "border-green-500 bg-green-200"}
${messageObj.messageValue === 3 && "border-yellow-500 bg-yellow-200"}
`}>
				{messageObj.messageValue === 0 && (
					<>
						<p>
							Press the microphone. While it&apos;s
							blinking instruct the blue square to move
							about the maze using the words
							&quot;left&quot;, &quot;right&quot;,
							&quot;up&quot; and &quot;down&quot;.
						</p>
						<p> Cross the FINISH line to win!</p>
					</>
				)}
				{messageObj.messageValue === 1 && (
					<p>{messageObj.message}</p>
				)}
				{messageObj.messageValue === 2 && (
					<>
						<p>{messageObj.message}</p>
						<button
							className="border-2 border-green-500 bg-green-500 px-2 hover:animate-quickPing"
							onClick={refreshPage}>
							Play Again
						</button>
					</>
				)}
				{messageObj.messageValue === 3 && (
					<p>{messageObj.message}</p>
				)}
			</div>
		</div>
	);
};

Output.propTypes = {
	messageObj: PropTypes.object.isRequired
};

export default Output;
