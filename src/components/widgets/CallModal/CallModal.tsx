"use client";

import { useCallModalStore } from "@/shared/zustand/useCallModalStore";
import { useEffect, useState } from "react";
import { sleep } from "@/shared/helpers";

import cn from "classnames";

import InputMask from "react-input-mask";

import cls from "./CallModal.module.scss";
import { CallModalInput } from "./CallModalInput/CallModalInput";
import { Button } from "./Button/Button";

export const CallModal = () => {
  const [localActive, setLocalActive] = useState<boolean>(false);

  const { isActive, close } = useCallModalStore();

  const changing = async () => {
    if (isActive && !localActive) {
      setLocalActive(true);
    } else if (!isActive && localActive) {
      await sleep(600);

      setLocalActive(false);
    }
  };

  useEffect(() => {
    changing();

    setName("");
    setPhone("");
    setEmail("");
  }, [isActive, localActive]);

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const blockClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();

  const buttonClick = () => {
    console.log("Заполненные поля - ", name, phone, email);
  };

  return (
    <>
      {localActive && (
        <div
          onClick={close}
          className={cn(cls.container, { [cls.container_active]: isActive })}
        >
          <div onClick={blockClick} className={cls.content}>
            <div className={cls.title}>Заказать звонок</div>

            <div className={cls.inputs}>
              <CallModalInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Ваше имя"
              />

              <CallModalInput
                isPhone
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                label="Телефон"
              />

              <CallModalInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="E-MAIL"
              />
            </div>

            <div className={cls.info}>
              Нажимая на кнопку «Отправить», вы ознакомлены и соглашаетесь с
              политикой обработки персональных данных
            </div>

            <Button onClick={buttonClick} />
          </div>
        </div>
      )}
    </>
  );
};
