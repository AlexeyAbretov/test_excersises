import React, { useEffect, useState } from 'react';

import { 
    Header,
    Rows,
    HeaderFilterByActive,
    HeaderSorter,
 } from 'ui';

import { Api } from 'api';

const sortFields = {
    Balance: 'balance',
    Email: 'email'
}

const sortDirection = {
    None: 'none',
    Asc: 'asc',
    Desc: 'desc',
}

const parseNumber = ({
    value = ''
} = {}) => value?.replace(/[^0-9.-]+/g,"");

const comparers = {
    [sortFields.Balance + sortDirection.Asc]: (a, b) => parseNumber({
        value: a.balance
    }) - parseNumber({
        value: b.balance
    }),
    [sortFields.Balance + sortDirection.Desc]: (a, b) => parseNumber({
        value: b.balance
    }) - parseNumber({
        value: a.balance
    }),
    [sortFields.Email + sortDirection.Asc]: (a, b) => a.email.localeCompare(
        b.email
    ),
    [sortFields.Email + sortDirection.Desc]: (a, b) => b.email.localeCompare(
        a.email
    ),
}

export const App = () => {
    const [items, setItems] = useState([]);
    const [opened, setOpened] = useState([]);
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState([]);

    useEffect(() => {
        async function getData() {
            const data = await Api.counterparty.get();

            setItems(data);
        }
        getData();
    }, []);

    const getItems = ({ parentId = 0} = {}) => {
        const result = [];
        const filtered = items
            .filter(x => x.parentId === parentId
                && (filter.isActive !== undefined
                    ? x.isActive == filter.isActive 
                    : true))
            .sort((a, b) => {
                if (!sort.length) {
                    return a.name.localeCompare(
                        b.name
                    );
                }

                let result = null;

                
                sort.forEach((x) => {
                    result = result || comparers[x.name + x.dir](a, b);
                })

                return result;
            });

        for (let i = 0; i <= filtered.length - 1; i++) {
            result.push({
                ...filtered[i],
                items: opened.includes(filtered[i].id)
                    && getItems({ parentId: filtered[i].id })
            });
        }

        return result;
    };

    const onOpen = ({ id = 0} = {}) => {
        if (opened.includes(id)) {
            setOpened([
                ...opened.filter((x) => x !== id)
            ])
        } else {
            setOpened([
                ...opened,
                id
            ])
        }
    };

    const onFilter = ({ name, value }) => {
        setFilter({
            ...filter,
            [name]: value
        })
    };

    const onSort = ({ name }) => {
        let dir = sort.find((x) => x.name === name)?.dir
            || sortDirection.None;

        if (dir === sortDirection.None) {
            dir = sortDirection.Asc;
        } else if (dir === sortDirection.Asc) {
            dir = sortDirection.Desc;
        } else {
            dir = sortDirection.None;
        }

        if (dir === sortDirection.None) {
            setSort([
                ...sort.filter((x) => x.name !== name)
            ]);

            return;
        }

        const index = sort.findIndex((x) => {
            return x.name === name;
        });

        if (index === -1) {
            setSort([
                ...sort,
                {
                    name,
                    dir
                }
            ]);

            return;
        }
        
        sort[index] = {
            name,
            dir
        };

        setSort([
            ...sort
        ]);
    };

    return (
        <>
            <Header>
                {{
                    filters: {
                        byActive: <HeaderFilterByActive onFilter={onFilter} />
                    },
                    sorters: {
                        byBalance: <HeaderSorter name={sortFields.Balance} onSort={onSort} />,
                        byEmail: <HeaderSorter name={sortFields.Email} onSort={onSort} />
                    }
                }}
            </Header>
            <Rows items={getItems()} onOpen={onOpen} />
        </>
    );
}