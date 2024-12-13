import React from 'react';
import { BrowserRouter, Route, Routes} from  "react-router-dom";
import Main from '../components/Main';
import Result from '../components/Result';
import ResultPokeList from '../components/ResultPokeList';
import ResultUserList from '../components/ResultUserList';
import Major from '../components/Survey/Major';
import Survey1 from '../components/Survey/Survey1';
import Survey2 from '../components/Survey/Survey2';
import Survey3 from '../components/Survey/Survey3';
import Survey4 from '../components/Survey/Survey4';
import Survey5 from '../components/Survey/Survey5';
import Survey6 from '../components/Survey/Survey6';
import Survey7 from '../components/Survey/Survey7';
import PokemonList from '../PokemonList';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<PokemonList/>}/> */}
        <Route path='/' element={<Main/>} />
        <Route path='/result' element={<Result/>}/>
        <Route path='/result_pokeList' element={<ResultPokeList/>}/>
        <Route path='/result_userList' element={<ResultUserList/>}/>
        <Route path='/major' element={<Major/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/survey1' element={<Survey1/>}/>
        <Route path='/survey2' element={<Survey2/>}/>
        <Route path='/survey3' element={<Survey3/>}/>
        <Route path='/survey4' element={<Survey4/>}/>
        <Route path='/survey5' element={<Survey5/>}/>
        <Route path='/survey6' element={<Survey6/>}/>
        <Route path='/survey7' element={<Survey7/>}/>
      </Routes>
    </BrowserRouter>
  )
}
