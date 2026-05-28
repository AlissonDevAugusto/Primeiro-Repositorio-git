import { Topbackground } from "./styles"
import UsersImg from "../../assets/users.png"


function Background() {

    return (
        <Topbackground> 
            <img src={UsersImg} alt="Image-Users"></img>
        </Topbackground>
    )
}

export default Background