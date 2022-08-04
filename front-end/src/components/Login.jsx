import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../App.scss";
import { Link, useNavigate } from "react-router-dom";
// import './Register'

import { useState, useEffect } from "react";
// import { useForm } from 'react-hook-form';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Login } from "../service/users";
// import { classNames } from "primereact/utils";
import { useSelector, useDispatch } from "react-redux";

import { setUser } from "../state/user.js"
export default function Login() {
  const user = useSelector((state) => state.user);

  // const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: ''
  }) 
  
  let navigate = useNavigate()


  const handleSubmit = (e) => {

    e.preventDefault()
    fetch("http://localhost:8080/api/login",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(form)
    })
      .then(res=>res.json())
      .then(data=>{
        localStorage.setItem("jwt", data.token)
        dispatch(setUser({ profile: data }))
        navigate('/Home')
      })

  };


  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev, 
      [name]: value
    }))
  };
  useEffect(() => {
    console.log(user)
  }, [user]);
  return (
    <div className="flex justify-content-center">
      <div className="card">
        <h5 className="text-center">Log in</h5>
        <form onSubmit={handleSubmit} className="p-fluid">
          <div className="field">
            <span className="p-float-label">
              <InputText
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={form.email}
                // {...register("Email", { pattern: /^\S+@\S+$/i })}
              />
              <label
                htmlFor="email"
                // className={classNames({ "p-error": !!errors.email })}
              >
                Email*
              </label>
            </span>
          </div>
          <div className="field">
            <span className="p-float-label">
              <InputText
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={form.password}
                // {...register("Password", {})}
              />
              <label
                htmlFor="password"
                // className={classNames({ "p-error": errors.password })}
              >
                Password*
              </label>
            </span>
          </div>

          <Button type="submit" label="Submit" className="mt-2" />
          <h6 className="already">
            Don't have an account? <Link to="/Register">Make an account.</Link>
          </h6>
        </form>
      </div>
    </div>
  );
}