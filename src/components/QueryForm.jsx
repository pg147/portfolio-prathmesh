import Form from "./Form";
import GradientHeading from "./GradientHeading";
import Separator from "./Separator";

export default function QueryForm() {
    return (
        <div className="w-full px-5 md:px-0 xl:max-w-[1050px] 2xl:max-w-[1400px] mx-auto flex flex-col gap-y-7 lg:gap-y-0 lg:flex-row justify-between mt-12 md:mt-28">
            {window.innerWidth < 768 && <Separator className={"mb-7"} />}
            <div className="flex flex-col md:gap-y-10 w-fit mx-auto lg:mx-0">
                <div className="flex flex-col gap-y-1 w-fit">
                    <GradientHeading
                        leadingText={"Want to"}
                        spanText={"Collaborate"}
                        trailingText={"?"}
                        className={"text-center lg:text-left text-xl md:text-2xl 2xl:text-3xl font-medium"}
                    />
                    <GradientHeading
                        leadingText={"Or have a"}
                        spanText={"Project"}
                        trailingText={"to discuss ?"}
                        className={"text-xl md:text-2xl 2xl:text-3xl font-medium"}
                    />
                </div>

                <div className="hidden w-fit lg:flex flex-col gap-y-5">
                    <h1 className="text-subheading font-regular">Fill out the form on your right to get started !</h1>
                    <p className="text-white font-regular text-center">Or</p>
                    <div className="flex flex-col">
                        <h1 className="text-subheading font-regular">Drop your query on the mail below</h1>
                        <p className="text-4xl font-medium bg-clip-text bg-gradient-to-b from-[#C9A2A2] to-primary text-transparent">hi@prathmesh.dev</p>
                    </div>
                </div>
            </div>

            <div className="w-full md:mx-auto lg:mx-0 md:max-w-[600px] xl:max-w-[550px] 2xl:max-w-[600px]">
                <Form />
            </div>

            <div className="lg:hidden w-fit mx-auto mt-5 flex flex-col gap-y-5">
                <h1 className="text-subheading font-regular">Fill out the form above to get started !</h1>
                <p className="text-white font-regular text-center">Or</p>
                <div className="flex flex-col">
                    <h1 className="text-subheading font-regular">Drop your query on the mail below</h1>
                    <p className="text-4xl font-medium bg-clip-text bg-gradient-to-b from-[#C9A2A2] to-primary text-transparent">hi@prathmesh.dev</p>
                </div>
            </div>
        </div>
    )
}
