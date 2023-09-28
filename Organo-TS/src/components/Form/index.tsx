import './Form.css';
import Field from "../Field";
import SuspendedList from "../SuspendedList";
import Button from "../Button";
import {useState} from "react";
import { IMember } from '../../shared/interfaces/IMember';
import { ITeam } from '../../shared/interfaces/ITeam';
import { v4 as uuidv4 } from 'uuid';

interface FormProps {
    onRegister: (member: IMember) => void
    onRegisterTeam: (member: ITeam) => void
    teamNames: string[]
}

export const Form = (props: FormProps) => {

    const [name, setName] = useState("");
    const [charge, setCharge] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");
    const [teamName, setTeamName] = useState("");
    const [teamColor, setTeamColor] = useState("");

    const onSave = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onRegister({
            id: uuidv4(),
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

    const onSaveTeam = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onRegisterTeam({
            id: uuidv4(),
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
                    required
                    type='text'
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChanged={value => setName(value)}
                />

                <Field
                    required
                    type='text'
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={charge}
                    onChanged={value => setCharge(value)}
                />

                <Field
                    type='text'
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    value={image}
                    onChanged={value => setImage(value)}
                />

                <SuspendedList
                    required
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
                    type='text'
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