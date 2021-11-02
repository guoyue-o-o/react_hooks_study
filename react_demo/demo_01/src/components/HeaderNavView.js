import { showNavArray } from '../data/showData';
import { Router, Route, Link } from 'react-router'

function HeaderNavView() {
  return (
      <div>
         {
             showNavArray.map((v, index) => {
                 return (
                    <li key={index}>{v.name}</li>
                 )
             })
         }
      </div>
  )
}

export default HeaderNavView;
