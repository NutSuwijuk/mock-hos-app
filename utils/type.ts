export type FormContainerProps = {
    children: React.ReactNode;
    action: (state: { message: string }, formData: FormData) => Promise<{ message: string }>;
}