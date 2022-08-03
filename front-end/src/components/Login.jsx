import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../App.scss';
import { Link } from 'react-router-dom'
import './Register'

import React from 'react'
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';

export default function Login (){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className="flex justify-content-center">
            
    
            <div className="card">
                <h5 className="text-center">Log in</h5>
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type="email" placeholder="Email" {...register("Email", { pattern: /^\S+@\S+$/i})} />
                            <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>Email*</label>
                        </span>
                    </div>
                    <div className="field">
                        <span className="p-float-label">
                            <InputText type="password" placeholder="Password" {...register("Password", {})} />
                            <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Password*</label>
                        </span>
                    </div>
                    
                    <Button type="submit" label="Log In" className="mt-2" />
                    <h6 className="already">Don't have an account? <Link to="/Register">Make an account.</Link></h6> 
                </form>
            </div>
        </div>
    );
}