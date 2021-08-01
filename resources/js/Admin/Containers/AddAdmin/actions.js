import { ADD_ADMIN } from "./constants";

export function addAdmin(payload) {
    return {
        type: ADD_ADMIN,
        payload,
    };
}
