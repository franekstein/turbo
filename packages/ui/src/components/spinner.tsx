import { RiLoaderLine } from "@remixicon/react";
import { cn } from "@workspace/ui/lib/utils";

type SpinnerProps = {
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<typeof RiLoaderLine>, "className" | "children">;

function Spinner({ className, ...props }: SpinnerProps) {
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
