import './Form.css';
import TextField from "../TextField";
import SuspendedList from "../SuspendedList";
import Button from "../Button";
import {useState} from "react";
export const Form = (props) => {

    const [name, setName] = useState("");
    const [charge, setCharge] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");

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

    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>

                <TextField
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    onChanged={value => setName(value)}
                />

                <TextField
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={charge}
                    onChanged={value => setCharge(value)}
                />

                <TextField
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
        </section>
    )
}

export default Form