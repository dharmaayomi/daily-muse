import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-[#004DE8] text-white py-16">
      <div className="container mx-auto p-6">
        <div className="flex flex-col justify-center items-center text-center space-y-6 mx-5 md:mx-28">
          <h3 className="font-extrabold text-2xl md:text-4xl leading-tight animate-fadeIn">
            Join the Daily Muse Community!
          </h3>
          <p className="text-lg md:text-xl max-w-2xl animate-fadeIn opacity-80">
            Stay inspired and informed with fresh content delivered straight to
            you. Subscribe now and never miss an update! Follow us on social
            media and be part of a growing community that shares ideas,
            insights, and inspiration every day!
          </p>

          {/* Tombol Subscribe */}
          <Button className="bg-white text-[#004DE8] font-semibold px-6 py-3 rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
            Subscribe Now
          </Button>

          {/* Ikon Media Sosial */}
          <div className="flex gap-6 mt-4">
            <Link href="#" className="hover:scale-110 transition-transform">
              <Facebook size={30} />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              <Instagram size={30} />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              <Twitter size={30} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
