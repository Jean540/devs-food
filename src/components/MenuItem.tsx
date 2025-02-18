"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { usePathname } from "next/navigation";
import { UserContext } from "@/contexts/UserContext";
import { TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST } from "next/dist/shared/lib/constants";

export const MenuItem = ({
  icon,
  link,
  title,
}: {
  icon: string;
  link: string;
  title: string;
}) => {
  const token = useContext(UserContext)?.user.token;
  const router = useRouter();
  const pathName = usePathname();
  let isActive = pathName == link;

  return (
    <div
      data-tooltip-id="tip-right"
      data-tooltip-content={title}
      data-for="tip-right"
      onClick={() => router.push(token ? link : "/")}
      className={`size-[60px]  ${
        isActive && "bg-[#0B4D0B]"
      } rounded-[10px] flex justify-center items-center`}
    >
      <Image src={icon} title={title} width={34} height={34} />
    </div>
  );
};
