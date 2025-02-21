import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../middlewares/multer";
import { addComment, addNewPost, bookmarkPost, delatePost, getAllPost, getCommentsOfPost, getUserPost, likePost, unlikePost } from "../controllers/post.controller.js";

const router = express.Router();

router.route('/addpost').post(isAuthenticated, upload.single('image'), addNewPost);
router.route('/all').get(isAuthenticated, getAllPost);
router.route('/userpost/all').get(isAuthenticated, getUserPost);
router.route('/:id/like').get(isAuthenticated, likePost);
router.route('/:id/unlike').get(isAuthenticated, unlikePost);
router.route('/:id/comment').post(isAuthenticated, addComment);
router.route('/:id/comment/all').post(isAuthenticated, getCommentsOfPost);
router.route('/delele/:id').post(isAuthenticated, delatePost);
router.route('/:id/bookmark').post(isAuthenticated, bookmarkPost);

export default router;

