import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const FilterIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox="0 0 21 20" ref={ref} {...props}>
        <path
          d="M9.25602 17.5C9.15811 17.5 9.06019 17.4771 8.96977 17.4308C8.76186 17.3233 8.63102 17.1092 8.63102 16.875V10.58L4.40769 7.285C3.64852 6.68708 3.21436 5.79208 3.21436 4.82875V3.54167C3.21436 2.96708 3.68186 2.5 4.25602 2.5H17.1727C17.7469 2.5 18.2144 2.96708 18.2144 3.54167V4.82875C18.2144 5.7925 17.7802 6.68708 17.0235 7.28333L12.7977 10.58V14.7917C12.7977 14.9933 12.7002 15.1829 12.536 15.3004L9.61936 17.3837C9.51144 17.4608 9.38394 17.5 9.25602 17.5Z"
          fill="currentColor"
        />
      </Icon>
    )
  })
)

export default FilterIcon
