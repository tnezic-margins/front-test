type SearchInputProps = {
  searchTerm: string;
  onChange: (value: string) => void;
};

export const SearchInput = ({ searchTerm, onChange }: SearchInputProps) => {
  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search..."
      className="w-[100%]"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
