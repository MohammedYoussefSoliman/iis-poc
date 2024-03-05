import { useTheme } from "@emotion/react";
import { SVGProps } from "../assets.types";

function UsersIcon({ color, className, width }: SVGProps) {
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
        d="M7.50033 1.66675C5.31699 1.66675 3.54199 3.44175 3.54199 5.62508C3.54199 7.76675 5.21699 9.50008 7.40033 9.57508C7.46699 9.56675 7.53366 9.56675 7.58366 9.57508C7.60033 9.57508 7.60866 9.57508 7.62532 9.57508C7.63366 9.57508 7.63366 9.57508 7.64199 9.57508C9.77532 9.50008 11.4503 7.76675 11.4587 5.62508C11.4587 3.44175 9.68366 1.66675 7.50033 1.66675Z"
        fill={color || colors.dark[400]}
      />
      <path
        d="M11.7338 11.7917C9.40879 10.2417 5.61712 10.2417 3.27546 11.7917C2.21712 12.5 1.63379 13.4583 1.63379 14.4833C1.63379 15.5083 2.21712 16.4583 3.26712 17.1583C4.43379 17.9417 5.96712 18.3333 7.50046 18.3333C9.03379 18.3333 10.5671 17.9417 11.7338 17.1583C12.7838 16.45 13.3671 15.5 13.3671 14.4667C13.3588 13.4417 12.7838 12.4917 11.7338 11.7917Z"
        fill={color || colors.dark[400]}
      />
      <path
        d="M16.6588 6.11659C16.7921 7.73325 15.6421 9.14992 14.0505 9.34159C14.0421 9.34159 14.0421 9.34159 14.0338 9.34159H14.0088C13.9588 9.34159 13.9088 9.34159 13.8671 9.35825C13.0588 9.39992 12.3171 9.14159 11.7588 8.66659C12.6171 7.89992 13.1088 6.74992 13.0088 5.49992C12.9505 4.82492 12.7171 4.20825 12.3671 3.68325C12.6838 3.52492 13.0505 3.42492 13.4255 3.39159C15.0588 3.24992 16.5171 4.46659 16.6588 6.11659Z"
        fill={color || colors.dark[400]}
      />
      <path
        d="M18.3249 13.8249C18.2582 14.6333 17.7415 15.3333 16.8749 15.8083C16.0415 16.2666 14.9915 16.4833 13.9499 16.4583C14.5499 15.9166 14.8999 15.2416 14.9665 14.5249C15.0499 13.4916 14.5582 12.4999 13.5749 11.7083C13.0165 11.2666 12.3665 10.9166 11.6582 10.6583C13.4999 10.1249 15.8165 10.4833 17.2415 11.6333C18.0082 12.2499 18.3999 13.0249 18.3249 13.8249Z"
        fill={color || colors.dark[400]}
      />
    </svg>
  );
}

export default UsersIcon;