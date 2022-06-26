import { useState } from "react";
import { BodyHomePage } from "../components/BodyHomePage";
import { NavBar } from "../components/NavBar";
import ParticlesHomePage from "../components/Particles";
import { RankDescription } from "../components/RankDescription";
import { api } from "../services/api";

const HomePage = () => {
  const [userUpdate, setUserUpdate] = useState({
    user: {
      id: "",
      name: "",
      email: "",
      entries: "",
      joined: "",
    },
  });
  const getUser = (data: any) => {
    const loadingUser = {
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
      },
    };
    setUserUpdate((userUpdate) => ({
      ...userUpdate,
      ...loadingUser,
    }));
  };
  console.log(userUpdate.user.name);

  api.interceptors.response.use(
    function (resp) {
      const { data } = resp;
      console.log(data);
      getUser(data);
      return resp;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return (
    <div className="h-full w-full overflow-hidden bg-gradient-to-bl from-fuchsia-900 to-blue-400  flex flex-col text-center justify-items-center">
      <ParticlesHomePage />
      <div className="z-50 h-1/5">
        <NavBar />
      </div>
      <div className="flex flex-col h-full overflow-y-auto">
        <div className="flex z-50 justify-center mt-5 items-end h-2/5">
          <RankDescription name={userUpdate.user.name} rank={1} />
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
