"use client";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { projectActivities } from "@/constants/projectActivities";
import Image from "next/image";
import Link from "next/link";

export default function ProjectShowImage() {
    return (
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-white mb-5">
                Explore Project Activities
            </h2>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                download={false}
                mode="lg-slide"
                elementClassNames="grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
                {projectActivities.map((projectActivity, index) => (
                    <Link
                        href={projectActivity.src}
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-lg group"
                    >
                        <Image
                            src={projectActivity.src}
                            alt={projectActivity.caption}
                            width={400}
                            height={300}
                            layout="responsive"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm font-medium">
                            {projectActivity.caption || `Activity ${index + 1}`}
                        </div>
                    </Link>
                ))}
            </LightGallery>
        </div>
    );
}
