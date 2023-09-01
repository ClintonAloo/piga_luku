
import Hero from "../components/Hero"
import Featured from "../components/Featured";

function Home({state}){

 return (
    <div>
      <Hero scroll={scroll}/>
      <Featured state={state} />
      </div>
  )
 }

 
 export default Home