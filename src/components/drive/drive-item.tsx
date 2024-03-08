import React from "react";

// card primitives
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { FileObject } from "@supabase/storage-js";

interface Props {
  file: FileObject;
  key: React.Key;
}

const DriveItem: React.FC<Props> = ({ file }: { file: FileObject }) => {
  return (
    <Card>
      <CardContent>
        <p>{file.name}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default DriveItem;
