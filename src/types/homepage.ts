//#region news
interface ObjIdAndName {
    id: number;
    name: string;
}

export interface News {
    allAccess: boolean;
    attachType: ObjIdAndName;
    canShare: boolean;
    comments: number;
    description: string;
    duration: string;
    id: number;
    imageUrl: string;
    isLiked: boolean;
    likes: number;
    positions: unknown[];
    publishDate: string;
    title: string;
    topicType: ObjIdAndName;
    total: number;
    updateDate: string;
    updateTime: string;
    views: number;
}
//#endregion


export interface HomeResponseObject {
    news: News[];
}