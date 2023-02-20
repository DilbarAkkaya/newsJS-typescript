import { CallAlias, OptionsKeyType, OptionsSource } from "./types";

class Loader {
    baseLink: string;
    options: OptionsKeyType;
    constructor(baseLink: string, options: OptionsKeyType) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>(
        { endpoint = 'string', options = {} },
        callback: CallAlias<T> = () => {
            console.error('No callback for GET response');
        }
    ) {
        console.log(endpoint, options, 555555555555555555)
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: OptionsSource, endpoint = 'string') {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        (Object.keys(urlOptions) as Array<keyof typeof urlOptions>).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<TData>(method: string, endpoint: string, callback: CallAlias<TData>, options = {}) {
        fetch(this.makeUrl(options as OptionsSource, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => {
                callback(data);
            console.log(data, 'kfkffkfk')})
            .catch((err) => console.error(err));
    }
}

export default Loader;
