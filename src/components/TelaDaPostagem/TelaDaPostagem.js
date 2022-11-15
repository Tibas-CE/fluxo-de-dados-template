import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";

const TelaDaPostagem = (props) => {
  return (props.imagem.length > 0 &&
    props.descricao.length > 0 &&
    props.titulo.length ? 
    <ContainerPostagem>
      <TitleHeader>{props.titulo}</TitleHeader>
      <Image src={props.imagem} alt="drone view" />
      <Description>{props.descricao}</Description>
    </ContainerPostagem>
    : 
    <ContainerPostagem>
      <TitleHeader>FOTO</TitleHeader>
      <Image src={"https://picsum.photos/536/354"} alt="drone view" />
      <Description>{"Lorem Ipsum"}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
