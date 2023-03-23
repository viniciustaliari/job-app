import { useEffect, useState } from 'react';
import './App.css';
import { CardComp } from './CardComp';
import { data } from './fakeBDD/data'

function App() {
  
  console.log(data);

  return (
    <div className="App">
      <header className='header-app'></header>
      <main>
      {data.map((post, index)=>{
        return(
          <CardComp
          key={index}
          companyName ={post.company_name}
          companyLogo={post.company_logo}
          featured={post.featured}
          jobName={post.job_name}
          jobPlace={post.job_place}
          postDay={post.post_day}
          schedule={post.schedule}
          jobDescription={post.job_description}
          />
        )
      })}
      </main>
    </div>
  );
}

export default App;
