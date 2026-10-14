import { MyButton } from './styles'
import PropTypes from 'prop-types'

function DefaultButton({ children , theme , ...props}) {
    
    return (
        <MyButton {...props} theme={theme} >{children}</MyButton>
    )
}


// Validaçao para indentificar o type da informaçao que ta chegando dentro () se tiver correto 
DefaultButton.propTypes = {
    children: PropTypes.node.isRequired ,
    theme: PropTypes.string
}

export default DefaultButton