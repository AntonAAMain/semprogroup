import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import cn from "classnames";

import cls from "./CallModalInput.module.scss";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

export const CallModalInput = ({ label, ...props }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    if (typeof props.value === "string" && props.value.length === 0) {
      setIsFocused(false);
    }
  };

  return (
    <div className={cls.container}>
      <input
        onFocus={onFocus}
        onBlur={onBlur}
        ref={ref}
        {...props}
        type="text"
        className={cls.input}
      />
      ;
      <div className={cn(cls.label, { [cls.label_focused]: isFocused })}>
        {label}
      </div>
    </div>
  );
};
