import React from "react";
import { tv } from "tailwind-variants";
const buttonStyle = tv({
  base: "font-medium bg-blue-300 text-white  active:opacity-80 uppercase",
  variants: {
    color: {
      primary: "bg-primary text-white",
      secondary: "bg-secondary text-red-500 border-solid border-2",
    },
    hoverEffect: {
      hoverPrimaryColor:
        "hover:bg-secondary hover:text-primary border-2 border-gray-300",
      hoverSecondaryColor: "hover:bg-primary hover:text-white  ",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const Button = ({
  children,
  variant,
  width,
  height,
  marginLeft,
  marginTop,
}) => {
  const hoverEffectClass =
    variant === "primary" ? "hoverPrimaryColor" : "hoverSecondaryColor";
  return (
    <div>
      <button
        style={{
          width: width,
          height: height,
          marginLeft: marginLeft,
          marginTop: marginTop,
        }}
        className={buttonStyle({
          color: variant === "primary" ? "primary" : "secondary",
          hoverEffect: hoverEffectClass,
        })}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
