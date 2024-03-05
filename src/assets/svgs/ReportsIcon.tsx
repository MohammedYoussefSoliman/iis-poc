import { useTheme } from "@emotion/react";
import { SVGProps } from "../assets.types";

function ReportsIcon({ color, className, width }: SVGProps) {
  const { colors } = useTheme();
  return (
    <svg
      width={width || 20}
      height={width || 20}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.3337 18.3333H1.66699C1.32533 18.3333 1.04199 18.0499 1.04199 17.7083C1.04199 17.3666 1.32533 17.0833 1.66699 17.0833H18.3337C18.6753 17.0833 18.9587 17.3666 18.9587 17.7083C18.9587 18.0499 18.6753 18.3333 18.3337 18.3333Z"
        fill={color || colors.dark[400]}
      />
      <path
        d="M8.125 3.33341V18.3334H11.875V3.33341C11.875 2.41675 11.5 1.66675 10.375 1.66675H9.625C8.5 1.66675 8.125 2.41675 8.125 3.33341Z"
        fill={color || colors.dark[400]}
      />
      <path
        d="M2.5 8.33341V18.3334H5.83333V8.33341C5.83333 7.41675 5.5 6.66675 4.5 6.66675H3.83333C2.83333 6.66675 2.5 7.41675 2.5 8.33341Z"
        fill={color || colors.dark[400]}
      />
      <path
        d="M14.167 12.4999V18.3333H17.5003V12.4999C17.5003 11.5833 17.167 10.8333 16.167 10.8333H15.5003C14.5003 10.8333 14.167 11.5833 14.167 12.4999Z"
        fill={color || colors.dark[400]}
      />
    </svg>
  );
}

export default ReportsIcon;
