import { Icon, IconProps } from '@chakra-ui/react'

const InfoIcon = (props: IconProps) => {
  return (
    <Icon {...props} viewBox="0 0 24 24">
      <path
        d="M22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12ZM12 15C11.4475 15 11 15.4475 11 16C11 16.5525 11.4475 17 12 17C12.5525 17 13 16.5525 13 16C13 15.4475 12.5525 15 12 15ZM12.75 12.75V7.75C12.75 7.336 12.4145 7 12 7C11.5855 7 11.25 7.336 11.25 7.75V12.75C11.25 13.164 11.5855 13.5 12 13.5C12.4145 13.5 12.75 13.164 12.75 12.75Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default InfoIcon
