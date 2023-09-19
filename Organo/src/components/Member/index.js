import "./Member.css"

const Member = ({ name, charge, image, backgroundColor }) => {
    return (
        <div className="member">
            <div className="header" style={{backgroundColor: backgroundColor}}>
                <img src={image} alt={name}/>
            </div>
            <div className="footerMember">
                <h4>{name}</h4>
                <h5>{charge}</h5>
            </div>
        </div>
    )
}

export default Member