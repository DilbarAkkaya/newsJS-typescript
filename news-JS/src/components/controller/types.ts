export interface INews {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: ISourse;
    title: string;
    url: string;
    urlToImage: string;
}

export interface ISourse {
    id: string;
    name: string;
}

export interface ISourceData extends ISourse {
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ISourceResponse {
    status: string;
    sources: ISourceData[];
}

export interface IArticlesResponse {
    articles?: INews[];
    totalResults: number;
    status: string;
}
export type OptionsKeyType = {
    apiKey: string;
};

export type OptionsSource = {
    sources: string;
};
export type CallType<T> = (data: T) => void;

export type PickData = Pick<ISourceData, 'id' | 'name'>;
export enum RequestMethods {
    GETDATA = 'GET',
    POSTDATA = 'POST',
}
export enum RequestStatus {
    NOTFOUND = 404,
    UNAUTHORIZED = 401,
    SUCCESS = 200,
}
