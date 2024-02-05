//De esta manera definimos los datos que se le enviaran
export interface Post{
    id?: string;
    title: string;
    description: string;
    image_url: string;
    created_at: Date;
}