import { BodyHomePage } from "../components/BodyHomePage";
import { NavBar } from "../components/NavBar";
import ParticlesHomePage from "../components/Particles";
import { RankDescription } from "../components/RankDescription";

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col text-center justify-items-center ">
      
      <div className="w-full bg-white h-1/5 items-center">
        <NavBar />
      </div>
      <div className="flex flex-col h-4/5 w-full justify-center items-center">
      <div className="-z-10">
        <ParticlesHomePage />
      </div>
        <RankDescription name={"Amada Rita"} rank={1} />
        <div className="flex w-full justify-center items-center">
          <BodyHomePage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
