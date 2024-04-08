import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const ChevronLeftIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox="0 0 20 20" ref={ref} {...props}>
        <path
          d="M13.33 2.4917C13.4958 2.4919 13.6576 2.5415 13.795 2.63416C13.9324 2.72682 14.039 2.85832 14.1013 3.01188C14.1636 3.16544 14.1787 3.33408 14.1447 3.49626C14.1106 3.65844 14.029 3.80679 13.9103 3.92236L7.83281 9.99984L13.9103 16.0773C13.9903 16.1541 14.0541 16.2461 14.0981 16.3478C14.1421 16.4496 14.1653 16.5591 14.1665 16.67C14.1676 16.7809 14.1466 16.8909 14.1047 16.9935C14.0628 17.0962 14.0008 17.1894 13.9224 17.2678C13.844 17.3462 13.7507 17.4082 13.6481 17.4501C13.5455 17.492 13.4355 17.513 13.3246 17.5119C13.2137 17.5107 13.1042 17.4875 13.0024 17.4435C12.9007 17.3995 12.8087 17.3357 12.7319 17.2557L6.06523 10.589C5.90901 10.4327 5.82125 10.2208 5.82125 9.99984C5.82125 9.77886 5.90901 9.56693 6.06523 9.41064L12.7319 2.74398C12.8097 2.66405 12.9027 2.60054 13.0054 2.55721C13.1081 2.51387 13.2185 2.4916 13.33 2.4917Z"
          fill="currentColor"
        />
      </Icon>
    )
  })
)

export default ChevronLeftIcon