import React from "react";
import styled from "styled-components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function Denuncia({ hora, endereco, categoria }) {
  return (
    <Body>
      <Hora>{hora}</Hora>
      <Box>
        <div>
          <p>
            Endereço: <span>{endereco}</span>
          </p>
          <p>
            Categoria: <Red>{categoria}</Red>
          </p>
        </div>
        <ArrowForwardIosIcon />
      </Box>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
`;

const Hora = styled.p`
  color: #c63737;
  font-size: 12px;
  margin-right: 10px;
`;

const Box = styled.div`
  background: #ffffff;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  width: 78%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 5px;
    font-size: 15px;
    font-weight: bold;
  }

  span {
    font-weight: normal;
  }
`;

const Red = styled.b`
  color: #ef3535;
`;
