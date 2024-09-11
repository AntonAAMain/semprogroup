"use client";

import { useCallModalStore } from "@/shared/zustand/useCallModalStore";
import { useEffect, useState } from "react";
import { sleep } from "@/shared/helpers";

import cn from "classnames";

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
  }, [isActive, localActive]);

  const [test, setTest] = useState("");

  const blockClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    e.stopPropagation();

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
                value={test}
                onChange={(e) => setTest(e.target.value)}
                label="test"
              />

              <CallModalInput
                value={test}
                onChange={(e) => setTest(e.target.value)}
                label="test"
              />

              <CallModalInput
                value={test}
                onChange={(e) => setTest(e.target.value)}
                label="test"
              />
            </div>

            <div className={cls.info}>
              Нажимая на кнопку «Отправить», вы ознакомлены и соглашаетесь с
              политикой обработки персональных данных
            </div>

            <Button />
          </div>
        </div>
      )}
    </>
  );
};
