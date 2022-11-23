import './closeFriend.css'

const CloseFriend = ({ friend }) => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    return (
        <div>
            <li className='sidebarFriend'>
                <img className='sidebarFriendImg' src={PF + friend.profilePicture} alt="" />
                <span className="sidebarFriendName">{friend.username}</span>
            </li>
        </div>
    )
}

export default CloseFriend; 