import Adresse from './component/profil/Adresse';
import FullName from './component/profil/FullName';
import ProfilePhoto from './component/profil/ProfilePhoto';
import React from 'react';
import './App.css';


function App() {
  return (
<div className="App">
<ProfilePhoto/>
<FullName/>
<Adresse/>
</div>
);
}

export default App;
