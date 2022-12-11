import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import { SelectModal } from "../SelectModal";
import { api } from "../../services/api";
import { AddTechModal, ModalHeader } from "./styles";
import { toast } from "react-toastify";

export const AddTech = ({ tech, setTech, handleModalAdd }) => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleTech = (data) => {
    const token = localStorage.getItem("@KenzieHub:Token");
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Beared ${token}`,
        },
      })
      .then(
        (response) => setTech([response.data, ...tech]),
        handleModalAdd(),
        toast.success("Tecnologia adicionada com sucesso")
      )
      .catch((err) => console.log(err));
  };

  return (
    <AddTechModal>
      <ModalHeader>
        <p>Cadastrar Tecnologia</p> <button onClick={handleModalAdd}>X</button>
      </ModalHeader>
      <form onSubmit={handleSubmit(handleTech)}>
        <Input
          register={register}
          label="Nome"
          placeholder="Nome da tecnologia"
          name="title"
          error={errors.title?.message}
        />
        <SelectModal
          register={register}
          label="Selecionar status"
          placeholder="Primeiro Módulo"
          name="status"
          error={errors.status?.message}
        />
        <button type="submit">Cadastrar Tecnologia</button>
      </form>
    </AddTechModal>
  );
};
