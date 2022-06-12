import { BodyHomePage } from "../components/BodyHomePage";
import { NavBar } from "../components/NavBar";
import ParticlesHomePage from "../components/Particles";
import { RankDescription } from "../components/RankDescription";

const HomePage = () => {
  
  const USER_ID = 'YOUR_USER_ID_HERE';
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  const PAT = 'YOUR_PAT_HERE';
  const APP_ID = 'e8aae435af7d406696fec789ca6567fd';
  // Change these to make your own predictions
  const MODEL_ID = 'face-detection';
  const MODEL_VERSION = '6f2c3e043b3e49bdafd38851fb5675d5';
  const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

  const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
              "data": {
                  "image": {
                      "url": IMAGE_URL
                  }
              }
          }
      ]
  });

  const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
      },
      body: raw
  };

  fetch(`https://api.clarifai.com/v2/models/${MODEL_ID}/versions/${MODEL_VERSION}/outputs`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  
  
  return (
    <div className="h-full w-full bg-gradient-to-bl from-fuchsia-900 to-blue-400  flex flex-col text-center justify-items-center">
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
