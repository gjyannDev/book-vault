import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signOutUser } from "@/services/api/auth/auth.api";
import type { AccountInfo } from "@/types/bookTypes";
import clsx from "clsx";
import { useNavigate, useOutletContext } from "react-router-dom";
import noProfile from "../assets/images/no_profile.png";

export default function AccountPage() {
  const { accountInfo } = useOutletContext<{
    accountInfo: AccountInfo | null;
  }>();

  const navigate = useNavigate();

  function handleSignOut() {
    signOutUser();

    navigate(`/`);
  }

  return (
    <div className="my-12">
      <div className="flex justify-between">
        <h1
          className={clsx(
            "font-playfair-bold text-3xl mb-6",
            "lg:text-4xl lg:mb-8"
          )}
        >
          Profile
        </h1>
        <Button className="hidden md:flex" onClick={handleSignOut}>
          Sign out
        </Button>
      </div>
      <div className="flex flex-col gap-18">
        <div
          className={clsx(
            "flex flex-col gap-4 w-[96px]",
            "md:flex-row md:items-center md:gap-6"
          )}
        >
          <img src={noProfile} alt="no profile image" className="" />
          <Button
            className={clsx(
              "px-4 text-xs rounded-xs",
              "lg:px-6 lg:py-2 lg:text-md"
            )}
          >
            Add picture
          </Button>
        </div>
        <div
          className={clsx(
            "flex flex-col gap-8",
            " md:flex-row md:justify-around",
            "lg:max-w-3xl"
          )}
        >
          <div className="flex flex-col gap-2 md:flex-1">
            <Label className="font-playfair-bold">Profile Name</Label>
            <Input
              type="text"
              value={accountInfo?.profileName ?? ""}
              className="md:w-84"
            />
          </div>
          <div className="flex flex-col gap-2 md:flex-1">
            <Label className="font-playfair-bold">Email</Label>
            <Input
              type="email"
              value={accountInfo?.email ?? ""}
              className="md:w-84"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
