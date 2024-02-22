import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = (props) => {
  const labelStyle = props.buttonAmber ? "hover:bg-amber-600 bg-amber-500" : "hover:bg-blue-700 bg-blue-400";
  const spamStyle = props.buttonAmber ? "peer-checked:bg-amber-900" : "peer-checked:bg-blue-900";

  return (
    <label className={`flex text-center cursor-pointer text-white shadow rounded-lg mb-2 w-full ${labelStyle}`}>
      <input
        type="radio"
        name={props.name}
        className="hidden peer"
        readOnly={true}
        value={props.value}
        required={props.checked}
        defaultChecked={props.checked}
      />
      <div className={`${spamStyle} w-full mx-auto rounded-lg`}>
        <div className="flex flex-nowrap max-h-14 px-2.5 pt-2 ">
          <div className="mx-auto">{props.children}</div>
        </div>
        <div>{props.showValue}</div>
      </div>
    </label>
  );
};

export default Button;
