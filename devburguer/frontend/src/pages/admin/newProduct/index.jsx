import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { api } from '../../../services/api.js';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  ContainerForm,
  Form,
  ContainerInput,
  Label,
  Input,
  Select,
  Button,
  IconAddImg,
  ErrorMessage,
  LabelUpload,
  FileName,
  ContainerCheck,
} from './styles.js';
import { toast } from 'react-toastify';

const schema = yup
  .object({
    name: yup.string().required('Esse campo e obrigatorio'),
    price: yup
      .number()
      .positive('Apenas valor positvo')
      .required('Esse campo e obrigatorio')
      .typeError('Esse campo e obrigatorio'),
    category: yup.object().required('Esse campo e obrigatorio'),
    offer: yup.bool(),
    file: yup
      .mixed()
      .test('required', 'Escolha um arquivo para prosseguir', (value) => {
        return value && value.length > 0;
      })
      .test('fileSize', 'Carregue arquivos ate 5mb', (value) => {
        return value && value.length > 0 && value[0].size <= 5 * 1024 * 1024;
      })
      .test('type', 'Carregue apenas imagem PNG ou JPEG', (value) => {
        return (
          value &&
          value.length > 0 &&
          (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
        );
      }),
  })
  .required();

// Valida os campos e envia um novo produto, incluindo imagem, para a API.
export function NewProduct() {
  const [fileName, setFileName] = useState(null);
  const [categories, setCategories] = useState([0]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { onChange: onFileChange, ...fileInputProps } = register('file');

  const onSubmit = async (data) => {
    const productFormData = new FormData();

    productFormData.append('name', data.name)
    productFormData.append('price', data.price * 100);
    productFormData.append('category_id', data.category.id)
    productFormData.append('file', data.file[0]);
    productFormData.append('offer', data.offer)
  
    try {
      await toast.promise(api.post('/products', productFormData), {
        pending: 'Adicionando produto...',
        success: 'Produto criado com sucesso',
        error: {
          render({ data: error }) {
            return (
              error.response?.data?.message ||
              'Falha ao adicionar o produto, tente novamente'
            );
          },
        },
      });

      setTimeout(() => {
        navigate('/admin/listar-produto')
      }, 2000);
    } catch (error) {
      console.error('Erro ao criar produto:', error.response?.data || error);
    }

  };
  return (
    <Container>
      <ContainerForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ContainerInput>
            <Label>Nome</Label>
            <Input type="text" {...register('name')} />
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </ContainerInput>

          <ContainerInput>
            <Label>Preço</Label>
            <Input type="number" {...register('price')} />
            <ErrorMessage>{errors.price?.message}</ErrorMessage>
          </ContainerInput>

          <ContainerInput>
            <LabelUpload>
              <IconAddImg />
              <input
                type="file"
                {...fileInputProps}
                accept="image/png, image/jpeg"
                onChange={(event) => {
                  setFileName(event.target.files[0]?.name);
                  onFileChange(event);
                }}
              />
              <FileName>{fileName || 'Upload do Produto'}</FileName>
            </LabelUpload>
            <ErrorMessage>{errors.file?.message}</ErrorMessage>
          </ContainerInput>

          <ContainerInput>
            <Label>Categoria</Label>
            <Controller
              name="category"
              control={control}
              render={({field}) => (
                <Select
                {...field}
                  placeholder="Selecionar..."
                  options={categories}
                  getOptionLabel={(category) => category.name}
                  getOptionValue={(category) => category.id}
                  menuPortalTarget={document.body}
                />
              )}
            />
            <ErrorMessage>{errors.category?.message}</ErrorMessage>
          </ContainerInput>

          <ContainerInput>
                      <ContainerCheck>
                        <Label>Produto em Oferta ?</Label>
                        <input 
                        type='checkbox'
                        
                        {...register('offer')}
                        />
                      </ContainerCheck>
                    </ContainerInput>

          <Button>Adicionar Produto</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
}
