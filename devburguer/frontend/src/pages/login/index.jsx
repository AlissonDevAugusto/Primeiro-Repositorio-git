/* bibliotecas para lidar com o formulario */
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

/* biblioteca para feedbacks */
import { toast } from 'react-toastify';

/* variavel do axio para se conecta com nossa api */
import { api } from '../../services/api.js';

/* nevegar pelas pages */
import { useNavigate } from 'react-router-dom';

/* importando elementos */
import Logo from '../../assets/logo.svg';
import { useUser } from '../../hooks/userContext.jsx';
import { ButtonFollow } from '../../components/button/index.jsx';
import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  Link,
} from './styles.js';

// Autentica o usuário pela API e inicia a sessão no contexto global.
export function Login() {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup
    .object({
      /* validaçao do schema */
      email: yup
        .string()
        .email('* Digite um Email valido')
        .required('* Esse campo e obrigatorio'),
      password: yup
        .string()
        .min(6, '* A senha precisa ter no minimo 6 caracteres')
        .required('* Esse campo e obrigatorio'),
    })
    .required();

  const {
    /* lidando com formularios */
    register /* conecta com o html */,
    handleSubmit /* gerenciar o envio(submit) do 'form' de forma controlada e validada */,
    formState: { errors } /* pegando o status de erros */,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      /* enviando os dados do formulario para o servidor */
      const { data: userData } = await toast.promise(
        api.post('/sessions', {
          email: data.email,
          password: data.password,
        }),
        {
          pending: 'Verificando seus dados',
          success: {
            render() {
              setTimeout(() => {
                if (userData?.admin) {
                  navigate('/admin/pedidos');
                } else {
                  navigate('/');
                }
              }, 2000);
              return 'Seja bem-vindo(a)';
            },
          },
          error: 'Email ou Senha incorretos',
        },
      );

      putUserData(userData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    /* estrutura */
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburguer" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>DevBurguer!</span>
          <br />
          Acesse com seu <span>Email e Senha.</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* pegando os dados com 'handleSubmit' */}
          <InputContainer>
            <label> Email </label>
            <input
              type="email"
              placeholder="exemplo@gmail.com"
              {...register('email')}
            />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label> Senha </label>
            <input
              type="password"
              placeholder="******"
              {...register('password')}
            />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <ButtonFollow type="submit"> ENTRAR </ButtonFollow>
        </Form>

        <p>
          Não possui conta ? <Link to="/cadastro">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
