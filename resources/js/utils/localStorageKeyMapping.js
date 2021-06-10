import React from "react";
import CryptoJS from "crypto-js";
import { message } from "antd";
import toNumber from "lodash/toNumber";

const localStorageKeyMapping = (key) => {
    const keyMapping = {
        batterySessionId:
            "HFewwSDADqeqeEFGTRHYTYsdfsdfqQEQW@@#^^$EQdaSADASDwqe3",
    };
    return keyMapping[key];
};

const addSessionStorage = (payload, battery, sessionKey, sessionNAme) => {
    var batteryProducts = [];
    try {
        if (payload) {
            var bytes = CryptoJS.AES.decrypt(
                JSON.parse(localStorage.getItem(sessionNAme)),
                localStorageKeyMapping(sessionKey)
            );
            var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            decryptedData?.map((value, key) => {
                batteryProducts.push(value);
            });
            batteryProducts.push(payload);
            var ciphertext = CryptoJS.AES.encrypt(
                JSON.stringify(batteryProducts),
                localStorageKeyMapping(sessionKey)
            ).toString();
            localStorage.setItem(sessionNAme, JSON.stringify(ciphertext));

            message.success("Added To Cart SuccesFully", 1);
            return addToCartSuccess(
                batteryProducts,
                battery,
                sessionKey,
                sessionNAme
            );
        }
        return addToCartSuccess(
            batteryProducts,
            battery,
            sessionKey,
            sessionNAme
        );
    } catch (error) {
        batteryProducts.push(payload);
        var ciphertext = CryptoJS.AES.encrypt(
            JSON.stringify(batteryProducts),
            localStorageKeyMapping(sessionKey)
        ).toString();
        localStorage.setItem(sessionNAme, JSON.stringify(ciphertext));
        message.success("Added To Cart SuccesFully", 1);
        return addToCartSuccess(
            batteryProducts,
            battery,
            sessionKey,
            sessionNAme
        );
    }
};

const addToCartSuccess = (payload, battery, sessionKey, sessionNAme) => {
    let myobjArray = [];
    let price = "";
    try {
        var bytes = CryptoJS.AES.decrypt(
            JSON.parse(localStorage.getItem(sessionNAme)),
            localStorageKeyMapping(sessionKey)
        );
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        let total = 0;
        decryptedData?.map((value, key) => {
            battery?.map((valueOriginal, keyOriginal) => {
                if (valueOriginal?.id == value.productId) {
                    if (value.batteryType == "AC-B-WE") {
                        price = valueOriginal.priceWithExchange;
                    }
                    if (value.batteryType == "AC-B-WOE") {
                        price = valueOriginal.priceWithOutExchange;
                    }
                    total = total + toNumber(price);
                    const myobj = {
                        ...valueOriginal,
                        cartPrice: price,
                    };
                    myobjArray.push(myobj);
                }
            });
        });
        return { myobjArray, total };
    } catch (error) {
        localStorage.removeItem(sessionNAme);
    }
};

const deleteFromSession = (payload, cart, sessionKey, deleteKey) => {
    var batteryProducts = [];
    try {
        var bytes = CryptoJS.AES.decrypt(
            JSON.parse(localStorage.getItem(deleteKey)),
            localStorageKeyMapping(sessionKey)
        );
        var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        decryptedData?.map((value, key) => {
            if (value?.productId == payload) {
            } else {
                batteryProducts.push(value);
            }
        });
        var ciphertext = CryptoJS.AES.encrypt(
            JSON.stringify(batteryProducts),
            localStorageKeyMapping(sessionKey)
        ).toString();
        localStorage.setItem(deleteKey, JSON.stringify(ciphertext));
    } catch (error) {}
};

export { localStorageKeyMapping, addSessionStorage, deleteFromSession };
