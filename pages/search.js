import { useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import SearchFilters from '../components/SearchFilters';
import { BsFilter } from 'react-icons/bs';


const Search = ({ properties }) => {
  const router = useRouter();
  const [searchFilters, setSearchFilters] = useState(false);
  return (
    <Box>
      <Flex
        cursor='pointer'
        bg='gray.100'
        borderBottom='1px'
        borderColor='gray.200'
        p='2'
        fontWeight='black'
        fontSize='lg'
        justifyContent='center'
        alignItems='center'
        onClick={() => setSearchFilters(!searchFilters)}
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} />
      </Flex>
      {searchFilters && <SearchFilters />}
      Properties {router.query.purpose}
      
    </Box>
  );
};



export default Search;