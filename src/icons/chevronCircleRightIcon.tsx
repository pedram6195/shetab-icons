import React from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

const ChevronRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    return (
      <Icon {...props} ref={ref} viewBox="0 0 32 32">
        <path
          d="M2.66669 16C2.66669 23.352 8.64802 29.3333 16 29.3333C23.352 29.3333 29.3334 23.352 29.3334 16C29.3334 8.648 23.352 2.66666 16 2.66666C8.64802 2.66666 2.66669 8.648 2.66669 16ZM19.374 16.374L14.0407 21.7073C13.8454 21.9027 13.5894 22 13.3334 22C13.0774 22 12.8214 21.9027 12.626 21.7073C12.2354 21.3167 12.2354 20.684 12.626 20.2933L17.252 15.6673L12.626 11.0413C12.2354 10.6507 12.2354 10.018 12.626 9.62733C13.0167 9.23666 13.6494 9.23666 14.04 9.62733L19.3734 14.9607C19.764 15.35 19.764 15.9833 19.374 16.374Z"
          fill="currentColor"
        />
      </Icon>
    )
  }
)

export default ChevronRightIcon
