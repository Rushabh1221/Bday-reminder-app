import React from 'react';
import './Board.css';
import List from './List';

//Json-Data:
const Info = [
    {
        img : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Kiara Awasthi", birthday : "1995-01-31"
    },
    {
        img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Ruhani Solanki", birthday : "1998-02-10"
    },
    {
        img : "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Sakshi Sharma", birthday : "1991-02-25"
    },
    {
      img : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Akshita Purohit", birthday : "1999-03-15"
    },
    {
      img : "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        name : "Neha Pandya", birthday : "1994-03-05"
    }
  ]


export default function Board() {
  return(
    <main id='site-main'>

      <h1 className="text-white title">Birthday Reminder 🎂</h1>
    
      <div className="board">
        <h2 className='today'>...Today's Birthdays...</h2>
        <List jdata={Today(Info)}/>
        <h2 className='upcoming'>...Upcoming Birthdays...</h2> 
        <List jdata={Upcoming(Info, 2)} upcoming={true}/>
      </div>

    </main>
  );
}

//Today's Birthdays:
function Today(person) {
    let cday = new Date().getDate();
    let cmonth = new Date().getMonth();

    let filter = person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();

        return cday==day && cmonth==month;
    })

    return filter;
}

//Upcoming Birthdays:
function Upcoming(person, toMonth) {
    let cday = new Date().getDate();
    let cmonth = new Date().getMonth();

    let filter = person.filter(data => {
        let day = new Date(data.birthday).getDate();
        let month = new Date(data.birthday).getMonth();
        
        if(cday==day) return;
        return month>=cmonth && month<=cmonth+toMonth;
    })

    return filter;
}
