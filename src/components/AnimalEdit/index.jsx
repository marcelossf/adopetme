import React, { useContext } from "react";
import { Error } from "../Error";
import { Input } from "../InputLabel";
import { SelectForm } from "../SelectForm";
import {
  ButtonContainer,
  ColumnContainer,
  ColumnForm,
  Container,
  FormContainer,
} from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toastSucess } from "../../utils/toast";
import api from "../../api/api";
import { Button } from "../Button";
import { UserContext } from "../../context/user";
import { SolicitationContext } from "../../context/solicitation";
import { useHistory } from "react-router-dom";

export const EditAnimal = () => {
  const { user } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const userID = user.id;
  const history = useHistory();
  const { petData } = useContext(SolicitationContext);
  const petID = petData.id;
  const formSchema = yup.object().shape({
    petName: yup.string(),
    img: yup.string(),
    breed: yup.string(),
    species: yup.string(),
    color: yup.string(),
    gender: yup.string(),
    age: yup.string(),
    porte: yup.string(),
    ong: yup.string(),
    description: yup.string(),
    situation: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function onSubmitFunction(animalData) {
    const formatedData = {};
    const newData = Object.entries(animalData);
    newData.forEach((data) => {
      if (data[1] !== "") {
        formatedData[data[0]] = data[1];
      }
    });
    const finalData = {
      ...formatedData,
      userId: userID,
    };

    api
      .patch(`/pet/${petID}`, finalData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        toastSucess("Animal Cadastrado");
        return history.push("/ong");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <FormContainer>
      <Container>
        <h2>Editar Pet</h2>
        <div className="separator"> </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <ColumnContainer>
            <ColumnForm>
              <Input
                TextLabelForm={"Nome"}
                placeholderInput={petData.petName}
                register={register}
                name="petName"
              />

              {!!errors && <Error>{errors?.petName?.message}</Error>}
              <Input
                TextLabelForm={"Foto do Pet"}
                placeholderInput={petData.img}
                name="img"
                register={register}
              />
              {!!errors && <Error>{errors?.img?.message}</Error>}
              <Input
                TextLabelForm={"Raça"}
                placeholderInput={petData.breed}
                name="breed"
                register={register}
              />
              {!!errors && <Error>{errors?.breed?.message}</Error>}
              <SelectForm
                TextLabelForm={"Espécie"}
                placeholderInput={petData.species}
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
                placeholderInput={petData.color}
                name="color"
                register={register}
              />
              {!!errors && <Error>{errors?.color?.message}</Error>}
              <SelectForm
                name="gender"
                TextLabelForm={"Genero"}
                placeholderInput={petData.gender}
                register={register}
              >
                <option value="Macho">Macho</option>
                <option value="Femea">Fêmea</option>
              </SelectForm>
              {!!errors && <Error>{errors?.gender?.message}</Error>}
            </ColumnForm>
            <ColumnForm>
              <Input
                TextLabelForm={"Idade (em anos)"}
                placeholderInput={petData.age}
                name="age"
                register={register}
              />
              {!!errors && <Error>{errors?.age?.message}</Error>}
              <Input
                TextLabelForm={"Porte"}
                placeholderInput={petData.porte}
                name="porte"
                register={register}
              />
              {!!errors && <Error>{errors?.porte?.message}</Error>}
              <Input
                TextLabelForm={"ONG"}
                placeholderInput={petData.ong}
                name="ong"
                register={register}
              />
              {!!errors && <Error>{errors?.ong?.message}</Error>}
              <Input
                TextLabelForm={"Descrição"}
                placeholderInput={petData.description}
                name="description"
                register={register}
              />
              {!!errors && <Error>{errors?.description?.message}</Error>}
              <Input
                TextLabelForm={"Situação"}
                placeholderInput={petData.situation}
                name="situation"
                register={register}
              />
              {!!errors && <Error>{errors?.situation?.message}</Error>}
            </ColumnForm>
          </ColumnContainer>
          <ButtonContainer>
            <Button width={"200px"} blackSchema type="submit">
              Enviar
            </Button>
          </ButtonContainer>
        </form>
      </Container>
    </FormContainer>
  );
};
