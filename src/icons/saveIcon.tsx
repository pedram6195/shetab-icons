import { Icon, IconProps } from '@chakra-ui/react'

const SaveIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 16 16" {...props}>
      <path
        d="M3.83333 2C2.82233 2 2 2.82233 2 3.83333V12.1667C2 13.1777 2.82233 14 3.83333 14H4V9.16667C4 8.52333 4.52333 8 5.16667 8H10.8333C11.4767 8 12 8.52333 12 9.16667V14H12.1667C13.1777 14 14 13.1777 14 12.1667V5.16667C14 5.024 13.9387 4.88797 13.832 4.79297L10.832 2.1263C10.7834 2.08297 10.727 2.05193 10.6667 2.0306V4.83333C10.6667 5.47667 10.1433 6 9.5 6H5.5C4.85667 6 4.33333 5.47667 4.33333 4.83333V2H3.83333ZM5.33333 2V4.83333C5.33333 4.92533 5.408 5 5.5 5H9.5C9.592 5 9.66667 4.92533 9.66667 4.83333V2H5.33333ZM5.16667 9C5.07467 9 5 9.07467 5 9.16667V14H11V9.16667C11 9.07467 10.9253 9 10.8333 9H5.16667Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default SaveIcon
