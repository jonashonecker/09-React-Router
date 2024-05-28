import './NewCharacterForm.css'
import {ChangeEvent, useState} from "react";

type NewCharacter = {
    name: string;
    status: string;
    species: string;
    gender: string;
}

export default function NewCharacterForm() {
    const [newCharacter, setNewCharacter] = useState<NewCharacter>({name: "", status: "", gender: "", species: ""});

    const saveCharacterOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewCharacter({...newCharacter, [event.target.name]: event.target.value})
    }

    return (
        <div className="new-character-form">
            <form>
                <div className="new-character-form__grid">
                    <div>
                        <p>Name:</p>
                    </div>
                    <div>
                        <p>Status:</p>
                    </div>
                    <div>
                        <p>Species:</p>
                    </div>
                    <div>
                        <p>Gender:</p>
                    </div>
                    <div>
                        <input onChange={saveCharacterOnChange} placeholder="Max Mustermann" value={newCharacter.name}
                               name={newCharacter.name}/>
                    </div>
                    <div>
                        <input onChange={saveCharacterOnChange} placeholder="Alive" value={newCharacter.status}
                               name={newCharacter.status}/>
                    </div>
                    <div>
                        <input onChange={saveCharacterOnChange} placeholder="Human" value={newCharacter.species}
                               name={newCharacter.species}/>
                    </div>
                    <div>
                        <input onChange={saveCharacterOnChange} placeholder="Male" value={newCharacter.gender}
                               name={newCharacter.gender}/>
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}