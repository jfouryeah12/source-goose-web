import Head from "next/head";

type Props = {
  suffix?: string;
  children: string;
};

export default function Title({ suffix, children }: Props) {
  const title = children + (suffix ? ` - ${suffix}` : "");

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
    </Head>
  );
}
