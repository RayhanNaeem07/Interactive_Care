import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
     <div>
         <input className="w-1/2 p-2 border-2"
        {...register("email", { required: true })}
        type="email"
        placeholder="Enter your email"
      />

      {errors.exampleRequired && <span>Email is required</span>}
     </div>

     <div>
         <input className="w-1/2 p-2 border-2"
        {...register("password", { required: true })}
        type="password"
        placeholder="Enter your password"
      />

      {errors.exampleRequired && <span>Password is required</span>}
     </div>

      <input type="submit" />
    </form>
  );
};

export default Login;
