import api from "..//..//services/api"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import MyButton from "../../components/Button"
import Topbackground from "../../components/Topbackground"
import Tittle from "../../components/Tittle"

import { Container , ContainerUsers , CardUsers , TrashIcon , AvatarUser } from "./styles"

import binImg from "..//..//assets/trash.svg"

function ListUsers() {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get("/usuarios")

            setUsers(data)
        }

        getUsers()

    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const updateUsers = users.filter ( user => user.id !== id)

        setUsers(updateUsers)
    }



    return (
        <Container>
            <Topbackground />

            <Tittle> Listagem de Usuarios </Tittle>
            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id} >
                        <AvatarUser src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${user.id}`}/>
                        <div >
                            <h3>{user.name}</h3>
                            <p>Idade : {user.age} </p>
                            <p>Email : {user.email}</p>
                        </div>
                        <TrashIcon src={binImg} alt="image-lixeira" onClick={ () => deleteUsers(user.id)} />
                    </CardUsers>
                ))}
            </ContainerUsers>
            <MyButton style={{ margin: '40px'}} onClick={ () => navigate("/") } >Voltar </MyButton>
        </Container>

    )
}

export default ListUsers