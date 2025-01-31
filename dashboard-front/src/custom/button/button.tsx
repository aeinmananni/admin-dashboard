import { ButtonHTMLAttributes } from "react";

type ButtonProps = {} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`flex justify-center items-center shadow-lg active:scale-90 duration-300 ${props.className}`}
    >
      {props.children}
    </button>
  );
}
