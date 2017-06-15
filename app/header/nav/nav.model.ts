export interface IMenu{
    title: string,
    Data: [IUrl]
}

export interface IUrl{
    name: string,
    topic_id: number,
    json_url: string,
    url: string
}