"use client";
import { useRouter } from "next/navigation";

const Tela2 = () => {
  const router = useRouter();
  // const history = useHistory();
  // const dispatch = useDispatch();

  // let { nome } = useParams();

  // const name = useSelector(state => state.user.name);

  const handleTextChange = (e) => {
    // dispatch({
    //     type: 'SET_NAME',
    //     payload:{
    //         name: e.target.value
    //     }
    // });
  };

  return (
    <div className="container">
      <h1>Tela2 de {"nome"}</h1>

      {/* <input type="text" value={name} onChange={handleTextChange} /> */}

      <button onClick={() => router.back()}>Voltar</button>
    </div>
  );
};

export default Tela2;

/*
import React from 'react';
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Titulo } from './styled';

export default () => {
    const history = useHistory();
    const dispatch = useDispatch();

    let { nome } = useParams();

    const name = useSelector(state => state.user.name);

    const handleTextChange = (e) => {
        dispatch({
            type: 'SET_NAME',
            payload:{
                name: e.target.value
            }
        });
    }

    return (
        <Container>
            <Titulo>Tela2 de {nome}</Titulo>

            <input type="text" value={name} onChange={handleTextChange} />

            <button onClick={()=>history.goBack()}>Voltar</button>
        </Container>
    );
}

*/
