import Image from "next/image";
import Link from "next/link";
import Icon from "../../public/NavBarIcons/strategy-svgrepo-com.svg";
import { useCallback, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { api } from "../services/api";
import Router from "next/router";
import { useUser } from "../contexts/UserContext";

const SignUp = () => {
  const { signUp } = useUser();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassWord] = useState();

  if (name !== undefined && email !== undefined && password !== undefined) {
  }
  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      if (name !== undefined && email !== undefined && password !== undefined) {
        try {
          await api
            .post("/signup", {
              name: name,
              email: email,
              password: password,
            })
            .then((response) => {
              if (response.status === 200) {
                signUp({ id: response.data.id, username: response.data.name, entries:response.data.entries, email:response.data.email, joined:response.data.joined });
                Router.push("/homepage");
              }
            });
        } catch (err) {
          console.error(err);
        }
      }
    },
    [name, email, password]
  );

  return (
    <div className="flex flex-col h-full w-full bg-gradient-to-bl from-fuchsia-900 to-blue-400 items-center justify-center">
      <div className="flex w-full justify-start h-1/5 mt-4 ml-6 mr-6">
        <Image src={Icon} width={100} height={100} />
      </div>

      <div className="flex items-end h-1/6 text-white text-3xl">
        <p>Sign Up</p>
      </div>

      <div className="flex flex-col justify-center items-center h-4/5">
        <form
          onSubmit={handleSubmit}
          className=" bg-indigo-400 bg-opacity-40 text-black bg-clip-padding backdrop-blur-3xl bg-transparent shadow-2xl rounded px-6 pt-6 pb-8 mb-4"
        >
          <label>
            Nome
            <Input
              onValueChange={(e) => setName(e)}
              name="name"
              placeholder="  Enter Your Full Name"
              type={"text"}
              value={name}
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
              placeholder="  Enter Your Email"
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
          </div>
        </form>
        <div className="flex bg-indigo-400 bg-opacity-80 justify-center xl:w-full lg:w-w-full w-72 rounded py-2 items-center">
          <Link href={"/signin"}>
            <a className="m-1 text-white text-center no-underline hover:underline lg:text-lg">
              Already have an account?
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
