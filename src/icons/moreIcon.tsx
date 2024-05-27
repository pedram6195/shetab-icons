import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const MoreIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox='0 0 20 20' ref={ref} {...props}>
        <path
          d='M3.33248 7.29102C1.84388 7.29102 0.624146 8.51119 0.624146 9.99935C0.624146 11.4877 1.84417 12.7077 3.33248 12.7077C4.82079 12.7077 6.04081 11.4877 6.04081 9.99935C6.04081 8.51104 4.82079 7.29102 3.33248 7.29102ZM9.99915 7.29102C8.51054 7.29102 7.29081 8.51119 7.29081 9.99935C7.29081 11.4877 8.51084 12.7077 9.99915 12.7077C11.4875 12.7077 12.7075 11.4877 12.7075 9.99935C12.7075 8.51104 11.4875 7.29102 9.99915 7.29102ZM16.6658 7.29102C15.1772 7.29102 13.9575 8.51119 13.9575 9.99935C13.9575 11.4877 15.1775 12.7077 16.6658 12.7077C18.1544 12.7077 19.3741 11.4875 19.3741 9.99935C19.3741 8.51104 18.1541 7.29102 16.6658 7.29102ZM3.33248 8.54102C4.145 8.54102 4.79081 9.18682 4.79081 9.99935C4.79081 10.8119 4.145 11.4577 3.33248 11.4577C2.51995 11.4577 1.87415 10.8119 1.87415 9.99935C1.87415 9.18667 2.51941 8.54102 3.33248 8.54102ZM9.99915 8.54102C10.8117 8.54102 11.4575 9.18682 11.4575 9.99935C11.4575 10.8119 10.8117 11.4577 9.99915 11.4577C9.18662 11.4577 8.54081 10.8119 8.54081 9.99935C8.54081 9.18667 9.18608 8.54102 9.99915 8.54102ZM16.6658 8.54102C17.4783 8.54102 18.1241 9.18682 18.1241 9.99935C18.1241 10.812 17.4789 11.4577 16.6658 11.4577C15.8533 11.4577 15.2075 10.8119 15.2075 9.99935C15.2075 9.18667 15.8527 8.54102 16.6658 8.54102Z'
          fill='currentColor'
        />
      </Icon>
    )
  })
)

export default MoreIcon
