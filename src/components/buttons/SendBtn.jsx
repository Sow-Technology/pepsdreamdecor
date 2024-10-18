import { IoSend } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const SendBtn = ({ children, ...props }) => {
  return (
    <Button
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden  transition duration-300 ease-out border shadow group w-full font-bold",
        // light mode
        "border-zinc-300 text-zinc-800 bg-zinc-50",
        // dark mode
        "dark:border-zinc-700 dark:text-zinc-100 dark:bg-zinc-950"
      )}
      {...props}
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-500 -translate-x-full group-hover:translate-x-0 ease-out bg-background dark:bg-zinc-100 text-zinc-900 dark:text-zinc-800">
        <IoSend size="20" />
      </span>
      <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease uppercase">
        {children}
      </span>
      <span className="relative invisible">{children}</span>
    </Button>
  );
};
