"use server"
import { error } from 'console'
import { profileSchema, validateWithZod } from "@/utils/schemas";

// const profileSchema = z.string().min(2,{message:"อักขระต้องมากกว่า 2 อักขระ"})

export const createProfile = async (prevState:any, formData: FormData) => {
    try {
        const rawData = Object.fromEntries(formData)
        const validateField = validateWithZod(profileSchema,rawData);
        console.log('validateField',validateField)
        return { message : 'Create Profile Success!!!'}
    } catch {
        console.log(error);
        return { message: error.message || 'An error server'}
    }
  };