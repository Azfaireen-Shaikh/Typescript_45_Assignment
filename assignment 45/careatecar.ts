import { car } from "./main";

function careatecar(manyfacture: string, model: string, optional: Record<string, any>): car {
    return {
        manyfacture,
        model,
        ...optional
    };

}function careatecar(manyfacture: string, model: string, optional: Record<string, any>): car {
    return {
        manyfacture,
        model,
        ...optional
    };
}

