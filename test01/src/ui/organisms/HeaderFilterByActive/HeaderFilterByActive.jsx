import React from 'react';

import {
    HeaderFilter
} from '../../molecules';

export const HeaderFilterByActive = React.memo(({ onFilter }) =>  <HeaderFilter
    name="isActive"
    items={[{
        title: 'Активен',
        value: true
    },
    {
        title: 'Не активен',
        value: false
    },
    {
        title: 'Сбросить',
        value: undefined
    }]}
    onFilter={onFilter}
/>);