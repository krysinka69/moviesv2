"use client";

import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { Input, InputProps, Kbd, Spinner } from "@heroui/react";
import { cn } from "@/utils/helpers";
import { useHotkeys } from "@mantine/hooks";
import { useRouter } from "@bprogress/next";
import { usePathname } from "next/navigation";

interface SearchInputProps extends InputProps {
  isLoading?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onChange,
  className,
  isLoading,
  placeholder = "Search your favorite movies...",
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathName = usePathname();

  useHotkeys([
    [
      "ctrl+K",
      () => {
        if (pathName !== "/search") {
          return router.push("/search");
        }
        inputRef.current?.focus();
      },
      { preventDefault: true },
    ],
  ]);

  return (
    <Input
      ref={inputRef}
      autoComplete="off"
      className={cn(className, "w-full")}
      placeholder={placeholder}
      radius="full"
      onChange={onChange}
      classNames={{
        inputWrapper: "bg-secondary-background",
        /* This makes the typed text and ghost text white */
        input: "text-sm text-white! placeholder:text-white/80!",
      }}
      aria-label="Search"
      type="search"
      labelPlacement="outside"
      disabled={isLoading}
      /* This makes the CTRL+K box white */
      endContent={!props.value && <Kbd className="hidden md:inline-block text-white bg-white/10">CTRL+K</Kbd>}
      startContent={
        /* This makes the magnifying glass white */
        <div className="text-white pointer-events-none flex shrink-0 items-center pr-1">
          {isLoading ? <Spinner color="white" size="sm" /> : <FaSearch />}
        </div>
      }
      {...props}
    />
  );
};

export default SearchInput;
