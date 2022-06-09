import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";

type PropsInput = {
    onValueChange: (setLink?:any) => void;
    placeholder: string;
    name: string;
    value?: string;
    type: "text" | "password" | "email" | "select" | undefined;
    width: string;
    bgColor: string;
    textColor: string;
    borderColor: string;
    margin?: string;
    marginTop?: string;
    marginRight?: string;
    marginBottom?: string;
    marginLeft?: string;
    login?: string;
    email?: string;
    password?: string;
    required?: boolean;
  };

export const Input = ({
  onValueChange,
  name,
  placeholder,
  value = "",
  type,
  width,
  bgColor,
  textColor,
  borderColor,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  required
}: PropsInput) => {
  return (
    <div>
      <input
        onChange={(e) => onValueChange(e.target.value)}
        name={name}
        placeholder={placeholder}
        value={value}
        type={type}
        required
        className={classNames(
          `${borderColor}
           ${bgColor}
           ${textColor}
           ${width}
           ${margin}
           ${marginTop}
           ${marginRight}
           ${marginBottom}
           ${marginLeft}
           w-96
           font-bold rounded text-xs
           shadow appearance-none border-2 
          leading-tight focus:outline-nonefirst-letter:focus:shadow-outline`
        )}
      ></input>
    </div>
  );
};
