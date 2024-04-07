import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const DropdownIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox="0 0 16 16" ref={ref} {...props}>
        <path
          d="M12.8333 4.3335H3.1666C2.9766 4.3335 2.8026 4.44116 2.71826 4.61183C2.63393 4.78216 2.65393 4.98583 2.76893 5.13683L7.60226 11.4702C7.69726 11.5942 7.84393 11.6668 7.99993 11.6668C8.15593 11.6668 8.3026 11.5942 8.39726 11.4702L13.2306 5.13683C13.3459 4.98583 13.3656 4.78216 13.2813 4.61183C13.1973 4.44116 13.0233 4.3335 12.8333 4.3335Z"
          fill="currentColor"
        />
      </Icon>
    )
  })
)

export default DropdownIcon
