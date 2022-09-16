// constants
import { Numbers4x4, Numbers6x6, Icons4x4, Icons6x6 } from "../constants";
import Button from "./Button";

// Fontawesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCat,
  faBurger,
  faFish,
  faCarrot,
  faCandyCane,
  faSeedling,
  faIceCream,
  faEgg,
  faCar,
  faRocket,
  faWineGlass,
  faHatCowboy,
  faUmbrella,
  faCrown,
  faGuitar,
  faDrum,
  faBattery,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

interface IPlayProps {
  theme: string;
  gridSize: string;
  restartGame: () => void;
  newGame: () => void;
}

interface IGameBoardProps {
  theme: string;
  gridSize: string;
}

const stringToComponent = (item: string) => {
  switch (item) {
    case "cat":
      return <FontAwesomeIcon icon={faCat} />;
    case "burger":
      return <FontAwesomeIcon icon={faBurger} />;
    case "fish":
      return <FontAwesomeIcon icon={faFish} />;
    case "carrot":
      return <FontAwesomeIcon icon={faCarrot} />;
    case "seedling":
      return <FontAwesomeIcon icon={faCandyCane} />;
    case "candyCone":
      return <FontAwesomeIcon icon={faSeedling} />;
    case "iceCream":
      return <FontAwesomeIcon icon={faIceCream} />;
    case "egg":
      return <FontAwesomeIcon icon={faEgg} />;
    case "car":
      return <FontAwesomeIcon icon={faCar} />;
    case "rocket":
      return <FontAwesomeIcon icon={faRocket} />;
    case "wine":
      return <FontAwesomeIcon icon={faWineGlass} />;
    case "hat":
      return <FontAwesomeIcon icon={faHatCowboy} />;
    case "umbrella":
      return <FontAwesomeIcon icon={faUmbrella} />;
    case "crown":
      return <FontAwesomeIcon icon={faCrown} />;
    case "guitar":
      return <FontAwesomeIcon icon={faGuitar} />;
    case "drum":
      return <FontAwesomeIcon icon={faDrum} />;
    case "battery":
      return <FontAwesomeIcon icon={faBattery} />;
    case "dog":
      return <FontAwesomeIcon icon={faDog} />;
  }
};

const GameBoard = ({ theme, gridSize }: IGameBoardProps) => {
  const numberGameBoard = gridSize === "4x4" ? Numbers4x4 : Numbers6x6;
  const iconGameBoard = gridSize === "4x4" ? Icons4x4 : Icons6x6;

  return (
    <div
      className={`grid 
        ${gridSize === "4x4" && "grid-cols-4"}
        ${gridSize === "6x6" && "grid-cols-6"}
        gap-2 md:gap-4`}
    >
      {theme === "Numbers" && (
        <Fragment>
          {numberGameBoard.map((item, index) => (
            <div
              key={index}
              className={`w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-dark text-white text-[1.3rem] font-bold cursor-pointer`}
            >
              {item}
            </div>
          ))}
        </Fragment>
      )}
      {theme === "Icons" && (
        <Fragment>
          {iconGameBoard.map((item, index) => (
            <div
              key={index}
              className={`w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-dark text-white text-[1.3rem] font-bold cursor-pointer`}
            >
              {stringToComponent(item)}
            </div>
          ))}
        </Fragment>
      )}
    </div>
  );
};

const Play = ({ theme, gridSize, restartGame, newGame }: IPlayProps) => {
  return (
    <div
      className={`w-full md:w-[44rem] bg-white px-4 md:px-12 ${
        gridSize === "4x4" ? "py-8" : "py-4"
      } rounded-md flex flex-col items-center gap-6`}
    >
      <div className="w-full flex items-center justify-between">
        <p className="text-[1.2rem] font-bold text-dark">memory</p>
        <div className="flex items-center gap-3">
          <Button
            label="Restart"
            backgroundColor="bg-yellow"
            backgroundColorHover="hover:bg-yellowHover"
            textColor="text-white"
            onClick={restartGame}
          />
          <Button
            label="NewGame"
            backgroundColor="bg-smoke"
            backgroundColorHover="hover:bg-smokeHover"
            textColor="text-dark"
            onClick={newGame}
          />
        </div>
      </div>
      <div className={`${gridSize === "4x4" ? "my-8" : "my-2"}`}>
        <GameBoard theme={theme} gridSize={gridSize} />
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="w-[11rem] bg-smoke font-bold px-4 py-3 flex items-center justify-between rounded-md">
          <p className="text-[0.8rem] text-gray-500">Time</p>
          <p className="text-[1.25rem] text-dark">00:00</p>
        </div>
        <div className="w-[11rem] bg-smoke font-bold px-4 py-3 flex items-center justify-between rounded-md">
          <p className="text-[0.8rem] text-gray-500">Moves</p>
          <p className="text-[1.25rem] text-dark">0</p>
        </div>
      </div>
    </div>
  );
};

export default Play;
