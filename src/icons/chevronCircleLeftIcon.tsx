import React from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

const ChevronLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    return (
      <Icon {...props} ref={ref} viewBox="0 0 32 32">
        <path
          d="M29.3334 16C29.3334 8.648 23.352 2.66667 16 2.66667C8.64804 2.66667 2.66671 8.648 2.66671 16C2.66671 23.352 8.64804 29.3333 16 29.3333C23.352 29.3333 29.3334 23.352 29.3334 16ZM12.626 15.626L17.9594 10.2927C18.1547 10.0973 18.4107 10 18.6667 10C18.9227 10 19.1787 10.0973 19.374 10.2927C19.7647 10.6833 19.7647 11.316 19.374 11.7067L14.748 16.3327L19.374 20.9587C19.7647 21.3493 19.7647 21.982 19.374 22.3727C18.9834 22.7633 18.3507 22.7633 17.96 22.3727L12.6267 17.0393C12.236 16.65 12.236 16.0167 12.626 15.626Z"
          fill="currentColor"
        />
      </Icon>
    )
  }
)

export default ChevronLeftIcon
