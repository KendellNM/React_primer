import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => setUsuarios(data));

    }, [])

    return (
        <div>
            <h2 className="font-bold text-lg mt-8">Lista de usuarios</h2>
            <ul className="gap-9 flex flex-col mt-7 ">
                {usuarios.map(
                    usuario => (<li className="ml-4" key={usuario.id}>{usuario.name}</li>
                    
                    )
                )}
            </ul>
        </div>
    )

}

export default Usuarios;