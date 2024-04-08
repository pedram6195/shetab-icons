import { Icon, IconProps } from '@chakra-ui/react'

const LeftArrowIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 20 20" {...props}>
      <path
        d="M18.3333 9.99967C18.3333 5.40467 14.595 1.66634 9.99998 1.66634C5.40498 1.66634 1.66665 5.40467 1.66665 9.99967C1.66665 14.5947 5.40498 18.333 9.99998 18.333C14.595 18.333 18.3333 14.5947 18.3333 9.99967ZM7.89123 9.76592L11.2246 6.43259C11.3466 6.31051 11.5066 6.24967 11.6666 6.24967C11.8266 6.24967 11.9866 6.31051 12.1087 6.43259C12.3529 6.67676 12.3529 7.07217 12.1087 7.31634L9.21748 10.2076L12.1087 13.0988C12.3529 13.343 12.3529 13.7384 12.1087 13.9826C11.8646 14.2268 11.4691 14.2268 11.225 13.9826L7.89165 10.6493C7.64748 10.4059 7.64748 10.0101 7.89123 9.76592Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default LeftArrowIcon