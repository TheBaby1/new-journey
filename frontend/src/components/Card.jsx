import profilePic from '../assets/anime1.jpg'
function Card(props){

    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile-picture"></img>
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">He is the best player in the world.</p>
        </div>
    );
}

export default Card;