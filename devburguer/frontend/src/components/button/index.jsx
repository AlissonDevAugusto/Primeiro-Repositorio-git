import PropTypes from 'prop-types';
import { ContainerButton } from './styles.js';

// Botão reutilizável que recebe conteúdo e propriedades do contexto de uso.
export function ButtonFollow({ children, ...props }) { /* component button */
    return (
        <ContainerButton {...props}>{children}</ContainerButton>
    )
}


ButtonFollow.propTypes = { /* validar qual e o tipo de dado que esta chegando */
    children: PropTypes.node, /* texto, icone ou spinner */
};
