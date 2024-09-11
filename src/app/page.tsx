import Image from "next/image";
import cls from "./page.module.css";
import { Main } from "@/components/widgets/Main/Main";
import { Secondary } from "@/components/widgets/Secondary/Secondary";

export default function Home() {
  return (
    <main className={cls.main}>
      <Main />
      <Secondary />
    </main>
  );
}
