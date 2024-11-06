"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const searchData = searchParams.get("search")?.toString() || "";
  const [search, setSearch] = useState(searchData);

  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  }, 500);

  useEffect(() => {
    if (!searchParams.get("search")) {
      setSearch("");
    }
  }, [searchParams.get("search"), searchParams]);

  return (
    <form className="w-full">
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search products"
          className="w-full appearance-none bg-background pl-8 shadow-none"
          value={search}
          onChange={(event) => {
            event.preventDefault();
            setSearch(event.target.value);
            handleSearch(event.target.value);
          }}
        />
      </div>
    </form>
  );
};
export default SearchInput;
