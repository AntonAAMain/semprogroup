import { MenuButton } from "./MenuButton/MenuButton";
import { CallOrder } from "./CallOrder/CallOrder";
import { Phone } from "./Phone/Phone";
import { Logo } from "./Logo/Logo";
import cn from "classnames";

import cls from "./Header.module.scss";
import { ApartmentSelect } from "./ApartmentSelect/ApartmentSelect";
import { PhoneButton } from "./PhoneButton/PhoneButton";

export const Header = () => {
  return (
    <header className={cn(cls.container)}>
      <div className={cls.longVersion}>
        <div className={cls.leftSide}>
          <MenuButton />
          <ApartmentSelect />
        </div>

        <Logo />

        <div className={cls.rightSide}>
          <Phone />
          <CallOrder />
        </div>
      </div>

      <div className={cls.version768}>
        <div className={cls.version768LeftSide}>
          <MenuButton />
          <PhoneButton />
        </div>
        <Logo />
        <ApartmentSelect />
      </div>

      <div className={cls.version320}>
        <MenuButton />
        <Logo />
        <PhoneButton />
      </div>
    </header>
  );
};
