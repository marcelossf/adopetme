import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ColumnContainer,
  ColumnForm,
  Container,
  FolderContainer,
  FormContainer,
  HeaderFormContainer,
  SectionContainer,
} from "./style";
import { Button } from "../Button";
import { Error } from "../Error";
import { AnimalsListContext } from "../../Context/animals";

export const AnimalRegister = () => {
  const formSchema = yup.object().shape({
    petName: yup.string().required("Nome Obrigatório"),
    img: yup.string().required("URL Da imagem obrigatória"),
    breed: yup.string().required("Campo Obrigatório"),
    species: yup.string().required("Campo Obrigatório"),
    color: yup.string().required("Campo Obrigatório"),
    gender: yup.string().required("Campo Obrigatório"),
    age: yup.number().required("Campo Obrigatório"),
    porte: yup.string().required("Campo Obrigatório"),
    ong: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
    situation: yup.string().required("Campo Obrigatório"),
  });

  ////////////////////Pegar dados da ONG//////////////////////////
  const { pets, active, setActive } = useContext(AnimalsListContext);

  

  ///////////Fazer o POST pra api/////////////////////////

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function onSubmitFunction(animalData) {
    const newData = { ...animalData, idOwner: 2, address: "adff" };
  }

  return (
    <SectionContainer>
      <FolderContainer>
        <HeaderFormContainer>
          <button
            onClick={() => setActive(!active)}
            className={active ? "registerBtn" : "registerBtn disable"}
          >
            Cadastro
          </button>
          <button
            onClick={() => setActive(!active)}
            className={!active ? "editBtn" : "editBtn disable"}
          >
            Editar
          </button>
        </HeaderFormContainer>
        {active ? (
          <FormContainer>
            <Container>
              <h2>Cadastrar Animais</h2>
              <div className="separator"> </div>
              <form onSubmit={handleSubmit(onSubmitFunction)}>
                <ColumnContainer>
                  <ColumnForm>
                    <label htmlFor="">Nome:</label>
                    {errors && <Error error={errors?.petName?.message} />}
                    <input
                      type="text"
                      placeholder="Nome"
                      {...register("petName")}
                    />
                    <label htmlFor="">Foto Do Pet:</label>
                    <input
                      type="text"
                      placeholder="url Imagem"
                      {...register("img")}
                    />
                    <label htmlFor="">Raça:</label>
                    <input
                      type="text"
                      placeholder="Raça"
                      {...register("breed")}
                    />
                    <label htmlFor="">Espécie:</label>
                    <select name="" {...register("species")}>
                      <option value="Cachorro">Cachorro</option>
                      <option value="Gato">Gato</option>
                      <option value="Roedor">Roedor</option>
                    </select>
                    <label htmlFor="">Cor:</label>
                    <input
                      type="text"
                      placeholder="Cor"
                      {...register("color")}
                    />
                    <label htmlFor="">Genero:</label>
                    <select name="" {...register("gender")}>
                      <option value="male">Macho</option>
                      <option value="female">Femea</option>
                    </select>
                  </ColumnForm>
                  <ColumnForm>
                    <label htmlFor="">Idade:</label>
                    <input
                      type="text"
                      placeholder="Idade"
                      {...register("age")}
                    />
                    <label htmlFor="">Porte:</label>
                    <input
                      type="text"
                      placeholder="Porte"
                      {...register("porte")}
                    />
                    <label htmlFor="">Ong:</label>
                    <input type="text" placeholder="Ong" {...register("ong")} />
                    <label htmlFor="">Descrição:</label>
                    <input
                      type="text"
                      placeholder="Descrição"
                      {...register("description")}
                    />
                    <label htmlFor="">Situação:</label>
                    <input
                      type="text"
                      placeholder="Situação"
                      {...register("situation")}
                    />
                  </ColumnForm>
                </ColumnContainer>
                <Button blackSchema type="submit">
                  Enviar
                </Button>
              </form>
            </Container>
          </FormContainer>
        ) : (
          <FormContainer>
            <Container>
              <h2>Editar Animal</h2>
              <div className="separator"> </div>
              <form onSubmit={handleSubmit(onSubmitFunction)}>
                <ColumnContainer>
                  <ColumnForm>
                    <label htmlFor="">Nome:</label>
                    {errors && <Error error={errors?.petName?.message} />}
                    <input
                      type="text"
                      placeholder="Nome"
                      {...register("petName")}
                    />
                    <label htmlFor="">Foto Do Pet:</label>
                    <input
                      type="text"
                      placeholder="url Imagem"
                      {...register("img")}
                    />
                    <label htmlFor="">Raça:</label>
                    <input
                      type="text"
                      placeholder="Raça"
                      {...register("breed")}
                    />
                    <label htmlFor="">Espécie:</label>
                    <select name="" {...register("species")}>
                      <option value="Cachorro">Cachorro</option>
                      <option value="Gato">Gato</option>
                      <option value="Roedor">Roedor</option>
                    </select>
                    <label htmlFor="">Cor:</label>
                    <input
                      type="text"
                      placeholder="Cor"
                      {...register("color")}
                    />
                    <label htmlFor="">Genero:</label>
                    <select name="" {...register("gender")}>
                      <option value="male">Macho</option>
                      <option value="female">Femea</option>
                    </select>
                  </ColumnForm>
                  <ColumnForm>
                    <label htmlFor="">Idade:</label>
                    <input
                      type="text"
                      placeholder="Idade"
                      {...register("age")}
                    />
                    <label htmlFor="">Porte:</label>
                    <input
                      type="text"
                      placeholder="Porte"
                      {...register("porte")}
                    />
                    <label htmlFor="">Ong:</label>
                    <input type="text" placeholder="Ong" {...register("ong")} />
                    <label htmlFor="">Descrição:</label>
                    <input
                      type="text"
                      placeholder="Descrição"
                      {...register("description")}
                    />
                    <label htmlFor="">Situação:</label>
                    <input
                      type="text"
                      placeholder="Situação"
                      {...register("situation")}
                    />
                  </ColumnForm>
                </ColumnContainer>
                <Button blackSchema type="submit">
                  Enviar
                </Button>
              </form>
            </Container>
          </FormContainer>
        )}
      </FolderContainer>
    </SectionContainer>
  );
};
