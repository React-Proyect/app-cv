export interface HeaderNav {
    name?: string,
    path?: string,
    active?: boolean,
    child?: SocialNetwork[]
}

interface SocialNetwork {
    alt: string,
    img: string,
    path: string,
}
