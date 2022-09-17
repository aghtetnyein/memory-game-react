interface IOptionProps {
  title: string;
  options: {
    label: string;
    selected: boolean;
  }[];
}

interface IStateProps {
  options: IOptionProps[];
}

interface IActionProps {
  type: string;
  payload: {
    title: string;
    selectedOption: string;
  };
}

const INITIAL_STATE = {
  options: [
    {
      title: "Select Theme",
      options: [
        {
          label: "Numbers",
          selected: true,
        },
        {
          label: "Icons",
          selected: false,
        },
      ],
    },
    {
      title: "Grid Size",
      options: [
        {
          label: "4x4",
          selected: true,
        },
        {
          label: "6x6",
          selected: false,
        },
      ],
    },
  ],
};

const gameOptionsReducer = (state: IStateProps, action: IActionProps) => {
  switch (action.type) {
    case "SELECT_OPTION":
      let themeOptions = state.options.map((option) => {
        if (option.title === action.payload.title) {
          return {
            ...option,
            options: option.options.map((option) => {
              return {
                ...option,
                selected: option.label === action.payload.selectedOption,
              };
            }),
          };
        }
        return option;
      });
      return { ...INITIAL_STATE, options: themeOptions };
    default:
      return {
        ...INITIAL_STATE,
      };
  }
};

export { INITIAL_STATE, gameOptionsReducer };
