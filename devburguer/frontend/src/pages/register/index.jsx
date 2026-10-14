/* bibliotecas para lidar com o formulario */
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

/* biblioteca para feedbacks */
import { toast } from 'react-toastify';

/* axios para se conecta com api */
import { api } from '../../services/api.js';

/* navegar pelas pages */
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
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

// Valida o cadastro, envia os dados à API e direciona ao login após sucesso.
export function Register() {

  const navigate = useNavigate();

  const schema = yup /* validaçao para o formulario */
    .object({
      name: yup.string().required('* Esse campo e obrigatorio'),
      email: yup
        .string()
        .email('* Digite um email valido')
        .required('* Esse campo e obrigatorio'),
      password: yup
        .string()
        .min(6, '* A senha precisa ter no minimo 6 caracteres')
        .required('* Esse campo e obrigatorio'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
        .required('* Esse campo e obrigatorio'),
    })
    .required();

  const {
    /* lidando com os formularios */
    register /* conecta o html com o react-rook-form */,
    handleSubmit /* gerencia o envio(submit) do 'form' de forma controlada e validada */,
    formState: { errors } /* pegando o status de erros */,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        },
      );

      if (status === 200 || status === 201) {
        setTimeout(() => { /* navegando para login aproveitando a msg do toastify */
          navigate('/login')
        }, 2000);
        toast.success('Cadastro efetuado com sucesso');
      } else if (status === 400) {
        toast.error('Email ja existente, crie um ou faça login');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Erro no sistema, Tente novamente');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} />
      </LeftContainer>

      <RightContainer>
        <Title> Criar Conta </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* pegando os dados com 'handleSubmit' */}
          <InputContainer>
            <label> Nome </label>
            <input type="text" placeholder="seu nome" {...register('name')} />
            <p>{errors?.name?.message}</p>
          </InputContainer>
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
          <InputContainer>
            <label> Confirmar senhar </label>
            <input
              type="password"
              placeholder="******"
              {...register('confirmPassword')}
            />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>
          <ButtonFollow type="submit"> CONFIRMAR CADASTRO </ButtonFollow>
        </Form>

        <p>
          Ja possui conta ? <Link to="/login">Clique aqui</Link>{' '}
        </p>
      </RightContainer>
    </Container>
  );
}
