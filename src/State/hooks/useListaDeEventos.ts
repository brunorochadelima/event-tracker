import React from 'react'
import { useRecoilValue } from 'recoil'
import { listaDeEventosState } from '../atom'

export default function useListaDeEventos() {
  return (
    useRecoilValue(listaDeEventosState)
  )
}
