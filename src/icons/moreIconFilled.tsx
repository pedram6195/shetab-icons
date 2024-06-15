import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const MoreIconFilled = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox='0 0 16 16' ref={ref} {...props}>
        <path
          d='M2.66602 6.16602C1.65906 6.16602 0.832031 6.99305 0.832031 8C0.832031 9.00695 1.65906 9.83398 2.66602 9.83398C3.67276 9.83398 4.5 9.00695 4.5 8C4.5 6.99305 3.67276 6.16602 2.66602 6.16602ZM13.3327 6.16602C12.3257 6.16602 11.4987 6.99305 11.4987 8C11.4987 9.00695 12.3257 9.83398 13.3327 9.83398C14.3394 9.83398 15.1667 9.00695 15.1667 8C15.1667 6.99305 14.3394 6.16602 13.3327 6.16602ZM7.99935 6.16667C6.99255 6.16667 6.16602 6.99356 6.16602 8C6.16602 9.00659 6.99276 9.83333 7.99935 9.83333C9.00594 9.83333 9.83268 9.00659 9.83268 8C9.83268 6.99341 9.00594 6.16667 7.99935 6.16667Z'
          fill='currentColor'
        />
      </Icon>
    )
  })
)

export default MoreIconFilled