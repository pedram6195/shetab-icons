import { Icon, IconProps } from '@chakra-ui/react'

const CheckIcon = (props: IconProps) => {
  return (
    <Icon {...props} viewBox="0 0 24 24">
      <path
        d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM16.2805 10.2805L11.2805 15.2805C11.134 15.427 10.942 15.5 10.75 15.5C10.558 15.5 10.366 15.427 10.2195 15.2805L7.7195 12.7805C7.4265 12.4875 7.4265 12.013 7.7195 11.72C8.0125 11.427 8.487 11.427 8.78 11.72L10.7495 13.6895L15.219 9.22C15.512 8.927 15.9865 8.927 16.2795 9.22C16.5725 9.513 16.573 9.9875 16.2805 10.2805Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default CheckIcon
