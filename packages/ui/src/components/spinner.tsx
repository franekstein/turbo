import { RiLoaderLine } from "@remixicon/react";
import { cn } from "@workspace/ui/lib/utils";

function Spinner({
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof RiLoaderLine>, "children">) {
  return (
    <RiLoaderLine
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      role="status"
      {...props}
    />
  );
}

export { Spinner };
