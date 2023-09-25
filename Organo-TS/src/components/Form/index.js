import './Form.css';
import Field from "../Field";
import SuspendedList from "../SuspendedList";
import Button from "../Button";
import {useState} from "react";
export const Form = (props) => {

    const [name, setName] = useState("");
    const [charge, setCharge] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");
    const [teamName, setTeamName] = useState("");
    const [teamColor, setTeamColor] = useState("");

    const onSave = (event) => {
        event.preventDefault();
        props.onRegister({
            name,
            charge,
            image,
            team
        })
        setName("");
        setCharge("");
        setImage("");
        setTeam("");
    }

    const onSaveTeam = (event) => {
        event.preventDefault();
        props.onRegisterTeam({
            name: teamName,
            color: teamColor
        })
        setTeamName("");
        setTeamColor("");
    }

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>

                <Field
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChanged={value => setName(value)}
                />

                <Field
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={charge}
                    onChanged={value => setCharge(value)}
                />

                <Field
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChanged={value => setImage(value)}
                />

                <SuspendedList
                    required={true}
                    label="Time"
                    items={props.teamNames}
                    value={team}
                    onChanged={value => setTeam(value)}
                />

                <Button>
                    Criar Card
                </Button>
            </form>
            <form onSubmit={onSaveTeam}>
                <h2>Preencha os dados para criar um novo time.</h2>

                <Field
                    required
                    label="Nome"
                    placeholder="Digite o nome do time"
                    value={teamName}
                    onChanged={value => setTeamName(value)}
                />

                <Field
                    required
                    type="color"
                    label="Cor"
                    placeholder="Digite a cor do time"
                    value={teamColor}
                    onChanged={value => setTeamColor(value)}
                />

                <Button>
                    Criar Time
                </Button>
            </form>
        </section>
    )
}

export default Form