import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const ContactUsPage = () => {
    const form = useRef();
    const [status, setStatus] = useState('Submit');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const serviceID = 'service_ypeplcf';
        const templateID = 'contact_form';
        const publicKey = 'am1VZPuktoi7yeO5J';

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setStatus('Submit');
                alert('Message sent successfully!');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('Submit');
                alert('Failed to send the message. Please try again.');
            });
    };

    return (
        <div className="min-h-screen font-serif">
            {/* Hero Section - NOW WHITE */}
            <section className="bg-white py-20 text-center overflow-hidden">
                <div className="max-w-5xl mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
                        Your Brighter Tomorrow Is Just A Click Away
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto">
                        Have questions or need guidance on your divorce journey? Our team is here to provide expert divorce services and compassionate support. Reach out today to connect with our experienced divorce lawyers for personalized, hassle-free solutions that prioritize your well-being.
                    </p>
                    <div className="mt-12 flex justify-center">
                        <img src='/assets/giphy.webp' alt="Contact us animation" className='max-w-sm w-full h-auto' />
                    </div>
                </div>
            </section>

            {/* Main Content Section - NOW LIGHT WHITISH-PINK */}
            <section className="py-20 bg-[#FFF9F7]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
                    
                    {/* Left Column: Expertise and Contact Info */}
                    <div className="lg:col-span-1 space-y-10">
                        <div>
                            <h3 className="text-lg text-[#c48e53] font-semibold tracking-wider">UNSAATHI EXPERTISE</h3>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">Handling Legal Complexities With Expertise & Empathy</h2>
                            <p className="text-neutral-700 mt-4 text-base leading-relaxed">
                                Our team brings a wealth of experience to the table, providing you with a strong foundation of knowledge and expertise. With a proven track record of resolving complex divorce and separation cases, our legal expertise sets us apart as your trusted partner.
                            </p>
                        </div>
                        
                        <div className="flex gap-8">
                            <div className="text-center">
                                <p className="text-4xl font-bold">230+</p>
                                <p className="text-neutral-600 text-sm">Legal Cases Handled</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold">320+</p>
                                <p className="text-neutral-600 text-sm">Legal Advisory On Board</p>
                            </div>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-gray-200">
                            <a href="tel:+919266877791" className="flex items-center space-x-3 group">
                                <img src="/assets/Call.png" alt="Call Icon" className="h-5 w-5"/>
                                <span className="text-neutral-800 group-hover:text-[#c48e53] transition-colors font-medium">+91-9266877791</span>
                            </a>
                            <a href="mailto:info@unsaathi.com" className="flex items-center space-x-3 group">
                                <img src="/assets/Message.png" alt="Email Icon" className="h-5 w-5"/>
                                <span className="text-neutral-800 group-hover:text-[#c48e53] transition-colors font-medium">info@unsaathi.com</span>
                            </a>
                        </div>
                        
                        <div>
                            <h4 className="font-semibold mb-4 tracking-wider">SOCIAL CONNECT</h4>
                            <div className="flex space-x-5">
                                <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A104375160&keywords=unsaathi%20official&origin=RICH_QUERY_SUGGESTION&position=0&searchId=9be0b8b4-9aee-4e18-af9a-d037a94d41dd&sid=Bp7&spellCorrectionEnabled=false" className="text-gray-400 hover:text-[#b88b6c] transition-colors" aria-label="LinkedIn">
                                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 9h4v12H4zm6.563 0h3.682v1.645h.053a4.105 4.105 0 0 1 3.699-2.034c3.954 0 4.69 2.603 4.69 5.986V21h-4v-5.855c0-1.344-.028-3.074-1.873-3.074-1.876 0-2.162 1.464-2.162 2.972V21h-4z"/></svg>
                                </a>
                                {/* Add other social icons similarly */}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form - NOW WHITE */}
                    <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-lg">
                        <h3 className="text-lg text-[#c48e53] font-semibold tracking-wider">REACH OUT TO OUR EXPERTS</h3>
                        <h2 className="text-3xl font-bold text-neutral-900 mt-2 mb-8">
                            Ready to take control of your future? Schedule an appointment now.
                        </h2>
                        
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Your Name</label>
                                    <input type="text" id="name" name="user_name" placeholder="Enter your name" required className="w-full bg-gray-50 border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-1 focus:ring-[#c48e53] focus:border-[#c48e53]" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone Number</label>
                                    <input type="tel" id="phone" name="user_phone" placeholder="e.g., 998-877-6655" className="w-full bg-gray-50 border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-1 focus:ring-[#c48e53] focus:border-[#c48e53]" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
                                <input type="email" id="email" name="user_email" placeholder="name@domain.com" required className="w-full bg-gray-50 border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-1 focus:ring-[#c48e53] focus:border-[#c48e53]" />
                            </div>
                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-neutral-700 mb-1">Brief Description of Case</label>
                                <textarea id="description" name="message" rows="4" required placeholder="Please provide a brief summary..." className="w-full bg-gray-50 border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:ring-1 focus:ring-[#c48e53] focus:border-[#c48e53]"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#d5bfa7] hover:bg-[#c48e53] text-neutral-900 font-bold py-4 px-4 rounded-lg shadow-md transition-all duration-300 disabled:bg-gray-400 hover:text-white" disabled={status === 'Sending...'}>
                                {status}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            
            {/* The Address and Map section would also have the new pink background */}
             <section className="py-20 bg-[#FFF9F7]">
                 <div className="max-w-7xl mx-auto px-6">
                     {/* Your address, contact info, and map here */}
                 </div>
             </section>
        </div>
    );
};

export default ContactUsPage
