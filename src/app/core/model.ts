import { classToPlain } from "class-transformer";

export abstract class Model{

id: string | undefined;

    toObject(): object {
    let obj: any = classToPlain(this);
    delete obj.id;
    return obj;
    }
}
