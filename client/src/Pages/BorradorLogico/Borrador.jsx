
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfessionals, getTurns, deleteTurn, getTurnDetail , filterCanceled} from "../../Redux/Actions";
import Cards from "../../Components/Cards/Cards";
import Loading from "../Loading/Loading";
import NavbarTwo from "../../Components/NavbarTwo/NavbarTwo";
import style from "./Borrador.module.css";
import { useHistory, useParams } from "react-router-dom";
import CardsBorrado from "../../Components/CardsBorrado/CardsBorrado";
import BtnBack from "../../Components/BtnBack/BtnBack";

const Borrador = ({ id }) => {
  const turns = useSelector((state) => state.turnBackup);
  const turnDetail = useSelector((state) => state.turnDetail);
  const darkMode = useSelector((state) => state.darkMode);

  const [loading, setLoading] = useState(true);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProfessionals());
    dispatch(getTurns())
      .then(() => {
        setLoading(false);
      })
  }, [dispatch]);
  
    const turnStates = turns.filter((turn) => turn.professionalId === id && turn.status === "false");

  // console.log("FILTER TURN", turnStates);

  if (loading) {
    return <Loading />;
  }

  

  return (
        <>
          <NavbarTwo />
          <div className={!darkMode ? style.homeContainer : style.homeContainerDark}>
            <div className={style.filtersAndButtons}>
              {/* <DarkMode /> */}
              <BtnBack />
            </div>
            {turns.length > 0 && (
              <div className={style.content}>
                <div className={style.header}>
                  <h1>Turnos Cancelados</h1>
                  {turnStates.length > 0 && (
                    <p>
                      Tienes{" "}
                      {turnStates.length === 1
                        ? "1 turno cancelado."
                        : `${turnStates.length} turnos cancelados.`}
                    </p>
                  )}
                </div>
                {turns.length > 0 ? (
                  <CardsBorrado turns={turns} type="turns" />
                ) : (
                  <h2>No hay turnos cancelados</h2>
                )}
              </div>
            )}
          </div>
        </>
  );
}

export default Borrador;