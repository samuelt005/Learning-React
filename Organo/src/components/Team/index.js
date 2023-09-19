import './Team.css';
import Member from "../Member";
import member from "../Member";
export const Team = (props) => {
    const primaryColor = { backgroundColor: props.primaryColor };
    const secondaryColor = { backgroundColor: props.secondaryColor };

    return (
        (props.members.length > 0) ?
        <section className="team" style={secondaryColor}>
            <h3>{props.name}</h3>
            <hr style={primaryColor}/>
            <div className="members">
                {props.members.map( member => <Member
                    backgroundColor={props.primaryColor}
                    key={member.name}
                    name={member.name}
                    charge={member.charge}
                    image={member.image}
                />)}
            </div>
        </section>
            : ""
    )
}

export default Team