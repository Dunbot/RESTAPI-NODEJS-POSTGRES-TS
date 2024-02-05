"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePost = exports.deletePost = exports.getPost = exports.createPosts = exports.getPosts = void 0;
const database_1 = require("../database");
function getPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const posts = yield conn.query('SELECT * FROM posts;');
        return res.json(posts.rows);
    });
}
exports.getPosts = getPosts;
function createPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = req.body;
        const conn = yield (0, database_1.connect)();
        if (!(newPost.created_at === undefined)) {
            yield conn.query('INSERT INTO posts (title,description,image_url,created_at) values ($1,$2,$3,$4) ', [newPost.title, newPost.description, newPost.image_url, newPost.created_at]);
        }
        yield conn.query('INSERT INTO posts (title,description,image_url) values ($1,$2,$3) ', [newPost.title, newPost.description, newPost.image_url]);
        return res.json({
            message: 'Post creado'
        });
    });
}
exports.createPosts = createPosts;
function getPost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId; //postId es el que se envia desde la ruta
        const conn = yield (0, database_1.connect)();
        const post = yield conn.query('SELECT * FROM posts WHERE id = $1', [id]);
        return res.json(post.rows[0]);
    });
}
exports.getPost = getPost;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const conn = yield (0, database_1.connect)();
        yield conn.query('DELETE FROM posts WHERE id = $1', [id]);
        return res.json({
            message: "Post Eliminado"
        });
    });
}
exports.deletePost = deletePost;
function updatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const updatePost = req.body;
        const conn = yield (0, database_1.connect)();
        yield conn.query('UPDATE posts SET title = $1, description = $2, image_url = $3  WHERE id = $4', [updatePost.title, updatePost.description, updatePost.image_url, id]);
        return res.json({
            message: "Post Actualizado"
        });
    });
}
exports.updatePost = updatePost;
