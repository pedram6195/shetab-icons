import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const EditIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox="0 0 25 24" ref={ref} {...props}>
        <path
          d="M19.9 9.26797L21.12 8.04797C22.387 6.78097 22.387 4.71897 21.12 3.45147C20.5065 2.83846 19.691 2.50146 18.8215 2.50146C17.952 2.50146 17.136 2.83896 16.523 3.45196L15.3035 4.67147L19.9 9.26797ZM14.243 5.73197L5.20852 14.7665C5.01602 14.959 4.86952 15.1965 4.78452 15.454L3.10952 20.5145C3.02002 20.7835 3.09052 21.08 3.29102 21.2805C3.43452 21.4235 3.62552 21.5 3.82152 21.5C3.90052 21.5 3.98002 21.4875 4.05752 21.462L9.11652 19.7865C9.37502 19.7015 9.61302 19.555 9.80552 19.362L18.8395 10.328L14.243 5.73197Z"
          fill="currentColor"
        />
      </Icon>
    )
  })
)

export default EditIcon
