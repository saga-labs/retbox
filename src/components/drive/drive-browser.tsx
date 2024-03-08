import React from "react";
import useSWR from "swr";
import { createClient } from "@supabase/supabase-js";
import type { FileObject } from "@supabase/storage-js";

// primitives
import { ScrollArea } from "@/components/ui/scroll-area";

// components
import DriveItem from "./drive-item";

const supabaseKey = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON;
const supabase = createClient(supabaseKey, supabaseAnon);

// fetch the current user
const userFetcher = async () => await supabase.auth.getUser();

// fetch the current user's files
const storageFetcher = async () =>
  await supabase.storage
    .from("test-bucket")
    .list("373d0ca3-6527-4a59-a0ec-36c6a4d1f828", {
      limit: 10,
    });

export const DriveBrowser = () => {
  const user = useSWR("user", userFetcher);
  const files = useSWR("storage", storageFetcher);

  if (user.error && files.error) return <div>failed to load</div>;
  if (user.isLoading && files.isLoading) return <div>loading...</div>;

  return (
    <ScrollArea>
      <div className="grid grid-cols-1 gap-2 @sm:grid-cols-3 @md:grid-cols-5 @xs:md:grid-cols-2">
        {files.data?.data?.map((file: FileObject, key: React.Key) => (
          <DriveItem file={file} key={key} />
        ))}
      </div>
    </ScrollArea>
  );
};
