import { Button } from "@/components/ui/button";
import { signOutUser } from "@/services/api/auth/authApi";
import type { AccountInfo } from "@/types/bookTypes";
import { useOutletContext } from "react-router-dom";

export default function AccountPage() {
  const { accountInfo } = useOutletContext<{
    accountInfo: AccountInfo | null;
  }>();

  return (
    <div className="">
      {accountInfo?.email}
      <Button onClick={() => signOutUser()}>Sign out</Button>
    </div>
  );
}
