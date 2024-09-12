"use client";

import { useCallModalStore } from "@/shared/zustand/useCallModalStore";
import cn from "classnames";

import cls from "./CallOrder.module.scss";
import { useState } from "react";

export const CallOrder = () => {
  const { open } = useCallModalStore();

  const [isTextActive, setIsTextActive] = useState<boolean>(false);

  const toggle = () => setIsTextActive((prev) => !prev);

  return (
    <div
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      onClick={open}
      className={cn(cls.container)}
    >
      <div className={cn(cls.text, { [cls.text_active]: isTextActive })}>
        <p>Заказать звонок</p>
        <p>Заказать звонок</p>
      </div>
    </div>
  );
};
