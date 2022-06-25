import Image from "next/image";
import Link from "next/link";
import Icon from "../../public/NavBarIcons/strategy-svgrepo-com.svg";
import { useCallback, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { api } from "../services/api";
import Router from "next/router";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();

  if (email !== undefined && password !== undefined) {
  }
  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      if (email !== undefined && password !== undefined) {
        try {
          await api
            .post("/signin", {
              email,
              password,
            })
            .then((resp) => {
              if (resp.status === 200) {
                Router.push("/homepage");
              }
            });
        } catch (err) {
          alert(err);
        }
      }
    },
    [email, password]
  );

  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-bl from-fuchsia-900 to-blue-400 items-center justify-center">
      <div className="flex w-full justify-start h-1/5 mt-4 ml-6 mr-6">
        <Image src={Icon} width={100} height={100} />
      </div>

      <div className="flex flex-col items-center mt-16 h-4/5">
        <div className="flex items-end h-1/6 w-full mb-6 text-white text-3xl">
          <p className="flex w-full h-full justify-center">Sign In</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" bg-indigo-400 bg-opacity-40 -mt-10 text-black bg-clip-padding backdrop-blur-3xl bg-transparent shadow-md rounded px-6 pt-6 pb-8 mb-4"
        >
          <label>
            Login
            <Input
              onValueChange={(e) => setEmail(e)}
              name="login"
              placeholder="  Username"
              type={"text"}
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
            <div className="text-sm">
              <Link href={"/forgotpassword"}>Forgot Password?</Link>
            </div>
            <Button
              type={"submit"}
              width="xl:w-44 lg:w-44 w-60"
              backGroundColor="bg-purple-900"
              textColor="text-white"
              padding="py-2 px-4"
              marginTop="lg:mt-0 mt-1"
              marginLeft="lg:ml-4"
              effects="rounded hover:bg-purple-900"
            >
              Sign In
            </Button>
          </div>
        </form>
        <div className="flex bg-indigo-400 bg-opacity-50 justify-center xl:w-full lg:w-w-full w-72 rounded py-2 items-center">
          <p className="text-lg">New?</p>
          <Link href={"/signup"}>
            <a
              className="m-1 text-white no-underline hover:underline text-lg"
            >
              Create an account.
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
