import { AlignLeft } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import { Label } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { links } from "@/utils/links";
import SingOutLinks from "./SingOutLinks";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";

const roitai: string = "daddy";
const num: number = 3;

// rafce
const DropdownListMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"}>
          <AlignLeft />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* ล็อคอินแล้ว */}
        <SignedIn>
          {links.map((item, index) => {
            return (
              <DropdownMenuItem key={index}>
                <Link href={item.href}>{item.label}</Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuItem>
            <SingOutLinks></SingOutLinks>
          </DropdownMenuItem>
        </SignedIn>

        {/* ล็อคเอ้าแล้ว */}
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton>
              <button>Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignUpButton>
              <button>Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        {/* <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownListMenu;
