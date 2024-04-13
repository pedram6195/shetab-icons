import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const DislikeIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox='0 0 20 20' ref={ref} {...props}>
        <path
          d='M15.8337 10.3753L15.1253 5.29199C14.9587 3.91699 13.792 2.91699 12.417 2.91699H8.54199C6.12533 2.91699 4.16699 4.87533 4.16699 7.29199V10.042C4.16699 11.0837 4.66699 12.1253 5.54199 12.9587C6.62533 14.0003 9.25033 17.792 9.25033 17.8337C9.29199 17.8753 9.33366 17.917 9.41699 17.917H9.45866C9.91699 17.8337 10.8337 17.3753 10.8337 16.167C10.8337 15.917 10.792 15.5837 10.667 15.1253C10.5003 14.292 10.292 13.6253 9.95866 12.8753C9.91699 12.792 9.91699 12.7087 9.95866 12.6253C10.0003 12.5837 10.042 12.542 10.1253 12.542H13.9587C14.5003 12.542 15.0003 12.292 15.3753 11.917C15.7503 11.4587 15.917 10.917 15.8337 10.3753Z'
          fill='currentColor'
        />
      </Icon>
    )
  })
)

export default DislikeIcon
