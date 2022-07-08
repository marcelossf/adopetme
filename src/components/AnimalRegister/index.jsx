import React, { useContext, useState } from "react";
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
import { AnimalsListContext } from "../../context/animals";
import { Input } from "../InputLabel";
import { SelectForm } from "../SelectForm";

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

  const [active, setActive] = useState(true);

  ////////////////////Pegar dados da ONG//////////////////////////
  const { pets } = useContext(AnimalsListContext);

  ///////////Fazer o POST pra api/////////////////////////

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function onSubmitFunction(animalData) {
    const newData = { ...animalData, idOwner: 2, address: "adff" };
    console.log(newData);
  }
  console.log(errors);
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
                    <Input
                      TextLabelForm={"Nome"}
                      placeholderInput={"Nome"}
                      register={register}
                      name="petName"
                    />
                    {!!errors && <Error>{errors?.petName?.message}</Error>}
                    <Input
                      TextLabelForm={"Foto do Pet"}
                      placeholderInput={"Foto do Pet"}
                      name="img"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.img?.message}</Error>}
                    <Input
                      TextLabelForm={"Raça"}
                      placeholderInput={"Raça"}
                      name="breed"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.breed?.message}</Error>}
                    <SelectForm
                      TextLabelForm={"Espécie"}
                      placeholderInput={"Espécie"}
                      name="species"
                      register={register}
                    >
                      <option value="Cachorro">Cachorro</option>
                      <option value="Gato">Gato</option>
                      <option value="Roedor">Roedor</option>
                    </SelectForm>
                    {!!errors && <Error>{errors?.species?.message}</Error>}
                    <Input
                      TextLabelForm={"Cor"}
                      placeholderInput={"Cor"}
                      name="color"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.color?.message}</Error>}
                    <SelectForm
                      name="gender"
                      TextLabelForm={"Genero"}
                      placeholderInput={"Genero"}
                      register={register}
                    >
                      <option value="Macho">Macho</option>
                      <option value="Femea">Fêmea</option>
                    </SelectForm>
                    {!!errors && <Error>{errors?.gender?.message}</Error>}
                  </ColumnForm>
                  <ColumnForm>
                    <Input
                      TextLabelForm={"Idade"}
                      placeholderInput={"Idade"}
                      name="age"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.age?.message}</Error>}
                    <Input
                      TextLabelForm={"Porte"}
                      placeholderInput={"Porte"}
                      name="porte"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.porte?.message}</Error>}
                    <Input
                      TextLabelForm={"ONG"}
                      placeholderInput={"ONG"}
                      name="ong"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.ong?.message}</Error>}
                    <Input
                      TextLabelForm={"Descrição"}
                      placeholderInput={"Descrição"}
                      name="description"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.description?.message}</Error>}
                    <Input
                      TextLabelForm={"Situação"}
                      placeholderInput={"Situação"}
                      name="situation"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.situation?.message}</Error>}
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
                    <Input
                      TextLabelForm={"Nome"}
                      placeholderInput={"Nome"}
                      register={register}
                      name="petName"
                    />
                    {!!errors && <Error>{errors?.petName?.message}</Error>}
                    <Input
                      TextLabelForm={"Foto do Pet"}
                      placeholderInput={"Foto do Pet"}
                      name="img"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.img?.message}</Error>}
                    <Input
                      TextLabelForm={"Raça"}
                      placeholderInput={"Raça"}
                      name="breed"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.breed?.message}</Error>}
                    <SelectForm
                      TextLabelForm={"Espécie"}
                      placeholderInput={"Espécie"}
                      name="species"
                      register={register}
                    >
                      <option value="Cachorro">Cachorro</option>
                      <option value="Gato">Gato</option>
                      <option value="Roedor">Roedor</option>
                    </SelectForm>
                    {!!errors && <Error>{errors?.species?.message}</Error>}
                    <Input
                      TextLabelForm={"Cor"}
                      placeholderInput={"Cor"}
                      name="color"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.color?.message}</Error>}
                    <SelectForm
                      name="gender"
                      TextLabelForm={"Genero"}
                      placeholderInput={"Genero"}
                      register={register}
                    >
                      <option value="Macho">Macho</option>
                      <option value="Femea">Fêmea</option>
                    </SelectForm>
                    {!!errors && <Error>{errors?.gender?.message}</Error>}
                  </ColumnForm>
                  <ColumnForm>
                    <Input
                      TextLabelForm={"Idade"}
                      placeholderInput={"Idade"}
                      name="age"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.age?.message}</Error>}
                    <Input
                      TextLabelForm={"Porte"}
                      placeholderInput={"Porte"}
                      name="porte"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.porte?.message}</Error>}
                    <Input
                      TextLabelForm={"ONG"}
                      placeholderInput={"ONG"}
                      name="ong"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.ong?.message}</Error>}
                    <Input
                      TextLabelForm={"Descrição"}
                      placeholderInput={"Descrição"}
                      name="description"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.description?.message}</Error>}
                    <Input
                      TextLabelForm={"Situação"}
                      placeholderInput={"Situação"}
                      name="situation"
                      register={register}
                    />
                    {!!errors && <Error>{errors?.situation?.message}</Error>}
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
