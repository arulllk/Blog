import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

function Form_practice() {
  

  const schema = yup.object().shape({
    fullName: yup.string().required("Your full name is required"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'),null],"Passwords dont match").required(),
  })

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver:yupResolver(schema)
  });
  const onSubmit = (data,errors) => {
    console.log(data,errors);
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-[300px] gap-2'>
       {console.log(errors)}
       <input type='text' placeholder='fullname..' className='h-[40px] border border-gray-300 px-2.5' {...register('fullName')} />
       {errors.fullName?.message ? <p className='text-red-600'>{errors.fullName?.message }</p> : null }
       <input type='text' placeholder='email..'  className='h-[40px] border border-gray-300 px-2.5' {...register('email')} />
       {errors.email?.message ? <p className='text-red-600'>{errors.email?.message }</p> : null }
       <input type='number' placeholder='age..'  className='h-[40px] border border-gray-300 px-2.5' {...register('age')} />
       {errors.age?.message ? <p className='text-red-600'>{errors.age?.message }</p> : null }
       <input type='password' placeholder='password..' className='h-[40px] border border-gray-300 px-2.5'  {...register('password')} />
       {errors.password?.message ? <p className='text-red-600'>{errors.password?.message }</p> : null }
       <input type='password' placeholder='confirm password..'  className='h-[40px] border border-gray-300 px-2.5' {...register('confirmPassword')}/>
       {errors.confirmPassword?.message ? <p className='text-red-600'>{errors.confirmPassword?.message }</p> : null }
       <input type='submit'  />
     </form>
  )
}

export default Form_practice