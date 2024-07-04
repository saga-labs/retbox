"use client";

// contexts
import useIntegrationStore from "@/features/integration/contexts/use-integration";
import { Integration } from "@/features/integration";

// components
import { Button } from "@/components/common/button";
import { SettingsNav } from "@/components/layout/settings-nav";
import { usePathname } from "next/navigation";


export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const open = useIntegrationStore((s) => s.open);
  const setOpen = useIntegrationStore((s) => s.setOpen);
  const pathname = usePathname();
  return (
    <>
      {open && <Integration />}
      <div className="p-4">
        <div className="flex flex-row justify-between">
          <h3 className="text-xl font-semibold">Settings</h3>
          <Button size="sm" func={() => setOpen(true)}>
            Add New
          </Button>
        </div>

        <div>
          <div className="sm:hidden">
            <label htmlFor="Tab" className="sr-only">
              Tab
            </label>

            <select
              id="Tab"
              className="w-full rounded-md border-gray-200"
              defaultValue={"noti"}
            >
              <option value={"sett"}>Settings</option>
              <option value={"msgs"}>Messages</option>
              <option value={"arch"}>Archive</option>
              <option value={"noti"}>Notifications</option>
            </select>
          </div>

          <div className="hidden sm:block my-4">
            <SettingsNav path={pathname} />
          </div>
        </div>

        {children}
      </div>
    </>
  );
}
