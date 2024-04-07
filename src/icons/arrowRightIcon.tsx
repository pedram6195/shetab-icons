import { Icon, IconProps } from '@chakra-ui/react'

const ArrowRightIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        d="M20.707 11.293L13.707 4.293C13.3165 3.9025 12.6835 3.9025 12.293 4.293C11.9025 4.6835 11.9025 5.3165 12.293 5.707L17.586 11H4C3.448 11 3 11.448 3 12C3 12.552 3.448 13 4 13H17.586L12.293 18.293C11.9025 18.6835 11.9025 19.3165 12.293 19.707C12.4885 19.9025 12.744 20 13 20C13.256 20 13.5115 19.9025 13.707 19.707L20.707 12.707C21.0975 12.3165 21.0975 11.6835 20.707 11.293Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default ArrowRightIcon
