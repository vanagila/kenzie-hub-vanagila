import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import { SelectModal } from "../SelectModal";
import { api } from "../../services/api";
import { EditTechModal, ModalHeader, EditBtn } from "./styles";
import { useState } from "react";
import { toast } from "react-toastify";

export const EditTech = ({ handleModalEdit, selectedTech }) => {
  const [newStatus, setNewStatus] = useState(selectedTech.status);

  const formSchema = yup.object().shape({
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleEditTech = () => {
    const token = localStorage.getItem("@KenzieHub:Token");

    const { id } = selectedTech;
    api
      .put(
        `/users/techs/${id}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Beared ${token}`,
          },
        }
      )
      .then(
        (response) => toast.success("Status editado com sucesso"),
        handleModalEdit()
      )
      .catch((err) => console.log(err));
  };

  const handleDeleteTech = () => {
    const token = localStorage.getItem("@KenzieHub:Token");

    const { id } = selectedTech;
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Beared ${token}`,
        },
      })
      .then((response) => toast.success("Tecnologia deletada com sucesso"))
      .catch((err) => console.log(err));
  };

  return (
    <EditTechModal>
      <ModalHeader>
        <p>Detalhes da Tecnologia</p>
        <button onClick={handleModalEdit}>X</button>
      </ModalHeader>
      <form onSubmit={handleSubmit(handleEditTech)}>
        <Input
          register={register}
          label="Nome"
          placeholder={selectedTech.title}
          name="title"
          disabled="disabled"
          error={errors.title?.message}
        />
        <SelectModal
          register={register}
          label="Status"
          placeholder="Status"
          name="status"
          error={errors.status?.message}
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        />
        <EditBtn>
          <button type="submit">Salvar Alterações</button>
          <button type="submit" onClick={handleDeleteTech}>
            Excluir
          </button>
        </EditBtn>
      </form>
    </EditTechModal>
  );
};
