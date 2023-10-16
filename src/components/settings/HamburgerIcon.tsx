interface HamburgerIconProps {
  className?: string;
}

const HamburgerIcon = ({ className }: HamburgerIconProps) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 512 512'
    >
      <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
    </svg>
  );
};

export default HamburgerIcon;
