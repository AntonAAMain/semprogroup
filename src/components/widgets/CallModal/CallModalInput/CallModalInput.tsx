import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";
import cn from "classnames";

import cls from "./CallModalInput.module.scss";
import ReactInputMask from "react-input-mask";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  isPhone?: boolean;
}

export const CallModalInput = ({ label, isPhone, ...props }: Props) => {
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
      {!isPhone ? (
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref}
          {...props}
          type="text"
          className={cls.input}
        />
      ) : (
        <ReactInputMask
          onFocus={onFocus}
          onBlur={onBlur}
          ref={ref}
          {...props}
          type="text"
          className={cls.input}
          mask="+7 (999) 999-99-99"
          maskChar="_"
          id="phone"
          name="phone"
        />
      )}

      <div className={cn(cls.label, { [cls.label_focused]: isFocused })}>
        {label}
      </div>
    </div>
  );
};
