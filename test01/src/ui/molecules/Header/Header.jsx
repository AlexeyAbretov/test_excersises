import React from 'react';

import { Box, FlexBox } from 'ui';

export const Header = React.memo(({ children }) => {
    return <FlexBox
        justifyContent="flex-start"
        alignItems="center"
        fontWeight="bold"
    >
        <Box width="24px" height="24px" mr="10px" position="relative">
           {children?.filters?.byActive}
        </Box>
        <Box flex={1}>
            Name
            {children?.sorters?.byName}
        </Box>
        <Box flex={1}>
            Balance
            {children?.sorters?.byBalance}
        </Box>
        <Box flex={1}>
            Email
            {children?.sorters?.byEmail}
        </Box>
    </FlexBox>}
);