import React, { useContext, useState } from "react"
import { TeamContext } from "./main";
// import { useTeam } from "./main"
//import { useReducer } from "react";


const randomStats = () => {
  let stats = [];
  let points = 10;
  let statNames = ['Health', 'Speed', 'Attack'];
  let maxStat = [5, 5, 5];

  for (let i = 0; i < statNames.length; i++){

    let stat = Math.floor(Math.random() * Math.min(points, maxStat[i])) + 1;

    points -= stat;
    stats.push({ name: statNames[i], value: stat });
  }
  return stats;
}

const EditTeamScreen = () => {
  const { dispatch, state } = useContext(TeamContext);
  
  const [memberName, setMemberName] = useState('');
  const [memberStats, setMemberStats] = useState([]);

  const addMember = () => {
    const stats = randomStats();

    const newMember = {
      name: memberName,
      stats: stats,
    };


    dispatch({ type: 'addMember', payload: newMember });
    setMemberName('');
   setMemberStats(stats);
  };

  return (
    <div>
      <input
      type="text"
      value={memberName}
      onChange={(e) => setMemberName(e.target.value)}
      placeholder = "Enter Name">
      </input>
      <div>
      <button onClick={addMember}>Add Name</button>
        <h2>New Member:</h2>
        <p>Name: {memberName}</p>
        <p>Stats:</p>
        <ul>
          {memberStats.map((stat, index) => (
          <li key={index}>
            {stat.name}: {stat.value}
          </li>
          ))}
        </ul>
      </div>
      
    </div>
  )
};



function Edit() {
  return (
    <div className="p-5">
      <EditTeamScreen />
    </div>
  )
}

export default Edit

