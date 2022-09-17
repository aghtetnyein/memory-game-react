import { Fragment, useState, useReducer, useEffect } from "react";
import Button from "./Button";

// reducers
import { INITIAL_STATE, gameOptionsReducer } from "../gameOptionsReducer";

// interfaces
interface IGameModeProps {
  gameTheme: string;
  gameSize: string;
  startGame: (theme: string, gridSize: string) => void;
}

interface ISelectItemProps {
  title: string;
  label: string;
  selected: boolean;
  gameOptionsDispatch: React.Dispatch<any>;
}

interface IGameOptionProps {
  title: string;
  options: {
    label: string;
    selected: boolean;
  }[];
  gameOptionsDispatch: React.Dispatch<any>;
}

const SelectItem = ({
  title,
  label,
  selected,
  gameOptionsDispatch,
}: ISelectItemProps) => {
  const handleClick = () => {
    gameOptionsDispatch({
      type: "SELECT_OPTION",
      payload: { title, selectedOption: label },
    });
  };

  return (
    <div
      className={`w-36 md:w-52 p-[0.7rem] rounded-full text-center text-[1rem] font-bold cursor-pointer
      ${selected ? "bg-dark" : "bg-smoke"}
      ${selected ? "text-white" : "text-dark"}`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

const GameOption = ({
  title,
  options,
  gameOptionsDispatch,
}: IGameOptionProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[0.8rem] text-gray-500 font-bold">{title}</p>
      <div className="flex items-center gap-4">
        {options.map((option, index) => (
          <Fragment key={index}>
            <SelectItem
              title={title}
              label={option.label}
              selected={option.selected}
              gameOptionsDispatch={gameOptionsDispatch}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

const GameMode = ({ gameTheme, gameSize, startGame }: IGameModeProps) => {
  const [theme, setTheme] = useState<string>(gameTheme);
  const [gridSize, setGridSize] = useState<string>(gameSize);

  // reducers
  const [gameOptionsState, gameOptionsDispatch] = useReducer(
    gameOptionsReducer,
    INITIAL_STATE
  );

  useEffect(() => {
    // set theme
    let theme = gameOptionsState.options[0].options.find(
      (option) => option.selected
    );
    setTheme(theme?.label || "");

    // set grid size
    let gridSize = gameOptionsState.options[1].options.find(
      (option) => option.selected
    );
    setGridSize(gridSize?.label || "");
  }, [gameOptionsState]);

  return (
    <div className="bg-white p-6 rounded-md flex flex-col gap-6">
      {gameOptionsState.options.map((gameOption, index) => (
        <Fragment key={index}>
          <GameOption
            title={gameOption.title}
            options={gameOption.options}
            gameOptionsDispatch={gameOptionsDispatch}
          />
        </Fragment>
      ))}
      <Button
        label="Start Game"
        backgroundColor="bg-yellow"
        backgroundColorHover="hover:bg-yellowHover"
        textColor="text-white"
        onClick={() => startGame(theme, gridSize)}
      />
    </div>
  );
};

export default GameMode;
