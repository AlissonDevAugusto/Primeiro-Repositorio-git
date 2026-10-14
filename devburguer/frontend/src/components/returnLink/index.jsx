import { ReactLink } from './styles.js';

// Renderiza o link reutilizável de retorno à página anterior.
export function ReturnLink({children, ...props}) {
    return(
        <ReactLink {...props}>{children}</ReactLink>
    )
}
