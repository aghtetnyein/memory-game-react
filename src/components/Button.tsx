interface IButtonProps {
  label: string;
  backgroundColor: string;
  backgroundColorHover: string;
  textColor: string;
  onClick: () => void;
}

const Button = ({
  label,
  backgroundColor,
  backgroundColorHover,
  textColor,
  onClick,
}: IButtonProps) => {
  return (
    <button
      className={`w-full ${backgroundColor} ${backgroundColorHover} ${textColor} px-4 py-[0.7rem] rounded-full text-[1rem] font-bold cursor-pointer`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
