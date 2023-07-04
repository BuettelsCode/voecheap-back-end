import prisma from "../config/database";

async function findPacks() {
    return prisma.packages.findMany();
}

async function createPacks(name: string, whatsapp: string, going: string, turning: string, packgeId: number) {
    return prisma.clients.create({
        data: {
            name,
            whatsapp,
            going,
            return: turning,
            packgeId
        }
    })
};

export const packsRepository = {
    findPacks,
    createPacks
};
