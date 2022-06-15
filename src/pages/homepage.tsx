import { BodyHomePage } from "../components/BodyHomePage";
import { NavBar } from "../components/NavBar";
import ParticlesHomePage from "../components/Particles";
import { RankDescription } from "../components/RankDescription";

const HomePage = () => {
  return (
    <div className=" h-full w-full overflow-hidden bg-gradient-to-bl from-fuchsia-900 to-blue-400  flex flex-col text-center justify-items-center">
      <ParticlesHomePage />
      <div className="z-50 h-1/5">
        <NavBar />
      </div>
      <div className="h-4/5 overflow-y-auto">
        <div className="flex z-50 justify-center items-end h-2/5">
          <RankDescription name="Pedro" rank={1} />
        </div>
        <div className="flex flex-col z-20 justify-center lg:mt-28 items-center h-4/5">
          <p className="text-white mb-5 lg:text-xl text-sm">
            This Magic app will detect in your pictures. Fit it a try.
          </p>
          <BodyHomePage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
