import React  from 'react';

import { BasicImage, Box } from 'ui';

import SortIcon from './img/sort.png';

export const HeaderSorter = React.memo(({ name = '', onSort} = {}) => {
    return (
        <Box height="16px" display="inline-block">
            <BasicImage 
                src={SortIcon}
                height="100%"
                cursor="pointer"
                onClick={() => onSort({ name })}
            />
        </Box>
    );
});