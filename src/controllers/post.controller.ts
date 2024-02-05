//Aqui se haran las consultas a la BD
import { Request, Response, response } from "express";

import{connect} from '../database';

import { Post } from '../interfaces/post.interface';


export async function getPosts(req:Request, res:Response): Promise<Response> {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts;')
    return res.json(posts.rows);
}

export async function createPosts(req:Request, res:Response) {
    const newPost: Post = req.body;
    const conn = await connect();
    if(!(newPost.created_at === undefined)){
        await conn.query('INSERT INTO posts (title,description,image_url,created_at) values ($1,$2,$3,$4) ',[newPost.title,newPost.description,newPost.image_url,newPost.created_at])
    }
    await conn.query('INSERT INTO posts (title,description,image_url) values ($1,$2,$3) ',[newPost.title,newPost.description,newPost.image_url])
   
    return res.json({
        message: 'Post creado'
    });
   
}

export async function getPost(req:Request, res:Response): Promise<Response> {
    const id = req.params.postId; //postId es el que se envia desde la ruta
    const conn = await connect();
    const post = await conn.query('SELECT * FROM posts WHERE id = $1',[id]);
    return res.json(post.rows[0]);
}

export async function deletePost(req:Request, res:Response): Promise<Response>{
    const id = req.params.postId;
    const conn = await connect();
    await conn.query('DELETE FROM posts WHERE id = $1',[id])
    return res.json({
        message: "Post Eliminado"
    });
}

export async function updatePost(req:Request, res:Response): Promise<Response>{
    const id = req.params.postId;
    const updatePost = req.body;
    const conn = await connect();
    await conn.query('UPDATE posts SET title = $1, description = $2, image_url = $3  WHERE id = $4',[updatePost.title,updatePost.description,updatePost.image_url,id])
    return res.json({
        message:"Post Actualizado"
    });
}