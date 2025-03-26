"use server"
import { error } from 'console'
import { profileSchema, validateWithZod } from "@/utils/schemas";

const renderError = (error: unknown): { message: string } => {
    return {
        message: error instanceof Error ? error.message  :  'An error server'
    }
};

export const createProfile = async (prevState: any, formData: FormData) => {
    try {
        const rawData = Object.fromEntries(formData)
        const validateField = validateWithZod(profileSchema, rawData);
        console.log('validateField', validateField)
        return { message: 'Create Profile Success!!!' }
    } catch {
        console.log(error);
        return renderError(error)
    }
};