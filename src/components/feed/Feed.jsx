import { useEffect, useState } from "react";
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';
// import { Posts } from '../../dummyData';

const Feed = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        console.log('Feed rendered')
    });
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {/* {Posts.map((p) => (
                    <Post post={p} key={p.id} />
                ))} */}
            </div>
        </div>
    )
}

export default Feed;