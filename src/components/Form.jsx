import { useState } from "react";
import { Tick02Icon } from "hugeicons-react";

const checkboxOptions = [
    { label: "UI Design", value: "ui-design" },
    { label: "Full Stack", value: "full-stack" },
    { label: "Frontend + UI", value: "frontend-plus-ui" },
    { label: "Other", value: "other" }
];

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        query: "",
        message: ""
    });
    const [selectedOption, setSelectedOption] = useState(""); 

    const handleCheck = (value) => {
        // If the same option is clicked again, uncheck it
        const newValue = selectedOption === value ? "" : value;

        setSelectedOption(newValue);
        setFormData((prev) => ({ ...prev, query: newValue }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="p-6 w-full rounded-3xl bg-form flex flex-col gap-y-5">
                <div className="w-full flex flex-col gap-y-7">
                    {/* Name Input */}
                    <div className="w-full flex flex-col gap-y-3">
                        <label htmlFor="name" className="font-medium text-textSecondary text-lg">
                            Your name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            className="w-full h-14 rounded-xl bg-transparent border-[1px] outline-none border-stroke focus:border-[1.75px] focus:border-primary px-6 font-regular text-subheading"
                            placeholder="e.g. John Doe"
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, name: e.target.value }))
                            }
                        />
                    </div>

                    {/* Email Input */}
                    <div className="w-full flex flex-col gap-y-3">
                        <label htmlFor="email" className="font-medium text-textSecondary text-lg">
                            Your email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            className="w-full h-14 rounded-xl bg-transparent border-[1px] outline-none border-stroke focus:border-[1.75px] focus:border-primary px-6 font-regular text-subheading"
                            placeholder="e.g. doejohn@gmail.com"
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, email: e.target.value }))
                            }
                        />
                    </div>

                    {/* Checkbox Selection */}
                    <div className="w-full flex flex-col gap-y-3">
                        <label className="font-regular text-textSecondary text-lg">Related to</label>
                        <div className="flex justify-between w-full">
                            {checkboxOptions.map((option, index) => (
                                <div key={index} className="w-fit flex items-center gap-x-2">
                                    <label className="relative flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={selectedOption === option.value}
                                            id={option.value}
                                            value={option.value}
                                            onChange={() => handleCheck(option.value)}
                                            className="peer hidden"
                                        />
                                        <div
                                            className="size-4 md:size-5 border-[1.5px] border-subheading rounded-md peer-checked:bg-primary peer-checked:border-primary bg-transparent flex items-center justify-center transition-colors"
                                        >
                                            {selectedOption === option.value && (
                                                <Tick02Icon strokeWidth={1.75} className="text-white" />
                                            )}
                                        </div>
                                    </label>
                                    <label className="font-regular text-white" htmlFor={option.value}>
                                        {option.label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Message Input */}
                    <div className="w-full flex flex-col gap-y-3">
                        <label htmlFor="message" className="font-medium text-textSecondary text-lg">
                            Write a message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            className="w-full h-14 rounded-xl bg-transparent min-h-28 py-5 border-[1px] outline-none border-stroke focus:border-[1.75px] focus:border-primary px-6 font-regular text-subheading"
                            placeholder="Write your message here"
                            rows={6}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, message: e.target.value }))
                            }
                        />
                    </div>
                </div>

                <button type="submit" className="bg-primary w-full md:h-14 font-regular text-white rounded-xl">
                    Submit
                </button>
            </div>
        </form>
    );
}
