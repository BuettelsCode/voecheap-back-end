import { Response, Request } from "express";
import { packsService } from "../services/packsService";

export async function getPacks(req: Request, res: Response) {

    try {
        const packs = await packsService.getPacks();
        res.status(200).send(packs);
    } catch (err) {
        console.log(err);
    }
}

export async function postPack(req: Request, res: Response) {
    const { name, whatsapp, going, turning } = req.body;
    const { packgeId } = req.params;

    try {
        const customerPackge = await packsService.postPack(name, whatsapp, going, turning, Number(packgeId));
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
    }
}