import Form from "./Form";
import GradientHeading from "./GradientHeading";

export default function QueryForm() {
    return (
        <div className="w-full flex justify-between mt-28">
            <div className="flex flex-col gap-y-10 w-fit">
                <div className="flex flex-col gap-y-1 w-fit">
                    <GradientHeading
                        leadingText={"Want to"}
                        spanText={"Collaborate"}
                        trailingText={"?"}
                        className={"text-left"}
                    />
                    <GradientHeading
                        leadingText={"Or have a"}
                        spanText={"Project"}
                        trailingText={"to discuss ?"}
                    />
                </div>

                <div className="w-fit flex flex-col gap-y-5">
                    <h1 className="text-subheading font-regular">Fill out the form on your right to get started !</h1>
                    <p className="text-white font-regular text-center">Or</p>
                    <div className="flex flex-col">
                        <h1 className="text-subheading font-regular">Drop your query on the mail below</h1>
                        <p className="text-4xl font-medium bg-clip-text bg-gradient-to-b from-[#C9A2A2] to-primary text-transparent">hi@prathmesh.dev</p>
                    </div>
                </div>
            </div>

            <div className="w-full xl:max-w-[550px] 2xl:max-w-[600px]">
                <Form />
            </div>
        </div>
    )
}
