'use client'
import { SignOutButton } from "@clerk/nextjs"
import { describe } from "node:test";
import { toast } from 'sonner';

const SingOutLinks = () => {
    // const { toast } = toast();  // ใช้ hook useToast เพื่อรับฟังก์ชัน toast

const handleLogout =()=>{
    toast.success("Logout Successfully!!");
}

  return (
    <SignOutButton redirectUrl="/">
        <button className="w-full text-left" onClick={handleLogout}>Logout</button>
    </SignOutButton>
  )
}
export default SingOutLinks