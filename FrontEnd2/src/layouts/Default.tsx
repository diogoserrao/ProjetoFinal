import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { useNavigate } from "react-router-dom";

import * as S from './Default.style'
import { useEffect } from 'react';

export function Default() {
  const navigate = useNavigate();
  useEffect(function(){
    if (localStorage.getItem("logado") != "true"){
      navigate("/register");
    }
  },[])
  
  return (
    <S.divLayout>
      <Sidebar />
      <S.divContent>
        <Outlet />
      </S.divContent>
    </S.divLayout>
  )
}
