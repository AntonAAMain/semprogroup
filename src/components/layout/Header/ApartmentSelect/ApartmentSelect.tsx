"use client";

import Image from "next/image";
import cn from "classnames";

import cls from "./ApartmentSelect.module.scss";
import { useState } from "react";

export const ApartmentSelect = () => {
  const [isTextActive, setIsTextActive] = useState<boolean>(false);

  const toggle = () => setIsTextActive((prev) => !prev);

  return (
    <div onMouseEnter={toggle} onMouseLeave={toggle} className={cls.container}>
      <div className={cn(cls.text, { [cls.text_active]: isTextActive })}>
        <div>Выбрать квартиру</div>
        <div>Выбрать квартиру</div>
      </div>

      <Image
        width={15}
        height={15}
        src={"/imgs/common/arrow-down.svg"}
        alt=""
      />
    </div>
  );
};
