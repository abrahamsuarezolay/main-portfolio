import React from "react";

const Contact = () =>{

    return(
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="sm:text-5xl text-4xl font-bold text-[#0466C8] text-center mb-[10%]">Contact</h1>
        <form action="https://getform.io/f/121ea1c5-ff2f-4d16-bab8-dbcc4ba64160" method="post" encType="multipart/form-data" className="text-gray-100">
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                    <label className="py-2">Name</label>
                    <input type="text" name="name" className="border-2 rounded-lg p-3 border-gray-100 bg-[#000918]" />
                </div>
                <div className="flex flex-col">
                    <label className="py-2">Phone number</label>
                    <input type="text" name="phone" className="border-2 rounded-lg p-3 border-gray-100 bg-[#000918]" />
                </div>
            </div>
            <div className="flex flex-col">
                <label className="py-2">Email</label>
                <input type="email" name="email" className="border-2 rounded-lg p-3 border-gray-100 bg-[#000918]" />
            </div>
            <div className="flex flex-col">
                <label className="py-2">Subject</label>
                <input type="text" name="subject" className="border-2 rounded-lg p-3 border-gray-100 bg-[#000918]" />
            </div>
            <div className="flex flex-col">
                <label className="py-2">Message</label>
                <textarea name="message" rows="10" className="border-2 rounded-lg p-3 border-gray-100 bg-[#000918]"></textarea>
            </div>
            <button className="mt-3 p-4 border-2 rounded-lg w-full border-gray-100 bg-[#000918] cursor-pointer hover:bg-gray-100 hover:border-gray-500 hover:border-3 hover:text-[#000918] ease-in duration-200">Send message</button>
        </form>
    </div>
    )

}

export default Contact