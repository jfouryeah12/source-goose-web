import Image from "next/image";

interface Props extends React.HTMLAttributes<any> {
  className?: string;
}

export default function Logo({ className, ...props }: Props) {
  return (
    <Image
      src={"../sg-logo.svg"}
      alt="Natural Logo"
      width={100}
      height={100}
      className={className}
      {...props}
    />
  );
}
