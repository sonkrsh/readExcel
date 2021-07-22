import axios from "axios";
import { notification, message } from "antd";
import { isEmpty, get } from "lodash";

const instance = axios.create({
    // .. where we make our configurations
    baseURL: "/api/v1",
});

instance.interceptors.request.use((config) => {
    return config;
});

instance.interceptors.response.use(
    (response) => response,
    (err) => {
        notification.error({
            description: get(
                err,
                "response.data.message.message[0]",
                get(err, "response.data.message", "Something went wrong!")
            ),
        });

        return Promise.reject(err);
    }
);

export default function request(options) {
    return instance(options);
}
