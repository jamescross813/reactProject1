import React from 'react';

const List = ({info}) => {
  
  let infoList=()=>{
    
    return(
      info.map((i)=>{ 
        const {id, name, age, image, date} = i;       
          return(
            dateCheck(date)
              // toRender(id, name, age, image, date) 
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

  let dateCheck=(date)=>{
    const today= new Date()
    const day = today.getDate()
    const month = today.getMonth() +1
    const bDay = date[0]+date[1]
    // if(month === bDay)
    console.log(bDay)
  }

  return (
    <>
      {infoList()}
      
    </>
  );
};

export default List;