import React from 'react';
import  { Link, Outlet } from 'react-router-dom';

export default function DemoLayout (){
    return (
        <div style ={{display:'flex', minHeight:'100vh'}}>

           <aside style ={{width: '200px', backgroudColor: '#f3f3f3', padding: '30px',flexShrink: 0, }}>
            <h2>Demo Packages</h2>
            <ul style={{listStyle: 'none', padding: 0}}>
            <li><Link to="/examples/validation">Validation</Link></li>
            <li><Link to ="/examples/store">Store</Link></li>
            <li><Link to ="/examples/i18n">Locales</Link></li>
            <li><Link to ="/examples/query">Query</Link></li>
            </ul>
           </aside> 
           <main style={{flex:'1', padding:'20px'}}>
            <Outlet/>
           </main>
          </div>
        );
}
