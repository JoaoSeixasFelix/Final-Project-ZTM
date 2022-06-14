import Image from "next/image";
import Link from "next/link";
import Icon from "../../public/NavBarIcons/strategy-svgrepo-com.svg";
import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

const SignUp = () => {
  const [login, setLogin] = useState();
  const [password, setPassWord] = useState();
  const [email, setEmail] = useState();
  //   console.log(login);
  //   console.log(password)
  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-bl from-fuchsia-900 to-blue-400 items-center justify-center">
      <div className="flex w-full justify-start h-1/5 mt-4 ml-6 mr-6">
        <Image src={Icon} width={100} height={100} />
      </div>

      <div className="flex items-end h-1/6 text-white text-3xl">
          <p>Sign Up</p>
      </div>

      <div className=" flex justify-center w-full items-center h-4/5">
        <form className=" bg-indigo-400 bg-opacity-40 text-black bg-clip-padding backdrop-blur-3xl bg-transparent shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
          <label>
            Login
            <Input
              onValueChange={(e) => setLogin(e)}
              name="login"
              placeholder="  Username"
              type={"text"}
              value={login}
              borderColor="border-slate-500"
              width="xl:w-96 lg:w-96 w-60"
              padding="py-3"
              bgColor="white"
              textColor="white"
              marginBottom="mb-3"
              required
            />
          </label>
          <label>
            Email
            <Input
              onValueChange={(e) => setEmail(e)}
              name="email"
              placeholder="  Email"
              type={"email"}
              value={email}
              borderColor="border-slate-500"
              width="xl:w-96 lg:w-96 w-60"
              padding="py-3"
              bgColor="white"
              textColor="white"
              marginBottom="mb-3"
              required
            />
          </label>
          <label>
            Password
            <Input
              onValueChange={(e) => setPassWord(e)}
              name="password"
              placeholder="  **********"
              type={"password"}
              value={password}
              borderColor="border-slate-500"
              width="xl:w-96 lg:w-96 w-60"
              padding="py-3"
              bgColor="white"
              textColor="white"
              required
            />
          </label>
          <div className="mt-5 flex flex-col items-center">
            <Button
              type={"submit"}
              width="xl:w-44 lg:w-44 w-60"
              backGroundColor="bg-purple-900"
              textColor="text-white"
              padding="py-2 px-4"
              marginTop="lg:mt-0 mt-1"
              marginLeft="lg:ml-4"
              effects="hover:bg-purple-900"
            >
              Sign Up
            </Button>
            <div className="mt-3">
              <Link href={"/signin"}>
                <p className="text-xs">Already have an account? Sign In.</p>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;