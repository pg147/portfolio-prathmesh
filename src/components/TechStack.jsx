import GradientHeading from "./GradientHeading";
import StackCards from "./StackCards";

const tech = [
    {
        label: 'Languages',
        items: [
            {
                logo: '/javascript.svg',
                title: 'JavaScript'
            },
            {
                logo: '/typescript.svg',
                title: 'TypeScript'
            },
        ]
    },
    {
        label: 'Frontend',
        items: [
            {
                logo: '/react-js.svg',
                title: 'React.js'
            },
            {
                logo: '/next-js.svg',
                title: 'Next.js'
            },
        ]
    },
    {
        label: 'Tools & Version Control',
        items: [
            {
                logo: '/postman.svg',
                title: 'Postman'
            },
            {
                logo: '/github.svg',
                title: 'Github'
            },
        ]
    },
    {
        label: 'Databases',
        items: [
            {
                logo: '/mongodb.svg',
                title: 'MongoDB'
            },
            {
                logo: '/postgres.svg',
                title: 'PostGreSQL'
            },
        ]
    },
    {
        label: 'Backend',
        items: [
            {
                logo: '/node.js.svg',
                title: 'Node.js'
            },
            {
                logo: '/express-js.svg',
                title: 'Express.js'
            },
        ]
    },
]

export default function TechStack() {
    return (
        <div className="w-full grid grid-cols-3 gap-y-14 items-start justify-between">
            <div className="flex items-center gap-x-5">
                <GradientHeading
                    leadingText={"Tech Stack"}
                    className={"text-left"}
                />
                <h1 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">{"{ }"}</h1>
            </div>

            {
                tech.map((item, index) => (
                    <StackCards 
                        key={index}
                        title={item.label}
                        items={item.items}
                    />
                ))
            }
        </div>
    )
}
