import DriveItem from "./drive-item";

// primitives
import { ScrollArea } from "../ui/scroll-area";

export const DriveBrowser = () => {
  return (
    <ScrollArea>
      <div className="grid grid-cols-1 gap-2 @sm:grid-cols-3 @md:grid-cols-5 @xs:md:grid-cols-2">
        {[...Array(23)].map((key: React.Key) => (
          <DriveItem key={key} />
        ))}
      </div>
    </ScrollArea>
  );
};
