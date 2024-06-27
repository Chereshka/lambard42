
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';

const headerConfig = async () => {

    const config = {
        headers: {
            device_id: await DeviceInfo.getUniqueId(),
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    return config;
};

export const http = axios.create({
    baseURL: process.env.API_URL + '/api/'
});


export async function httpQuery<U>(
    path: string,
    method: "GET" | "POST" | "PUT" | "DELETE",
    body?: any,
): Promise<U> {
    const config = await headerConfig();

    console.log(`\n`, { baseURL: process.env.API_URL }, `\n`, { path, body })

    switch (method) {
        case "GET":
            return await http.get(path, config)

        case "GET":
            return await http.post(path, body, config)

    }

    return null as U;
}


