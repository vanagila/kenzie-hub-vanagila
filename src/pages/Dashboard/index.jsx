import {
  Header,
  LogOutButton,
  ContainerInfo,
  TechHeader,
  AddTechButton,
  TechContainer,
  TechCard,
  Line,
} from "./styles";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { AddTech } from "../../components/AddTech";
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { EditTech } from "../../components/EditTech";

export const Dashboard = ({
  logo,
  setUser,
  setToken,
  authenticated,
  setAuthenticated,
}) => {
  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [tech, setTech] = useState([]);
  const [selectedTech, setSelectedTech] = useState({});

  const history = useHistory();

  const handleModalAdd = () => {
    setModalAdd(!modalAdd);
  };

  const handleModalEdit = (title, status, id) => {
    setSelectedTech({ title, status, id });
    setModalEdit(!modalEdit);
  };

  const logOut = () => {
    localStorage.clear();
    setToken("");
    setUser({});
    setAuthenticated(false);
    history.push("/");
  };

  const userStorage = JSON.parse(localStorage.getItem("@KenzieHub:User"));
  useEffect(() => {
    if (userStorage) {
      api
        .get(`/users/${userStorage.id}`)
        .then((response) => setTech(response.data.techs))
        .catch((err) => console.log(err));
    }
  }, [tech]);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header>
        <img src={logo} alt={"kenziehub"} />
        <LogOutButton onClick={() => logOut()}>Sair</LogOutButton>
      </Header>
      <Line />
      <ContainerInfo>
        <h3>Olá, {userStorage.name}</h3>
        <p>{userStorage.course_module}</p>
      </ContainerInfo>
      <Line />

      <TechHeader>
        <h4>Tecnologias</h4>
        <AddTechButton onClick={handleModalAdd}>+</AddTechButton>
      </TechHeader>

      {modalAdd && (
        <AddTech
          tech={tech}
          setTech={setTech}
          handleModalAdd={handleModalAdd}
        />
      )}

      {modalEdit && (
        <EditTech
          selectedTech={selectedTech}
          setTech={setTech}
          handleModalEdit={handleModalEdit}
        />
      )}

      <TechContainer>
        {tech.map((tec, id) => {
          return (
            <TechCard
              onClick={() => handleModalEdit(tec.title, tec.status, tec.id)}
              key={id}
            >
              <h5>{tec.title}</h5>
              <p>{tec.status}</p>
            </TechCard>
          );
        })}
      </TechContainer>
    </>
  );
};
