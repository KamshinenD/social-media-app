import './rightbar.css';
import { Users } from '../../dummyData'
import Online from '../online/Online';

const Rightbar = ({ profile }) => {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src={`${PF}/gift.png`} alt="" />
                    <span className="birthdayText">
                        <b>Rengkat Alexander</b>, <b>Patience Ali</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img className='rightbarAd' src={`${PF}/ad.png`} alt="" />
                <h4 className='rightbarTitle'>Online Friends</h4>
                <ul className='rigthbarFriendsList'>
                    {Users.map((user) => (
                        <Online user={user} key={user.id} />
                    ))}
                </ul>
            </>)
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className='rightbarTitle'> User Information </h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City: </span>
                        <span className="rightbarInfoValue">Lagos</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From: </span>
                        <span className="rightbarInfoValue">Jos, Nigeria</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">in a relationship</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src={`${PF}/person/1.jpeg`} alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src={`${PF}/person/2.jpeg`} alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src={`${PF}/person/3.jpeg`} alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src={`${PF}/person/4.jpeg`} alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src={`${PF}/person/5.jpeg`} alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img className='rightbarFollowingImg' src={`${PF}/person/6.jpeg`} alt="" />
                        <span className="rightbarFollowingName">John Carter</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar;