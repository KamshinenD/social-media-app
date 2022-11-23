import React from 'react';
import './post.css'
import { LineAxisOutlined, MoreVert } from '@mui/icons-material';
// import { Users } from '../../dummyData';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Post = ({ post }) => {

    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    const [isLoved, setIsLoved] = useState(false);
    const [users, setUsers] = useState([]);

    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get('https://social-media-app-c2173-default-rtdb.firebaseio.com/users.json')
            setUsers(res.data)
            console.log(users);
        }
    })


    const likeHandler = () => {
        if (isLiked === false && isLoved === false) {
            setIsLiked(true);
            setLike(like + 1)
        } else if (isLiked === false && isLoved === true) {
            setIsLiked(true);
            setIsLoved(false);
            setLike(like + 0);
        }

        else {
            setIsLiked(false);
            setLike(like - 1);
        }
    }

    const loveHandler = () => {
        if (isLoved === false && isLiked === false) {
            setIsLoved(true);
            setLike(like + 1)
        } else if (isLoved === false && isLiked === true) {
            setIsLoved(true);
            setIsLiked(false);
            setLike(like + 0)
        }
        else {
            setIsLoved(false);
            setLike(like - 1);
        }
    }
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        {/* <img className='postProfileImg' src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" /> */}
                        <span className="postUsername">
                            {/* {Users.filter((u) => u.id === post.userId)[0].username} */}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                        {post?.desc}
                    </span>
                    <img className='postImg' src={PF + post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className={!isLiked ? 'likeIcon' : 'likeIcon liked'} src={`${PF}/like.png`} alt="" onClick={likeHandler} />
                        <img className={!isLoved ? 'likeIcon' : 'likeIcon loved'} src={`${PF}/heart.png`} alt="" onClick={loveHandler} />
                        <span className="postLikeCounter">{isLiked || isLoved ? `you and ${like} other people reacted to this` : `${like} people reacted`}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} {post.comment === 1 ? 'comment' : 'comments'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post