// Componente react :

/* O Nome do componente react precisa sempre ter a primeira
letra maiuscula ex: App() */

/* para exporta  temos duas formas , o export default que 
so colocamos depois o nome do componente , e caso seja mais 
que um por pagina acrescentamos o export antes dos 
componentes ex: 'export function App()' ,
e no arquivo main , no 'import' colocamos os dois nomes dos 
componentes dentro das chaves ex: '{App , App2}' */

/* antes do return e onde fica o codigo 'JavaScript' ,
de dentro do return fica o codigo 'html' que usando 
a chaves {} exportamos o js , ex: '<p>{Js}</p>' */

/* sempre o codigo html precisa ter uma div pai 
para abraça tudo , se nao o react reconhece como erro 
caso nao queria usa div ou nenhum semantico substitua 
pelo fragment ->  '<> conteudo </>'             */

// CSS no react :

/* para usar o css , criamos o arquivo e importamos 
aqui usando import e o endereço do arquivo ,
mas temos frameworks css haahah */

/* usamos o styled-components e para usa-lo e criando 
arquivo js , e importa o 'style-components' , apos
sabermos como usar e importa o framework , importamos
as estruturas da cada elemento ex: h1,p,div etc 
e o nome do elemento precisa ter a primeira letra maiscular*/

/* podemos estilizar com a estrutura , sendo direto no JSX 
ex: <h1 style={{ color: "blue" , fontSize: 50 }}> </h1> 
ou por exemplo dentro de uma div trazendo o elemento que a
div esta abraçando e usando normalmente css ex: h1 {} */

import { useRef } from "react"
import { useNavigate } from "react-router-dom"

import api from "../../services/api"

import MyButton from "../../components/Button"
import Topbackground from "../../components/Topbackground"
import Tittle from "../../components/Tittle"

import { Container, Form, ContainerInput, Inputlabel, Input } from "./styles"

import UsersImg from "../../assets/users.png"

function Home() {

  const InputName = useRef()
  const InputAge = useRef()
  const InputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    const userData = await api.post("/usuarios" , {
      email: InputEmail.current.value ,
      name: InputName.current.value , 
      age: parseInt(InputAge.current.value) ,
    }) 
  
  }

  return (
    <Container>
      <Topbackground />

      <Form>
        <Tittle> Cadastro de Usuarios </Tittle>

        <ContainerInput>

          <div>
            <Inputlabel>
              Nome <span> *</span>
            </Inputlabel>
            <Input type="text" placeholder="Nome de Usuario" ref={InputName} />
          </div>

          <div>
            <Inputlabel>
              Idade <span> *</span>
            </Inputlabel>
            <Input type="number" placeholder="Idade do Usuario" ref={InputAge} />
          </div>

        </ContainerInput>

        <div style={{ width: "100%" }}>
          <Inputlabel>
            E-mail <span> *</span>
          </Inputlabel>
          <Input type="email" placeholder="E-mail do Usuario" ref={InputEmail} />
        </div>

        <MyButton type="button" onClick={registerNewUser} theme="primary" > Cadastrar </MyButton>

      </Form>

      <MyButton type="button" onClick={ () => navigate("/lista-de-usuarios") } > Consultar usuarios </MyButton>
           {/* Sempre que precisa enviar um parametro na funçao , antes precisa coloca um funçao anonima '() =>' */}
    </Container >
  )
}

export default Home
