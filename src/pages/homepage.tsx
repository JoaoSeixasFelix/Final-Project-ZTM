import { BodyHomePage } from "../components/BodyHomePage";
import { NavBar } from "../components/NavBar";
import ParticlesHomePage from "../components/Particles";
import { RankDescription } from "../components/RankDescription";

const HomePage = () => {
  return (
    <div className="h-full w-full flex flex-col text-center justify-items-center">
      <div className="-z-10">
        <ParticlesHomePage />
      </div>
      <div className="h-1/5">
        <NavBar />
      </div>
      <div className="flex justify-center items-center h-1/5">
        <RankDescription name="Fernando" rank={15} />
      </div>
      <div className="flex justify-center items-center h-3/5">
        <BodyHomePage />
      </div>
    </div>
  );
};

export default HomePage;
