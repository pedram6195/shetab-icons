import { Icon, IconProps } from '@chakra-ui/react'

const TimerIcon = (props: IconProps) => {
  return (
    <Icon {...props} viewBox="0 0 24 24">
      <path
        d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM12.2805 13.2805C12.134 13.427 11.942 13.5 11.75 13.5C11.558 13.5 11.366 13.427 11.2195 13.2805L8.7195 10.7805C8.579 10.6395 8.5 10.449 8.5 10.25V4.75C8.5 4.3355 8.8355 4 9.25 4C9.6645 4 10 4.3355 10 4.75V9.9395L12.2805 12.22C12.573 12.5125 12.573 12.9875 12.2805 13.2805Z"
        fill="currentColor"
      />
    </Icon>
  )
}
export default TimerIcon
