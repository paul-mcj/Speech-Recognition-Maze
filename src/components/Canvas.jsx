const Canvas = ({ maze }) => {
    return (
        <div className="flex ">
            <div className="border-black border grid grid-cols-9">
                {Array.isArray(maze) &&
                    maze?.length > 0 &&
                    maze?.map((row, rowIndex) =>
                        row.map((cell, colIndex) => (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className={`
                                h-8 tablet:h-12 w-8 tablet:w-12 ring-[100px] ring-inset
                            ${cell === 1 && "ring-gray-900"} 
                            ${cell === 0 && "ring-white border  border-black"} 
                            ${cell === "a" && "ring-sky-500 border border-black"}
                            `}></div>
                        ))
                    )}
            </div>
            <div className="grid grid-cols-1 items-center border-black border-l-2 xxsm:border-l-0 tablet:border-l-2 lg:border-l-0 border-r-2 border-t-2 border-b-2 bg-sky-500">
                <p className="rotate-[270deg] font-bold justify-self-center tablet:text-lg">
                    Finish
                </p>
            </div>
        </div>
    );
};

export default Canvas;
