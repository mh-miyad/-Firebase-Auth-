import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../FIrebase/AuthProviders";

const Register = () => {

     const { createUser}  =  useContext(AuthContext)
  const evenSingUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
     createUser(email,password)
     .then( res =>{
        console.log(res.user);
     })
     .catch(error =>{
        console.log(error);
     })
    alert();
  };
  return (
    <div>
      <div>
        <div className="w-1/2 mx-auto">
          <h2 className="text-center my-5  text-3xl font-semibold ">
            {" "}
            Please Log In{" "}
          </h2>

          <form onSubmit={evenSingUp} className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@flowbite.com"
                required={true}
                name="email"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput
                id="password1"
                type="password"
                required={true}
                name="password"
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
