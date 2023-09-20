import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import "./Member.css"

const Member = ({ member, backgroundColor, onDelete, onFavorite }) => {
    function favorite() {
        onFavorite(member.id);
    }

    return (
        <div className="member">
            <AiFillCloseCircle
                color={"gray"}
                size={25}
                className="delete"
                onClick={() => onDelete(member.id)}
            />
            <div className="header" style={backgroundColor}>
                <img src={member.image} alt={member.name}/>
            </div>
            <div className="footerMember">
                <h4>{member.name}</h4>
                <h5>{member.charge}</h5>
                <div className="favorite">
                    {member.favorite
                        ? <AiFillHeart
                            size={25}
                            color="red"
                            onClick={favorite}
                        />
                        : <AiOutlineHeart
                            size={25}
                            onClick={favorite}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Member