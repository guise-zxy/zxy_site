import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

type MetadataInput = {
  title: string;
  description: string;
  pathname?: string;
};

const siteName = "zxy | AI-HR 方向个人能力展示站";

export function createMetadata({
  title,
  description,
  pathname = "/",
}: MetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const url = new URL(pathname, siteUrl).toString();

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "zh_CN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
