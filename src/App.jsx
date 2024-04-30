import { useContext } from "react"
import TeamMember from "./TeamMember"
import { TeamContext } from "./main";


const HomeScreen = () => {
  const { state } = useContext(TeamContext);

  return (
    <div className="p-5">
      <h2>Team Summary</h2>
      <div>
        {state.team.map((member, index) => (
          <TeamMember key={index} memberName={member.name} memberStats={member.stats} />
        ))}
      </div>
    </div>
  )
}

function App() {
return (
  
    <div>
      <HomeScreen />
    </div>
)
}



export default App
