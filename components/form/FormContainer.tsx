"use client"

import { useActionState } from "react"
import { toast } from 'sonner';
import { useEffect } from "react";
import { FormContainerProps } from "@/utils/type";

const initialState = {
    message: ''
}

const FormContainer = ({ action, children }: FormContainerProps) => {
  const [state, formAction] = useActionState(action, initialState)
  
  useEffect(() => {
    if(state.message) {
      toast(state.message)
    }
  }, [state])

  return (
    <form action={formAction}>
        {children}
    </form>
  )
}

export default FormContainer