import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const ChevronLeftCircleIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon ref={ref} {...props}>
        <path
          d="M22 12C22 6.486 17.514 2 12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12ZM9.4695 11.7195L13.4695 7.7195C13.616 7.573 13.808 7.5 14 7.5C14.192 7.5 14.384 7.573 14.5305 7.7195C14.8235 8.0125 14.8235 8.487 14.5305 8.78L11.061 12.2495L14.5305 15.719C14.8235 16.012 14.8235 16.4865 14.5305 16.7795C14.2375 17.0725 13.763 17.0725 13.47 16.7795L9.47 12.7795C9.177 12.4875 9.177 12.0125 9.4695 11.7195Z"
          fill="currentColor"
        />
      </Icon>
    )
  })
)

export default ChevronLeftCircleIcon
