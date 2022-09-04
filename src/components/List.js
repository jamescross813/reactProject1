import React from 'react';

const List = ({info}) => {
  
  let infoList=()=>{
    
    return(
      info.map((i)=>{ 
        const {id, name, age, image, date} = i;
            if(dateCheck(date)){
              return toRender(id, name, age, image, date) 
            }
        }
      )
    )
  }

  let toRender =(id, name, age, image, date)=>{

    return(<ul key={id} className='person'>
            <img src={image} alt={name} className="img-thumbnail" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </ul>
    )
  }

  let dateCheck=(date)=>{
    const today= new Date()
    const day = today.getDate()
    const month = today.getMonth() +1
    const bMonth = date[0]+date[1]
    const bDay= date[3]+date[4]
    if(month == bMonth){ 
      if(day == bDay){
        return true
      }
    }
  }

  return (
    <>
    <li>
      {infoList()}
      </li>
    </>
  );
};

export default List;