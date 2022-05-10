import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

export default function useAtualizarEvento() {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (evento: IEvento) => {
    setListaDeEventos((listaAntiga) => {
      const indice = listaAntiga.findIndex((evt) => evt.id === evento.id);
      return [
        ...listaAntiga.slice(0, indice),
        evento,
        ...listaAntiga.slice(indice + 1),
      ];
    });
  };
}
