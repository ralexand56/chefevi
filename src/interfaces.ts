export interface Food {
    id: string;
    title: string;
    imgUrl: string;
    categoryId: string;
    sort: number;
}

export interface FoodCategory {
    id: string;
    name: string;
    sort: number;
}