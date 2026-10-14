import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components";

// Mantém o cabeçalho e rodapé comuns em todas as rotas públicas.
export function UserLayout() {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
