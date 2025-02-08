import SmallSeparator from "./SmallSeparator";

export default function InfoCards({ title, tenure, logo, organization, credentials }) {
    return (
        <div className="w-fit flex flex-col gap-y-4 max-w-[425px]">
            <div className="flex flex-col font-medium">
                <h1 className="text-lg md:text-xl text-textSecondary">{title}</h1>
                <div className="flex items-center gap-x-3 text-subheading">
                    <p>{tenure}</p>
                    {credentials && <span>{credentials}</span>}
                </div>
            </div>
            <SmallSeparator />
            <div className="flex items-center gap-x-3.5">
                {logo && <img src={logo} className="size-6 md:size-8" alt="org_logo" />}
                <p className="font-regular text-textSecondary">{organization}</p>
            </div>
        </div>
    )
}
