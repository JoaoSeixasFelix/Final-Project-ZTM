import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";

type PropsInput = {
  onValueChange: (e:any) => void;
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
  padding?: string;
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
  padding,
  required,
}: PropsInput) => {
  return (
    <div>
      <input
        onChange={(e) => onValueChange(e.target.value)}
        name={name}
        placeholder={placeholder}
        value={value}
        type={type}
        required={required}
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
           ${padding}
           font-bold rounded-lg text-xs
           shadow appearance-none border-2 
          leading-tight focus:outline-nonefirst-letter:focus:shadow-outline required`
        )}
      ></input>
    </div>
  );
};
