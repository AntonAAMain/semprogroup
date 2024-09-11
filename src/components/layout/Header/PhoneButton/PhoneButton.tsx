import cn from "classnames";

import cls from "./PhoneButton.module.scss";
import Image from "next/image";

interface Props {
  className?: string;
}

export const PhoneButton = ({ className }: Props) => {
  return (
    <div className={cn(cls.container, className)}>
      <Image width={14} height={14} src={"/imgs/common/phone.svg"} alt="" />
    </div>
  );
};
