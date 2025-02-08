export default function FunSnippets() {
    return (
        <div className="w-fit flex flex-col gap-y-3 font-code text-sm md:text-xl">
            <div className="z-[20] absolute bottom-28 right-0 md:static size-fit px-3 md:px-6 py-3 md:py-4 bg-tile border-[1.5px] border-stroke rounded-2xl">
                <h1 className="text-white"><span className="text-codeObject">dev</span>.<span className="text-codeTag">FullName</span> <span className="text-codeObject">=</span> “<span className="text-codeString">Prathmesh A. Gaidhane</span>”</h1>
            </div>
            <div className=" w-[90%] absolute top-40 left-0 md:static md:size-fit px-3 md:px-6 py-3 md:py-4 bg-tile border-[1.5px] border-stroke rounded-2xl">
                <h1 className="text-white">{"<"}<span className="text-codeTag">h1</span>{">"}I wait, but I take, what I want to.{"</"}<span className="text-codeTag">h1</span>{">"}</h1>
            </div>
            <div className="hidden md:block md:size-fit px-3 md:px-6 py-3 md:py-4 bg-tile border-[1.5px] border-stroke rounded-2xl">
                <h1 className="text-white"><span className="text-codeObject">work</span>.<span className="text-codeTag">interesting</span> <span className="text-codeKeyword">?</span> <span className="text-codeVariable">letsDoIt()</span> <span className="text-codeKeyword">:</span> <span className="text-codeVariable">bye()</span>;</h1>
            </div>
            <div className="z-[19] absolute top-64 right-3 md:static size-fit p-3 md:px-6 md:py-4 bg-tile border-[1.5px] border-stroke rounded-2xl">
                <h1 className="text-white"><span className="text-codeKeyword">if</span> <span className="text-codeObject">{"("}</span><span className="text-codeVariable">!</span><span className="text-codeString">money</span><span className="text-codeObject">{")"}</span> <span className="text-codeKeyword">return</span>;</h1>
            </div>
        </div>
    )
}
