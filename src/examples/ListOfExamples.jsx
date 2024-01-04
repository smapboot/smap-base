const items = [
  {
    label: "Datatable",
    href: "/examples/datatable",
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