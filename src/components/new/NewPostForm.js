import React from 'react'
// import { isAuthenticated, decodeToken } from '../../lib/auth'
import FormInput from './FormInput'
import FormButton from './FormButton'
import FormTextarea from './FormTextarea'

function NewPostForm({ handleChange, handleSubmit }) {
  return(
    <form className="" onSubmit={handleSubmit}>
      <FormInput name="title" type="text" handleChange={handleChange} />
      <FormInput name="author" type="text" handleChange={handleChange} />
      <FormTextarea name="text" type="text" handleChange={handleChange} /> 
      <FormInput className="blurb-input" name="blurb" type="text" handleChange={handleChange} />
      <FormInput name="image" type="text" handleChange={handleChange} />
      <FormButton text="Create Post"/>
    </form>
  )
}

export default NewPostForm
