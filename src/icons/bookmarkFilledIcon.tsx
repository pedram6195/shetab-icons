import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const BookmarkFilledIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox='0 0 20 20' ref={ref} {...props}>
        <path
          d='M15.2087 17.9167C15.0799 17.9167 14.952 17.8771 14.8437 17.7988L10.0003 14.3117L5.15699 17.7988C4.96616 17.9358 4.71533 17.955 4.50658 17.8479C4.29824 17.7413 4.16699 17.5263 4.16699 17.2917V4.79168C4.16699 3.29834 5.38199 2.08334 6.87533 2.08334H13.1253C14.6187 2.08334 15.8337 3.29834 15.8337 4.79168V17.2917C15.8337 17.5263 15.7024 17.7413 15.4937 17.8479C15.4037 17.8938 15.3062 17.9167 15.2087 17.9167Z'
          fill='currentColor'
        />
      </Icon>
    )
  })
)

export default BookmarkFilledIcon
