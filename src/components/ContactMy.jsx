import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactMy() {
  const form = useRef();
  const sendRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_1k9pyla",
      "template_a769967",
      form.current,
      "-qNqLI6AmKCJFHre6"
    );
    e.target.reset();
  };

  const handleRef = () => {
    sendRef.current.focus();
  };

  return (
    <div
      className={`bg-slate-900 w-full h-fit py-24 px-8 md:px-8 lg:px-12 overflow-hidden flex justify-between items-start gap-6 max-md:flex-col max-md:gap-y-16`}
      id="contact"
    >
      <div className="flex-1">
        <h1 className="text-2xl text-white font-bold mb-6 uppercase">
          Contact me
        </h1>
        <div className="flex gap-2">
          <div className="flex-1 flex flex-col gap-y-6">
            <div className="flex items-center gap-6">
              <div className="icon border-2 border-white rounded-full w-14 h-14 p-4 flex items-center justify-center">
                <i className="ri-phone-fill text-2xl text-red-400"></i>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=+201271356094"
                target="_blank"
                className="text-gray-400"
              >
                +20 1212 186 196
              </a>
            </div>
            <div className="flex items-center gap-6">
              <div className="icon border-2 border-white rounded-full w-14 h-14 p-4 flex items-center justify-center">
                <i className="ri-mail-fill text-xl text-red-400"></i>
              </div>
              <div className="text-gray-400 cursor-pointer" onClick={handleRef}>
                erapaa10@gmail.com
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="icon border-2 border-white rounded-full w-14 h-14 p-4 flex items-center justify-center">
                <i className="ri-map-pin-fill text-xl text-red-400"></i>
              </div>
              <div className="text-gray-400">Cairo, Egypt</div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-6">
            <div className="flex items-center gap-6">
              <div className="icon border-2 border-white rounded-full w-14 h-14 p-4 flex items-center justify-center">
                <i className="ri-telegram-fill text-2xl text-red-400"></i>
              </div>
              <a
                href="https://t.me/ElsayedRapaa"
                target="_blank"
                className="text-gray-400"
              >
                @ElsayedRapaa
              </a>
            </div>
            <div className="flex items-center gap-6">
              <div className="icon border-2 border-white rounded-full w-14 h-14 p-4 flex items-center justify-center">
                <i className="ri-skype-fill text-2xl text-red-400"></i>
              </div>
              <a
                href="skype:live:.cid.f36dede2ba01c54b?chat"
                target="_blank"
                className="text-gray-400"
              >
                Start Chat
              </a>
            </div>
            <div className="flex items-center gap-6">
              <div className="icon border-2 border-white rounded-full w-14 h-14 p-4 flex items-center justify-center">
                <i className="ri-discord-fill text-2xl text-red-400"></i>
              </div>
              <a
                href="https://discord.com/channels/1061993203722616872/1061993203722616875"
                target="_blank"
                className="text-gray-400"
              >
                Discord ID
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-[100%]">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="outline-none border-2 border-white px-3 py-2 bg-transparent w-full text-white"
            ref={sendRef}
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            className="outline-none border-2 border-white px-3 py-2 bg-transparent w-full text-white"
          />
          <textarea
            type="message"
            placeholder="Your Message"
            name="message"
            rows={4}
            className="outline-none border-2 border-white px-3 py-2 bg-transparent w-full text-white resize-none"
          />
          <button className="block transition-colors bg-red-400 py-3 text-center text-white font-bold hover:bg-white hover:text-red-400 uppercase">
            send me
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMy;
