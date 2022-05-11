import { useRecoilValue } from 'recoil'
import { eventosFiltradosState } from '../seletores'

export default function useListaDeEventos() {
  return (
    useRecoilValue(eventosFiltradosState)
  )
}
