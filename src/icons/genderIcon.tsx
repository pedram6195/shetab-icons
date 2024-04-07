import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const GenderIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox="0 0 18 18" ref={ref} {...props}>
        <path
          d="M8.99984 0.666504C4.40486 0.666504 0.666504 4.40487 0.666504 8.99984C0.666504 13.5948 4.40486 17.3332 8.99984 17.3332C13.5948 17.3332 17.3332 13.5948 17.3332 8.99984C17.3332 4.40487 13.5948 0.666504 8.99984 0.666504ZM8.58317 1.93766V16.062C4.85983 15.8459 1.9165 12.7785 1.9165 8.99984C1.9165 5.22118 4.85983 2.15377 8.58317 1.93766Z"
          fill="currentColor"
        />
      </Icon>
    )
  })
)

export default GenderIcon
