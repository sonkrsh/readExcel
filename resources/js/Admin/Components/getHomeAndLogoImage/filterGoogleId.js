import { isEmpty, isEqual } from "lodash";

export const filterGoogle = (imageData)=> {
    var googleId = "";
    const { url } = imageData;
    for (var i = 0; i < url.length; i++) {
        if (isEqual(url.charAt(i), "=")) {
            for (var j = i + 1; j < url.length; j++) {
                if (!isEqual(url.charAt(j), "&")) {
                    googleId = googleId + url.charAt(j);
                } else {
                    return {
                        googleId,
                    };
                }
            }
        }
    }
}


