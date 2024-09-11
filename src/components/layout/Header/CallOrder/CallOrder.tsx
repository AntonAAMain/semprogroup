"use client";

import { useCallModalStore } from "@/shared/zustand/useCallModalStore";
import cn from "classnames";

import cls from "./CallOrder.module.scss";

export const CallOrder = () => {
  const { open } = useCallModalStore();

  return (
    <div onClick={open} className={cn(cls.container)}>
      Заказать звонок
    </div>
  );
};
