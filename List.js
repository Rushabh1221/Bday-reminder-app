import React from 'react';

export default function List({jdata, upcoming}) {
    //console.log(jdata)
  return(
    <ul>
     
     {iterate(jdata, upcoming)}

    </ul>
  );
}

function iterate(data,flag) {
    if(!data) return;
    const bgColor = flag ? {backgroundColor: "#ffe66d"} : {};
    return(
      <>
       {
         data.map((person, index) => {
             
            return(
             <li className="justify-content-center" key={index}>
                <div className="flex" style={bgColor}>
                  <img src={person.img} alt="img" />
                  <div className="title">
                    <h3 className='name'>{person.name}</h3>
                    <h5 className='bday'>{person.birthday}</h5> 
                    <h5 className='age'>{Old(person.birthday)} Years</h5>  
                  </div>  
                </div>  
             </li>      
            )
         })  
       }
      </>
    )
}

//How old the Person is:
function Old(personAge) {
    let year = new Date(personAge).getFullYear()
    //console.log(year)
    let cyear = new Date().getFullYear()
    //console.log(cyear)

    let age = cyear - year
    //console.log(age)

    return age;
}