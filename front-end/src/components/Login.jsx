import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../App.scss";
import { Link, useNavigate } from "react-router-dom";
// import './Register'

import { useState } from "react";
// import { useForm } from 'react-hook-form';
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { login } from "../service/users";
// import { classNames } from "primereact/utils";

export default function Login({setUser}) {
  // const { register, handleSubmit, formState: { errors } } = useForm();
  const [form, setForm] = useState({
    email: '',
    password: ''
  }) 
  
  let navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await login(form)
    setUser(user)
    navigate('/Home')
  };


  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev, 
      [name]: value
    }))
  };

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