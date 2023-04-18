import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import React, { useContext } from 'react'
import { AuthContext } from '../FIrebase/AuthProviders'

const LogIn = () => {

     const {signIn} = useContext(AuthContext)

   const evenLogin = (e)=>{
    e.preventDefault()      
 const form  =  e.target;
  const email  = form.email.value;
  const password  = form.password.value;

      signIn(email,password)
      .then(res =>{
        const user = res.user
       if (user.email) {
           alert(' Log In successfull')
           console.log(user);
        
       }else{
        alert(' email or password  wrong ')
       }
      })
      .catch(error =>{
        alert(error)
      })


   }
  return (
    <div>



       <div className='w-1/2 mx-auto'>

         <h2 className='text-center my-5  text-3xl font-semibold '>  Please Log In </h2>
        
<form  onSubmit={evenLogin} className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="email"
        value="Your email"
      />
    </div>
    <TextInput
      id="email"
      type="email"
      placeholder="name@flowbite.com"
      required={true}
      name='email'
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      id="password1"
      type="password"
      required={true}
      name='password'
    />
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="remember" />
    <Label htmlFor="remember">
      Remember me
    </Label>
  </div>
  <Button type="submit">
    Submit
  </Button>
</form>




       </div>





      
    </div>
  )
}

export default LogIn