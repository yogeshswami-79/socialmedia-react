import React from 'react';
import {MoreVert} from '@mui/icons-material'
import "./post.css"
import {Users} from "../../Utils/dummyData"

const Post = ({post}) => {
    return (
        <div className="post">
            <div className="postWrapper">

                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users[post.userId].profilePicture} alt="" className="postProfileImg" loading='lazy'/>
                        <span className="postUsername">{Users[post.userId].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src={post.photo} alt="" className='postImg' loading="lazy"/>
                </div>

                <div className="postBottom">
                    <div className="postBottomLf">
                        <img src="assets/like.png" alt="" className='likeIcon'/>
                        <img src="assets/heart.png" alt="" className='likeIcon'/>
                        <span className="postLikeCounter">{post.like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Post;