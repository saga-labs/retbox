import React from "react";

// card primitives
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const DriveItem: React.FC = () => {
  return (
    <Card>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default DriveItem;
