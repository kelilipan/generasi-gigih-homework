import { HStack, IconButton, StackProps, Text } from "@chakra-ui/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export interface PaginationProps extends StackProps {
  currentPage: number;
  maxLength: number;
  handleChangePage: (index: number) => void;
}

const Pagination = ({
  maxLength = 1,
  currentPage = 1,
  handleChangePage,
  ...props
}: PaginationProps) => {
  return (
    <HStack {...props}>
      <IconButton
        isDisabled={currentPage === 1}
        onClick={() => handleChangePage(currentPage - 1)}
        size="sm"
        icon={<FaAngleLeft />}
        aria-label="Previous page"
      />
      <Text fontSize="sm">
        Page {currentPage} of {maxLength}
      </Text>
      <IconButton
        isDisabled={currentPage === maxLength}
        onClick={() => handleChangePage(currentPage + 1)}
        size="sm"
        icon={<FaAngleRight />}
        aria-label="Next page"
      />
    </HStack>
  );
};

export default Pagination;
