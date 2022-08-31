import React from 'react';

const List = ({info}) => {
  
  let infoList=()=>{
    
    return(
      info.map((i)=>{ 
        const {id, name, age, image, date} = i;       
          return(
              toRender(id, name, age, image, date) 
            )
        }
      )
    )
  }

  let toRender =(id, name, age, image, date)=>{
    return(<article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
    )
  }

  return (
    <>
      {infoList()}
      
    </>
  );
};

export default List;