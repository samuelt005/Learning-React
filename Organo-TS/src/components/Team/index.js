import './Team.css';
import Member from "../Member";
import hexToRgba from 'hex-to-rgba';

export const Team = ({ team, members, onDelete, changeColor, onFavorite }) => {
    const color = { backgroundColor: team.color };
    const secondaryColor = { backgroundColor: hexToRgba(team.color, 0.5) };

    return (
        (members.length > 0) ?
        <section className="team" style={secondaryColor}>
            <input onChange={event => changeColor(event.target.value, team.id)} value={team.color} type="color" className="input-color"/>
            <h3>{team.name}</h3>
            <hr style={color}/>
            <div className="members">
                {members.map( (member, index) => {
                    return <Member
                        key={index}
                        member={member}
                        backgroundColor={color}
                        onDelete={onDelete}
                        onFavorite={onFavorite}
                    />;
                })}
            </div>
        </section>
            : ""
    )
}

export default Team