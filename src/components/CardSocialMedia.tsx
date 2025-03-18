import { SocialMedia } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

interface CardSocialMediaProps {
  socialMedia: SocialMedia;
}

export const CardSocialMedia = ({ socialMedia }: CardSocialMediaProps) => {
  return (
    <Link href={socialMedia.url}>
      <Image
        src={socialMedia.icon}
        alt={socialMedia.label}
        width={28}
        height={28}
      />
    </Link>
  );
};
