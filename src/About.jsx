import React, { useState } from "react"
import { useTeam } from "./main"
//import { useReducer } from "react";


const randomStats = () => {
  let stats = [];
  let points = 10;

  for (let i = 0; i < 3; i++){

    let stat = Math.floor(Math.random() * Math.min(points, 5)) + 1;

    points -= stat;
    stats.push(stat);
  }
  return stats;
}

const EditTeamScreen = () => {
  const { dispatch } = useTeam();
  
  const [memberName, setMemberName] = useState('');
  const [memberStats, setMemberStats] = useState([]);

  const addMember = () => {
    const stats = randomStats();

    const newMember = {
      name: memberName,
      stats: stats,
    };
     console.log(stats);
    dispatch({ type: 'addMember', payload: newMember });
    setMemberName('');
    setMemberStats(stats);
     console.log(memberName);
    };

    return (
      <div>
        <input
        type="text"
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
        placeholder = "Enter Name">
        </input>
        <button onClick={addMember}>Add Name</button>
        <div>
          <h2>New Member:</h2>
          <p>Name: {memberName}</p>
          <p>Stats: {memberStats}</p>
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

