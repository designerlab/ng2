export interface IMenu{
    title: string,
    Data: [IUrl]
}

export interface IUrl{
    name: string,
    topic_id: string,
    json_url: string,
    url: string
}