import {Metadata} from "next";

export const metadata: Metadata={
    title:"Policy",
    description:"Policy of the EBuy",
    keywords:["EBuy-ECommerce", "shop", "ecommerce", "sell", "buy", "policy"]
}

export default function PolicyPage(){
    return(
        <main>
            <div className="container mx-auto px-5 md:px-10 lg:px-20">
                <h1 className="text-gray-800 text-2xl text-center font-bold my-10">Privacy Policy</h1>
                <p className="text-gray-700">At <span className="font-bold text-blue-800 text-wrap">EBuy-Ecommerce</span> Website, we
                    understand the importance of your privacy and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you
                    visit our website or make a purchase from us.</p>
                <p className="text-gray-700 text-wrap mt-2">By accessing or using our website, you consent to the collection, use, and
                    disclosure of your information in accordance with this Privacy Policy.</p>
                <h3 className="text-gray-800 text-2xl text-center font-bold my-10">Information We Collect</h3>
                <p className="text-gray-700 text-wrap">When you visit our website, we may collect certain information about you, such
                    as your name, email address, shipping address, payment information, and browsing activity. We
                    collect this information in order to process your orders, communicate with you, and improve our
                    services.</p>
                <h3 className="text-gray-800 text-2xl text-center font-bold my-10">How We Use Your Information</h3>
                <p className="text-gray-700 text-wrap">We may use the information we collect from you for various purposes,
                    including:</p>
                <ol className="text-gray-700 list-decimal mt-2">
                    <li>Processing and fulfilling your orders.</li>
                    <li>Communicating with you about your orders, account, or inquiries</li>
                    <li>Providing customer support.</li>
                    <li>Personalizing your shopping experience.</li>
                    <li>Sending you marketing communications, if you have opted in to receive them.</li>
                    <li>Analyzing website usage and trends to improve our products and services.</li>
                </ol>
                <h3 className="text-gray-800 text-2xl text-center font-bold my-10">Information Sharing and Disclosure</h3>
                <p className="text-gray-700 text-wrap">We may share your information with third parties who provide services on our
                    behalf, such as payment processors, shipping carriers, and marketing partners. We may also disclose
                    your information when required by law or to protect our rights, property, or safety.</p>
                <h3 className="text-gray-800 text-2xl text-center font-bold my-10">Data Security</h3>
                <p className="text-gray-700 text-wrap">We take the security of your information seriously and implement appropriate
                    technical and organizational measures to protect it against unauthorized access, alteration,
                    disclosure, or destruction.</p>
                <h3 className="text-gray-800 text-2xl text-center font-bold my-10">Your Rights</h3>
                <p className="text-gray-700 text-wrap">You have the right to access, update, or delete the personal information we
                    hold about you. You may also have the right to object to certain processing activities or request
                    that we restrict the use of your information.</p>
                <h3 className="text-gray-800 text-2xl text-center font-bold my-10">Changes to This Policy</h3>
                <p className="text-gray-700 text-wrap">We reserve the right to update or modify this Privacy Policy at any time. If we
                    make material changes to the policy, we will notify you by email or by posting a notice on our
                    website.</p>
                <h3 className="text-gray-800 text-2xl text-center font-bold my-10">Contact Us</h3>
                <p className="text-gray-700 text-wrap">If you have any questions or concerns about this Privacy Policy or our data
                    practices, please contact us at <span className="font-bold text-blue-800">EBuy-Ecommerce</span> Center</p>
                <p className="text-gray-600 mt-2 italic">Last Updated: 02-05-2024</p>
            </div>
        </main>
    )
}