const items = [
    {
        label: "Datatable",
        href: "/examples/datatable",
    },
    {
        label: "Full Calendar",
        href: "/examples/fullcalendar",
    },
];

export const ListOfExamples = (
    <ul>
        {
            items.map((item, i) => (
                <li key={i}>
                    <a href={item.href}>
                        {item.label}
                    </a>
                </li>
            ))
        }
    </ul>
)