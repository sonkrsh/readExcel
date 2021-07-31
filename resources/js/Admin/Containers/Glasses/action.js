import { ADD_GLASS_CATEGORY } from "./constants";

export function addGlassCategory(payload) {
    return {
        type: ADD_GLASS_CATEGORY,
        payload,
    };
}
