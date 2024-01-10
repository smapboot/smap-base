import _ from "lodash"

const items = [
    {
        label: "Datatable",
        href: "/examples/datatable",
        extra: "https://react-data-table-component.netlify.app/?path=/story/getting-started-intro--page"
    },
    {
        label: "Full Calendar",
        href: "/examples/fullcalendar",
        extra: "https://fullcalendar.io/docs#toc"
    },
    {
        label: "Ckeditor",
        href: "/examples/ckeditor",
        extra: "https://ckeditor.com/docs/ckeditor5/latest/installation/integrations/react.html#quick-start"
    },
];

export const ListOfExamples = (
    <ul>
        {
            items.map((item, i) => {
                return  (
                    <li key={i}>
                        <a href={item.href}>
                            {item.label}
                        </a>
                        {
                            ( !_.isEmpty(item.extra)) &&
                            <sup>
                                    <span className={"linkExtern"}>
                                        <a href={item.extra} target={"_blank"}>
                                            + info & doc
                                        </a>
                                    </span>
                            </sup>
                        }
                    </li>
                )
            })
        }
    </ul>
)