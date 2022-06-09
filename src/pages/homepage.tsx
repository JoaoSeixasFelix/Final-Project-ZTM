import { BodyHomePage } from "../components/BodyHomePage";
import { NavBar } from "../components/NavBar";
import ParticlesHomePage from "../components/Particles";
import { RankDescription } from "../components/RankDescription";

const HomePage = () => {
  return (
    <div className="h-full w-full bg-gradient-to-bl from-purple-800 to-blue-500  flex flex-col text-center justify-items-center">
      <ParticlesHomePage />
      <div className="z-50 h-1/5">
        <NavBar />
      </div>
      <div className="flex z-50 justify-center items-end h-2/5">
        <RankDescription name="Fernando" rank={15} />
      </div>
      <div className="flex flex-col z-50 justify-center items-center h-3/5">
        <p className="text-white mb-5 text-xl">
          This Magic brain will detect faces in your pictures. Fit it a try.
        </p>
        <BodyHomePage />
      </div>
    </div>
  );
};

export default HomePage;
