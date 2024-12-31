import Link from "next/link";
import { FaLinkedin, FaPhone, FaEnvelope, FaHome } from "react-icons/fa";
export default function ContactInfo() {
    return (
        <div className="bg-foreground text-tertiary px-4 py-3 rounded-lg shadow-lg shadow-primary/20 w-[100%] my-[20px]  relative">
            <div className="text-center">
                <h1 className="text-primary font-bold text-3xl mb-2">Have You any Question?</h1>
                <p className="text-tertiary text-lg leading-relaxed md:leading-loose font-medium"> I{"'"}m At Your Service</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="mt-5 text-white bg-background p-6 rounded-lg shadow-md flex flex-col items-center gap-2">
                    <FaPhone className="text-primary" style={{ fontSize: "27px" }} />
                    <h4 className=" text-white font-bold text-lg">Call Us On</h4>
                    <p className="text-muted mb-0">09261804445</p>
                </div>
                <Link href="https://github.com/aungkaungkhant-nssh" className="mt-5 text-white bg-background p-6 rounded-lg shadow-md flex flex-col items-center gap-2">
                    <FaHome className="text-primary" style={{ fontSize: "27px" }} />
                    <h4 className=" text-white font-bold text-lg">Address</h4>
                    <p className="text-muted mb-0">Hpa An (Kayin State)</p>
                </Link>
                <div className="mt-5 text-white bg-background p-6 rounded-lg shadow-md flex flex-col items-center gap-2">
                    <FaEnvelope className="text-primary" style={{ fontSize: "27px" }} />
                    <h4 className="text-white font-bold text-lg">Email</h4>
                    <p className="text-muted mb-0">akkgit0909@gmail.com</p>
                </div>
                <Link href="https://www.linkedin.com/in/aung-kaung-khant-7682ab245/" className="mt-5 text-white bg-background p-6 rounded-lg shadow-md flex flex-col items-center gap-2">
                    <FaLinkedin className="text-primary" style={{ fontSize: "27px" }} />
                    <h4 className=" text-white font-bold text-lg">Linked In</h4>
                    <p className="text-muted mb-0">Aung Kaung Khant</p>
                </Link>
            </div>
        </div>
    )
}