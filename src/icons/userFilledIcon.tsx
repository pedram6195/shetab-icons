import { Icon, IconProps } from '@chakra-ui/react'

const UserFilledIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        d="M12 2C9.24746 2 7 4.24746 7 7C7 9.75254 9.24746 12 12 12C14.7525 12 17 9.75254 17 7C17 4.24746 14.7525 2 12 2ZM6.25 14C5.01625 14 4 15.0162 4 16.25V16.8496C4 18.32 4.93236 19.639 6.35449 20.5459C7.77663 21.4528 9.72242 22 12 22C14.2776 22 16.2234 21.4528 17.6455 20.5459C19.0676 19.639 20 18.32 20 16.8496V16.25C20 15.0162 18.9838 14 17.75 14H6.25Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default UserFilledIcon
