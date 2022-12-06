import logo from './logo.svg';

import Login from './layout/login/login';
import DefaultLayout from './layout/DefaultLayout';

function App() {
    return (
        <div className="App">
            <DefaultLayout />
        </div>
    );
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Login from "./layout/login/login";

// function App() {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }

// export default App;

// import { useForm } from "react-hook-form";

// function App() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ mode: "onBlur" });
//   console.log(register);

//   const onFormSubmit = (data) => console.log("submit", data);
//   const onErrors = (err) => console.log(err);
//   const registerOptions = {
//     email: { required: "email is required", type: "email" },
//     password: {
//       required: "password is required",
//       type: "password",
//       minLength: {
//         value: 8,
//         message: "Password must have at least 8 characters",
//       },
//     },
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
//         <div>
//           <label htmlFor="favoriteFood">Favorite Food:</label>
//           <input
//             type="email"
//             name="email"
//             {...register("email", registerOptions.email)}
//           />

//           <small className="text-danger">
//             {errors?.email && errors.email.message}
//           </small>
//         </div>
//         <div>
//           <label htmlFor="favoritePlace">Favorite place:</label>
//           <input
//             type="text"
//             name="password"
//             {...register("password", registerOptions.password)}
//           />
//           <small className="text-danger">
//             {errors?.password && errors.password.message}
//           </small>
//         </div>

//         <button type="submit">submit</button>
//       </form>
//     </>
//   );
// }
// export default App;
