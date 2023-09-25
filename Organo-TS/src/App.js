import {useState} from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from 'uuid';

function App() {

    const [teams, setTeams] = useState([
        {
            id: uuidv4(),
            name: "Programação",
            color: "#57C278"
        },
        {
            id: uuidv4(),
            name: "Front-End",
            color: "#82CFFA"
        },
        {
            id: uuidv4(),
            name: "Data Science",
            color: "#A6D157"
        },
        {
            id: uuidv4(),
            name: "Devops",
            color: "#E06B69"
        },
        {
            id: uuidv4(),
            name: "UX e Design",
            color: "#D86EBF"
        },
        {
            id: uuidv4(),
            name: "Mobile",
            color: "#FEBA05"
        },
        {
            id: uuidv4(),
            name: "Inovação e Gestão",
            color: "#FF8A29"
        }
    ])

    const inicial = [
        {
            id: uuidv4(),
            favorite: false,
            name: 'JULIANA AMOASEI',
            charge: 'Desenvolvedora de software e instrutora',
            image: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            team: teams[0].name
        },
        {
            id: uuidv4(),
            favorite: false,
            name: 'DANIEL ARTINE',
            charge: 'Engenheiro de Software na Stone Age',
            image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            team: teams[0].name
        },
        {
            id: uuidv4(),
            favorite: false,
            name: 'GUILHERME LIMA',
            charge: 'Desenvolvedor Python e JavaScript na Alura',
            image: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            team: teams[0].name
        },
        {
            id: uuidv4(),
            favorite: false,
            name: 'PAULO SILVEIRA',
            charge: 'Hipster e CEO da Alura',
            image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            team: teams[0].name
        }
    ]

    const [members, setMembers] = useState(inicial)

    const onRegisterMember = (member) => {
        setMembers([...members, member]);
    }

    function deleteMember(id) {
        setMembers(members.filter(member => member.id !== id));
    }

    function changeColor(color, id) {
        setTeams(teams.map(team => {
            if(team.id === id) {
                team.color = color;
            }
            return team;
        }));
    }

    function resolveFavorite(id) {
        setMembers(members.map(member => {
            if (member.id === id) {
                member.favorite = !member.favorite;
            }
            return member;
        }))
    }

    function onRegisterTeam(newTeam) {
        setTeams([ ...teams, { ...newTeam, id:uuidv4() } ])
    }

    return (
        <div className="App">
            <Banner imageSource="/imgs/banner.png" altText="O banner principal da página do Organo" />
            <Form
                onRegister={member => onRegisterMember(member)}
                onRegisterTeam={onRegisterTeam}
                teamNames={teams.map(team => team.name)}
            />
            <div className="teamsTitle">
                <h2>Minha Organização:</h2>
                <hr/>
            </div>

            {teams.map((team, index) =>
                <Team
                    onFavorite={resolveFavorite}
                    key={index}
                    team={team}
                    members={members.filter(member => member.team === team.name)}
                    onDelete={deleteMember}
                    changeColor={changeColor}
                />
            )}
            <Footer />
        </div>
    );
}

export default App;
