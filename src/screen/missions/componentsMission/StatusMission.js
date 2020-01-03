import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MissionsApi from "../MissionsApi";
import Table from "../../../components/Table";
import MyContext from "../../../components/MyContext";
import transformData from "../../../components/TransformData";
import { TitleTable } from "../../../components/Title";

function StatusMission({ status, id }) {
  const [data, setData] = useState([]);
  const [request, setRequest] = useState(false);

  useEffect(() => {
    MissionsApi.getStatusMissionsApi(status, id)
      .then(res => {
        const missions = res.data;
        setData(missions);
      })
      .finally(function () {
        setRequest(true);
      });
  }, [id, status]);

  const missionsInformation = () => {
    const missionsInformation = data.map(obj => {
      const options = (
        <Link to={"/missoes/minhas-missoes/" + id + "/resposta/" + obj._id}>
          {" "}
          Opções{" "}
        </Link>
      );
      let nameUser = obj._user.name;

      const missionsInformation = [
        nameUser,
        transformData(obj.created_at),
        options
      ];
      return missionsInformation;
    });

    return missionsInformation;
  };

  const dataTable = {
    title: <TitleTable titleTable={"todas as missões  " + status} />,
    columns: ["Nome", "Data de Subimissão", "Opções"],
    data: missionsInformation(),
    request: request,
    severalId: true,
    link: "/missoes/minhas-missoes/" + id + "/resposta/"
  };

  return (
    <MyContext.Provider value={dataTable}>
      <Table />
    </MyContext.Provider>
  );
}

export default StatusMission;