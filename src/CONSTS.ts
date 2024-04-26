export const TODO_FILTER = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed'
} as const;
// as const hace que solo sea de lecutura, no se puede modificar

export const FILTER_BUTTONS = {
    [TODO_FILTER.ALL]:
    {
        literal: 'All',
        href: `/?filter=${TODO_FILTER.ALL}`,
        },
    [TODO_FILTER.ACTIVE]:
    {
        literal: 'Active',
        href: `/?filter=${TODO_FILTER.ACTIVE}`,
    },
    [TODO_FILTER.COMPLETED]:
    {
        literal: 'Completed',
        href: `/?filter=${TODO_FILTER.COMPLETED}`,
    }
} as const;