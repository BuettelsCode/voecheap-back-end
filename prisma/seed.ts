import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function createUsers() {
    await prisma.packages.createMany({
        data: [
            { destiny: "Lisboa", image: "https://encurtador.com.br/mAGS5", price: "R$2.600,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "2 bagagens (23kg/10kg) + 1 de mão", ticket: "Passagem de ida com volta cancelada" },
            { destiny: "Orlando", image: "https://shre.ink/lo5e", price: "R$3.050,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "2 bagagens (23kg/10kg) + 1 de mão", ticket: "Passagens de ida e volta" },
            { destiny: "Paris", image: "https://shre.ink/loHU", price: "R$8.490,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "3 bagagens (2x23kg/10kg) + 1 de mão", ticket: "Passagens de ida e volta" },
            { destiny: "Madrid", image: "https://encurtador.com.br/ALSTZ", price: "R$4.500,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "2 bagagens (23kg/10kg) + 1 de mão", ticket: "Passagens de ida e volta" },
            { destiny: "Orlando - Executiva", image: "https://shre.ink/loHE", price: "R$8.490,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "3 bagagens (2x23kg/10kg) + 1 de mão", ticket: "Passagens de ida e volta" },
            { destiny: "Nova York", image: "https://encurtador.com.br/frIR0", price: "R$8.490,00/pessoa", support: "Suporte diário", departureTax: "Taxa de embarque inclusa", baggage: "3 bagagens (2x23kg/10kg) + 1 de mão", ticket: "Passagens de ida e volta" }
        ]
    })
};

createUsers()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
