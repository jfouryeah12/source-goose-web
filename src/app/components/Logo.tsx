interface Props extends React.HTMLAttributes<any> {
  className?: string;
}

export default function Logo({ className, ...props }: Props) {
  return (
    <img
      src={"../sg-logo.svg"}
      alt="Natural Logo"
      className={className}
      {...props}
    />
  );
}
