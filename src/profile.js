function ProfileCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt="logo" className="card-image" />
      <div className="media-content">
        <div>Title is {props.title}</div>
        <div>Handel is {props.handel}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
