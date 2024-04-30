const TeamMember = ({ member }) => {
    return (
      <div>
        {/* Display the member's name */}
        <h3>{member.name}</h3>
        {/* Display other member info such as stats */}
      </div>
    );
  };
  
  export default TeamMember;