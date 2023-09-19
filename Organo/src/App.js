import Banner from "./components/Banner";
import Form from "./components/Form";
import {useState} from "react";
import Team from "./components/Team";
import team from "./components/Team";
import member from "./components/Member";
import Footer from "./components/Footer";

function App() {

    const teams = [
        {
            name: "Programação",
            primaryColor: "#57C278",
            secondaryColor: "#D9F7E9",
        },
        {
            name: "Front-End",
            primaryColor: "#82CFFA",
            secondaryColor: "#E8F8FF",
        },
        {
            name: "Data Science",
            primaryColor: "#A6D157",
            secondaryColor: "#F0F8E2",
        },
        {
            name: "Devops",
            primaryColor: "#E06B69",
            secondaryColor: "#FDE7E8",
        },
        {
            name: "UX e Design",
            primaryColor: "#D86EBF",
            secondaryColor: "#FAE5F5",
        },
        {
            name: "Mobile",
            primaryColor: "#FEBA05",
            secondaryColor: "#FFF5D9",
        },
        {
            name: "Inovação e Gestão",
            primaryColor: "#FF8A29",
            secondaryColor: "#FFEEDF",
        }
    ]

    const [members, setMembers] = useState([])

    const onRegisterMember = (member) => {
        setMembers([...members, member]);
    }

    return (
        <div className="App">
            <Banner/>
            <Form
                onRegister={member => onRegisterMember(member)}
                teamNames={teams.map(team => team.name)}
            />
            <div className="teamsTitle">
                <h2>Minha Organização:</h2>
                <hr/>
            </div>

            {teams.map(team => <Team
                key={team.name}
                name={team.name}
                primaryColor={team.primaryColor}
                secondaryColor={team.secondaryColor}
                members={members.filter(member => member.team === team.name)}
            /> )}


            <Footer/>
        </div>
    );
}

export default App;
