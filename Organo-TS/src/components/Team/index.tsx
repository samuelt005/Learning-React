import './Team.css';
import Member from "../Member";
import hexToRgba from 'hex-to-rgba';
import { IMember } from '../../shared/interfaces/IMember';
import { ITeam } from '../../shared/interfaces/ITeam';

interface teamProps {
    team: ITeam
    members: IMember[]
    onDelete: (id: string) => void;
    onFavorite: (id: string) => void;
    changeColor: (value: string, id: string) => void;
}

export const Team = ({ team, members, onDelete, onFavorite, changeColor, } :teamProps) => {
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
            : <></>
    )
}

export default Team