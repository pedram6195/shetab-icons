import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const CheckRIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox="0 0 25 24" ref={ref} {...props}>
        <path
          d="M12.1992 2C6.68522 2 2.19922 6.486 2.19922 12C2.19922 17.514 6.68522 22 12.1992 22C17.7132 22 22.1992 17.514 22.1992 12C22.1992 6.486 17.7132 2 12.1992 2ZM16.4797 10.2805L11.4797 15.2805C11.3332 15.427 11.1412 15.5 10.9492 15.5C10.7572 15.5 10.5652 15.427 10.4187 15.2805L7.91872 12.7805C7.62572 12.4875 7.62572 12.013 7.91872 11.72C8.21172 11.427 8.68622 11.427 8.97922 11.72L10.9487 13.6895L15.4182 9.22C15.7112 8.927 16.1857 8.927 16.4787 9.22C16.7717 9.513 16.7722 9.9875 16.4797 10.2805Z"
          fill="currentColor"
        />
      </Icon>
    )
  })
)

export default CheckRIcon
