import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button, Flex, Input } from "@chakra-ui/react";

interface SearchBarProps {
  handleSearch: (query: string) => void;
  isLoading: boolean;
}

const SearchBar = ({ handleSearch, isLoading }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (query !== "") {
      handleSearch(query);
    }
  };
  return (
    <Flex w={["full", null, "unset"]} alignItems="center">
      <form style={{ display: "flex", flex: 1 }} onSubmit={onSubmit}>
        <Input
          w={["full", null, "unset"]}
          name="song"
          color="white"
          mr="2"
          border="none"
          borderRadius="50px"
          bgColor="rgba(138, 138, 138, 0.5)"
          placeholder="Input song name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          px="1.5em"
          isLoading={isLoading}
          loadingText="Searching"
          leftIcon={<FaSearch />}
          type="submit"
          aria-label="search song"
        >
          Search
        </Button>
      </form>
    </Flex>
  );
};

export default SearchBar;
