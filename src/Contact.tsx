// Contact
import { FormEvent, useRef } from "react";
import emailjs from '@emailjs/browser';


export default function Contact() { 

	const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

	return ( 
		<div className="pt-5 pb-20 px-4 mx-auto max-w-screen-md"> 
			<p className="mb-4 font-light text-left 
						text-white-500 sm:text-xl"> 
				Wanna know more? Try me!
			</p> 
			<form ref={form} onSubmit={sendEmail}> 
				<div className="flex flex-row"> 
					<div className="w-1/2 pr-2 "> 
						<label htmlFor="firstName"
							className="block my-2 text-left 
										text-2xl font-medium text-white-900"> 
							First Name
						</label> 
						<input type="text"
							className="shadow-sm bg-gray-50 border 
										border-gray-300 text-white-900 
										text-l block w-full p-2.5"
							placeholder="Enter First Name"
							required/> 
					</div> 
					<div className="w-1/2 pl-2"> 
						<label htmlFor="firstName"
							className="block my-2 text-left text-2xl 
										font-medium text-white-900"> 
							Last Name 
						</label> 
						<input type="text"
							className="shadow-sm bg-gray-50 border 
										border-gray-300 text-white-900 
										text-l block w-full p-2.5"
							placeholder="Enter Last Name"/> 
					</div> 
				</div> 
				<div> 
					<label htmlFor="email"
						className="block my-2 text-left text-2xl 
									font-medium text-white-900"> 
						Your email 
					</label> 
					<input type="email"
						className="shadow-sm bg-gray-50 border 
									border-gray-300 text-white-900 
									text-l block w-full p-2.5"
						placeholder="abc@geeksforgeeks.org"
						required /> 
				</div> 
				<div> 
					<label htmlFor="subject"
						className="block my-2 text-left 
									text-2xl font-medium text-white-900"> 
						Subject 
					</label> 
					<input type="text"
						className="block p-3 w-full text-l
									text-white-900 bg-gray-50 
									border border-gray-300 shadow-sm "
						placeholder="What issue/suggestion do you have?"
						required /> 
				</div> 
				<div > 
					<label htmlFor="message"
						className="block my-2 text-left 
									text-2xl font-medium text-white-900 "> 
						Your message 
					</label> 
					<textarea rows="6"
							className="block p-2.5 w-full text-l
										text-white-900 bg-gray-50
										shadow-sm border border-gray-300 "
							placeholder="Query/Suggestion..."/> 
				</div> 
				<button type="submit"
						className="mt-2 p-2 float-right text-white 
								border-[#eb7e4d] 
								bg-[#eb7e4d] hover:scale-105"> 
					Send message 
				</button> 
			</form> 
		</div> 
	) 
}
