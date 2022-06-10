import classNames from "classnames";
import { Dispatch, SetStateAction } from "react";

type PropsButton = {
  children: any;
  onClick?: () => void | Dispatch<SetStateAction<any>>;
  type: "submit" | "button" | "reset" | undefined;
  disabled?: boolean;
  width?: string;
  height?: string;
  backGroundColor?: string;
  textColor?: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingLeft?: string;
  rounded?: string;
  effects?: string;
};

export const Button = ({
  children,
  onClick,
  type,
  disabled = false,
  width,
  height,
  backGroundColor,
  textColor,
  border,
  borderColor,
  borderRadius,
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  padding,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  rounded,
  effects,
}: PropsButton) => {
  return (
    <div>
      <button
        onClick={() => {}}
        type={type}
        className={classNames(
          `${backGroundColor}
           ${textColor}
           ${width}
           ${height}
           ${border}
           ${borderColor}
           ${borderRadius}
           ${margin}
           ${marginTop}
           ${marginRight}
           ${marginBottom}
           ${marginLeft}
           ${padding}
           ${paddingTop}
           ${paddingBottom}
           ${paddingRight}
           ${paddingLeft}
           ${rounded}
           ${effects}
           font-bold
           rounded-full font-Poppins`
        )}
      >
        {children}
      </button>
    </div>
  );
};
