import { BodyHomePage } from "../components/BodyHomePage";
import { NavBar } from "../components/NavBar";
import ParticlesHomePage from "../components/Particles";
import { RankDescription } from "../components/RankDescription";
import { useUser } from "../contexts/UserContext";

const HomePage = () => {

  const { user } = useUser();
  return (
    <div className="h-full w-full overflow-hidden bg-gradient-to-bl from-fuchsia-900 to-blue-400  flex flex-col text-center justify-items-center">
      <ParticlesHomePage />
      <div className="z-50 h-1/5">
        <NavBar />
      </div>
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="flex z-50 justify-center mt-5 items-end h-2/5">
        <RankDescription name={user?.username} rank={user?.entries} />
        </div>
        <div className="flex flex-col z-20 justify-center lg:mt-28 items-center">
          <p className="text-white mt-10 lg:text-xl text-sm">
            This magic app will describe some aspects in your photo. Fit it a
            try.
          </p>
          <BodyHomePage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
