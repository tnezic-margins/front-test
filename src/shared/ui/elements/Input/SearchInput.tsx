import { Dispatch, SetStateAction } from "react";

type SearchInputProps = {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export const SearchInput = ({
  searchTerm,
  setSearchTerm,
}: SearchInputProps) => {
  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search..."
      className="w-[100%]"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};
