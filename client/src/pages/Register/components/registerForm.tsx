import { useState } from 'react';

function RegisterForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ ...inputs })


        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Nome
                <input
                    type='text'
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}

                ></input>
            </label>
            <label>Vulgo
                <input
                    type='text'
                    name="vulgo"
                    value={inputs.vulgo || ""}
                    onChange={handleChange}>

                </input>
            </label>
            <label>Cargo
                <input
                    type='text'
                    name="role"
                    value={inputs.role || ""}
                    onChange={handleChange}>
                </input>
            </label>
            <label>Área de atuação
                <input
                    type='text'
                    name="operation"
                    value={inputs.operation || ""}
                    onChange={handleChange}

                ></input>
            </label>
            <label>Data de nascimento
                <input
                    type='date'
                    name="operation"
                    value={inputs.dateBirth || ""}
                    onChange={handleChange}
                ></input>
            </label>
            <label>Cidade de nascimento
                <input
                    type='text'
                    name="cityBirth"
                    value={inputs.cityBirth || ""}
                    onChange={handleChange}
                ></input>
            </label>
            <label>Descrição
                <input
                    type='text'
                    name="description"
                    value={inputs.description || ""}
                    onChange={handleChange}
                ></input>
            </label>
            <label>foto</label>
            <input type="file"></input>
            <input type="submit" />


        </form>
    )
}
export default RegisterForm