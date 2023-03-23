import React from 'react'
import { CaracteristicasComp } from './CaracteristicasComp'
import './CardComp.css'

export const CardComp = ({
    companyName,
    companyLogo,
    featured,
    jobName,
    jobPlace,
    postDay,
    schedule,
    jobDescription
}) => {

    let dias = 0;

    if(postDay<=7){
        dias = `${postDay}d`;
    }else if(postDay>7 && postDay<14){
        dias = '1w';
    }else if(postDay>=14 && postDay<21){
        dias = '2w';
    }else if(postDay>=21 && postDay<31){
        dias = '3w';
    }else if(postDay>=31){
        dias = '+1m';
    }

  return (
    <div className='contenedor-cards'>
        <div className='contenedor-objetos-izquierda'>
            <div className='contenedor-foto'>
                <img src={companyLogo} alt="imagen-logo" />
            </div>
            <div className='nombre-empresa'>
                <p>{companyName}</p>
                {featured? <div><p>Featured</p></div> : null}
            </div>
            <h3 className='nombre-puesto'>{jobName}</h3>
            <div className='datos-oferta'>
                <p>{`${dias} ago  •  ${schedule}  •  ${jobPlace}`}</p>
            </div>
        </div>
        <div className='contenedor-objetos-derecha'>
            {jobDescription.map((description, index)=>{
                return(<CaracteristicasComp key={index} titulo={description}/>)
            })}
        </div>
    </div>
  )
}
