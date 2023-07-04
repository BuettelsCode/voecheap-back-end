import { packsRepository } from "../repository/packRepository";

async function getPacks() {

    try{
        const packs = await packsRepository.findPacks();
        return packs;
    }catch(err){
        console.log(err);
    }
};

async function postPack(name: string, whatsapp: string, going: string, turning: string, packgeId: number) {
    
    try{
        const customerPackge = await packsRepository.createPacks(name, whatsapp, going, turning, packgeId);
        return customerPackge;
    }catch(err){
        console.log(err);
    }
};

export const packsService = {
    getPacks,
    postPack
};