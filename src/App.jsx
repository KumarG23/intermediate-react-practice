import { TeamProvider, useTeam } from "./main"
import TeamMember from "./TeamMember"
import Edit from "./About";

const HomeScreen = () => {
  const { team } = useTeam();

  return (
    <div>
      <h2>Team Summary</h2>
      <div>
        {team.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </div>
  )
}

function App() {
return (
  <TeamProvider>
    <div>
      <HomeScreen />
      <Edit />
    </div>
  </TeamProvider>
)
}



export default App
