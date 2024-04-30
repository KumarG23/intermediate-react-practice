// import { useTeam } from "./main";

const TeamMember = ({ memberName, memberStats }) => {
  console.log('name:',memberName);
  console.log('stats:', memberStats);
    return (
      <div>
        {/* Display the member's name */}
        <h3>{memberName}</h3>
        <h4>Stats:</h4>
        <ul>
          {memberStats.map((stat, index) => (
            <li key={index}>{stat.name}: {stat.value}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TeamMember;