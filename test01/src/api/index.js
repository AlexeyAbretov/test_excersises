import data from './data.json';

export const Api = {
    counterparty: {
        get: async () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(data)
                }, 1000);
            })
        }
    }
};
