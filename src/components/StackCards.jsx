import SmallSeparator from "./SmallSeparator";

export default function StackCards({ title, items = [] }) {
    return (
        <div className="w-full flex flex-col gap-y-4 max-w-[375px]">
            <h1 className="text-2xl text-textSecondary font-medium">{title}</h1>
            <SmallSeparator />
            <div className="flex gap-x-9 w-full font-regular">
                {
                    items.map((item, index) => (
                        <div key={index} className="flex items-center gap-x-2.5">
                            {<img src={item.logo} className="size-8" alt={item.title + "_logo"} />}
                            <p className="font-regular text-textSecondary">{item.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
