import { InputProps } from "@/interfaces";

const InputField: React.FC<InputProps> = (props) => {
  return (
    <div className="mr-2 text-center mb-5 w-full">
      <label className="bold text-white">{props.label}</label>
      <input
        type="number"
        name={props.inputName}
        id={props.id}
        className="placeholder-amber-600 rounded-lg w-full mt-2 text-center p-2.5 border border-amber-300 text-sm  block bg-amber-700 text-white focus:ring-amber-500 focus:border-amber-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
        required
      />
    </div>
  );
};

export default InputField;
