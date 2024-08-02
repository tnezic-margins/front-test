type SearchInputProps = {
  searchTerm: string;
  // setSearchTerm: Dispatch<SetStateAction<string>>;
  onChange: (value: string) => void;
};

export const SearchInput = ({ searchTerm, onChange }: SearchInputProps) => {
  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search..."
      className="w-[100%]"
      // onChange={(e) => setSearchTerm(e.target.value)}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
