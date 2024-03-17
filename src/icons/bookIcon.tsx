import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const BookIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox="0 0 24 24" fill="currentcolor" ref={ref} {...props}>
        <path d="M19.25 19.5C19.664 19.5 20 19.1645 20 18.75V4.25C20 3.0095 18.9905 2 17.75 2H6.25C5.0095 2 4 3.0095 4 4.25V19.75C4 20.9905 5.0095 22 6.25 22H19.25C19.664 22 20 21.6645 20 21.25C20 20.8355 19.664 20.5 19.25 20.5H6.25C5.8365 20.5 5.5 20.1635 5.5 19.75V19.5H19.25ZM8.75 7H15.25C15.664 7 16 7.3355 16 7.75C16 8.1645 15.664 8.5 15.25 8.5H8.75C8.336 8.5 8 8.1645 8 7.75C8 7.3355 8.336 7 8.75 7Z" />
      </Icon>
    )
  })
)

export default BookIcon
