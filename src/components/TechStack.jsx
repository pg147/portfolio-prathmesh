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
        <div className="px-4 md:px-0 w-full mt-12 md:mt-20 md:mx-auto flex flex-col md:grid md:grid-cols-3 gap-x-20 gap-y-14 items-start justify-between xl:max-w-[1050px] 2xl:max-w-[1400px]">
            <div className="flex items-center gap-x-5 mx-auto md:mx-0">
                <GradientHeading
                    leadingText={"Tech Stack"}
                    className={"text-left text-xl xl:text-2xl 2xl:text-3xl font-medium"}
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
