"use client";

import Image from "next/image";
import CertifiedCard from "./ui/CertifiedCard";
import CertifiedForm from "./ui/CertifiedForm";
import { url } from "inspector";
import Card2 from "./ui/Card2";
import Card3 from "./ui/Card3";

const CertifiedPlanner = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Become a Certified Career Planner */}
      <div className="bg-[#004EC1] p-[40px]">
        <div className=" bg-white rounded-3xl md:px-[40px] pt-[20px] md:pt-[40px] grid grid-cols-1 xl:grid-cols-3 overflow-hidden">
          <div className="items-center md:items-start p-[20px] flex flex-col gap-y-4">
            <div className="text-[#004EC1] text-4xl text-center md:text-left">
              Become a <br />
              <span className="font-semibold">Certified Career Planner</span>
            </div>
            <div className="text-center md:text-left text-2xl">
              Help millions of students to <br /> achieve their carrer goals
            </div>

            <CertifiedCard>
              Earn up to <br />{" "}
              <span className="text-red-600 font-semibold text-xl">
                32 Lakh*
              </span>
              <span className="font-semibold">per year</span>
            </CertifiedCard>
            <CertifiedCard>
              Earn up to <br />{" "}
              <span className="text-red-600 font-semibold text-xl">
                32 Lakh*
              </span>
              <span className="font-semibold">per year</span>
            </CertifiedCard>
            <CertifiedCard>
              Earn up to <br />{" "}
              <span className="text-red-600 font-semibold text-xl">
                32 Lakh*
              </span>
              <span className="font-semibold">per year</span>
            </CertifiedCard>
            <div className="text-md mb-4">
              Recognised by: <br />{" "}
              <span className="text-xl font-semibold text-red-600">
                #startupindia
              </span>
            </div>
          </div>
          {/* <div className="relative h-[309.974px] w-[320px]  md:h-[502.625px] md:w-[536.372px] sm:mt-4 sm:mb-8">
            <Image src={"/images/people.svg"} alt="image" fill className="object-cover mb-auto scale-100 md:scale-125"/>
          </div> */}
          {/* <div className="relative h-[309.974px] w-[320px] md:h-full md:w-full sm:mt-4 sm:mb-8 z-10">
            <Image src={"/images/people.svg"} alt="image" fill className="object-cover xl:object-contain"/>
          </div> */}
          <div className="relative h-[309.974px] w-[320px] md:h-full md:w-full sm:mt-4 sm:mb-8 z-10">
            <Image
              src={"/images/people.svg"}
              alt="image"
              fill
              className="scale-100 md:scale-110 xl:scale-125 md:hidden 2xl:block"
            />
          </div>
          <CertifiedForm />
        </div>
      </div>

      {/* why be certified planner */}
      <div className="mt-20">
        <div className="text-3xl text-center">
          Why be a{" "}
          <span className="font-semibold">certified career planner?</span>
        </div>
        <div className="bg-[#034DB3] mt-12 bg-bg2 bg-no-repeat bg-right w-[80vw] mx-auto rounded-3xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
            <Card2
              title="Strong Earning Potential"
              description="Earn up to ₹32.4 Lakh per annum as a Career Counsellor."
            />
            <Card2
              title="Strong Earning Potential"
              description="Earn up to ₹32.4 Lakh per annum as a Career Counsellor."
            />
            <Card2
              title="Strong Earning Potential"
              description="Earn up to ₹32.4 Lakh per annum as a Career Counsellor."
            />
            <Card2
              title="Strong Earning Potential"
              description="Earn up to ₹32.4 Lakh per annum as a Career Counsellor."
            />
            <Card2
              title="Strong Earning Potential"
              description="Earn up to ₹32.4 Lakh per annum as a Career Counsellor."
            />
            <Card2
              title="Strong Earning Potential"
              description="Earn up to ₹32.4 Lakh per annum as a Career Counsellor."
            />
          </div>
          <div className="relative h-full w-full">
            {/* <Image
              src={"/images/employee.svg"}
              alt="image"
              fill
              className="object-cover xl:object-contain"
            /> */}
             <Image
              src={"/images/employee.svg"}
              alt="image"
              fill
              className="absolute bottom-0 object-cover"
            />
          </div>
        </div>
      </div>

      {/* You can be a Certified Career Planner, IF YOU ARE A */}
      <div className="mt-20 bg-slate-100 -z-20 py-12">
        <div className="text-3xl text-center font-semibold">
          You can be a Certified Career Planner, IF YOU ARE A
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-14 m-20">
            <Card3>
                <div className="text-3xl font-semibold">
                <span className="text-[#0047AB]">Education Business Owner</span> wanting to expand your offerings
                </div>
            </Card3>
            <Card3>
                <div className="text-3xl font-semibold">
                <span className="text-[#0047AB]">Education Business Owner</span> wanting to expand your offerings
                </div>
            </Card3>
            <Card3>
                <div className="text-3xl font-semibold">
                <span className="text-[#0047AB]">Education Business Owner</span> wanting to expand your offerings
                </div>
            </Card3>
            <Card3>
                <div className="text-3xl font-semibold">
                <span className="text-[#0047AB]">Education Business Owner</span> wanting to expand your offerings
                </div>
            </Card3>
        </div>
      </div>
    </div>
  );
};
export default CertifiedPlanner;