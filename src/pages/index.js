import HomeCard from "@/components/home-card/home-card";

import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen items-center justify-between p-10 lg:p-28 flex-col gap-8 lg:flex-row ${manrope.className} bg-secondaryColor`}
    >
      <HomeCard
        title="Faça uma reserva"
        buttonTitle="Reservar"
        buttonRoute="/reserva"
        cardImage="quarto-background.png"
      />
      <HomeCard
        title="Fazer checkin"
        buttonTitle="Checkin"
        buttonRoute="/checkin"
        cardImage="quartocasal2.jpg"
      />
      <HomeCard
        title="Fazer checkout"
        buttonTitle="Checkout"
        buttonRoute="/checkout"
        cardImage="quartocasal1.webp"
      />
    </main>
  );
}
