import profilePic from '../../assets/cardComponent-imgs/profilePic.png';

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile Picture" className='card-image'/>
            <h2 className='card-titulo'>Gugofo</h2>
            <p className='card-text'>Engenheiro De Software</p>
        </div>
    )
}

export default Card