import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const UnavailableIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox='0 0 20 20' ref={ref} {...props}>
        <path
          d='M10.0003 1.66699C5.40782 1.66699 1.66699 5.40782 1.66699 10.0003C1.66699 14.5928 5.40782 18.3337 10.0003 18.3337C14.5928 18.3337 18.3337 14.5928 18.3337 10.0003C18.3337 5.40782 14.5928 1.66699 10.0003 1.66699ZM10.0003 3.33366C11.5439 3.33366 12.9447 3.87462 14.0726 4.74968L4.74968 14.0726C3.87462 12.9447 3.33366 11.5439 3.33366 10.0003C3.33366 6.30856 6.30855 3.33366 10.0003 3.33366ZM15.251 5.92806C16.126 7.05593 16.667 8.45678 16.667 10.0003C16.667 13.6921 13.6921 16.667 10.0003 16.667C8.45678 16.667 7.05593 16.126 5.92806 15.251L15.251 5.92806Z'
          fill='currentColor'
        />
      </Icon>
    )
  })
)

export default UnavailableIcon
