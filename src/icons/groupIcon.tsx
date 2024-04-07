import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const GroupIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox="0 0 17 16" ref={ref} {...props}>
        <path
          d="M8.49984 0.5C7.8368 0.5 7.20091 0.763392 6.73207 1.23223C6.26323 1.70107 5.99984 2.33696 5.99984 3C5.99984 3.66304 6.26323 4.29893 6.73207 4.76777C7.20091 5.23661 7.8368 5.5 8.49984 5.5C9.16288 5.5 9.79876 5.23661 10.2676 4.76777C10.7364 4.29893 10.9998 3.66304 10.9998 3C10.9998 2.33696 10.7364 1.70107 10.2676 1.23223C9.79876 0.763392 9.16288 0.5 8.49984 0.5ZM3.08317 1.33333C2.53064 1.33333 2.00073 1.55283 1.61003 1.94353C1.21933 2.33423 0.999837 2.86413 0.999837 3.41667C0.999837 3.9692 1.21933 4.4991 1.61003 4.88981C2.00073 5.28051 2.53064 5.5 3.08317 5.5C3.6357 5.5 4.16561 5.28051 4.55631 4.88981C4.94701 4.4991 5.1665 3.9692 5.1665 3.41667C5.1665 2.86413 4.94701 2.33423 4.55631 1.94353C4.16561 1.55283 3.6357 1.33333 3.08317 1.33333ZM13.9165 1.33333C13.364 1.33333 12.8341 1.55283 12.4434 1.94353C12.0527 2.33423 11.8332 2.86413 11.8332 3.41667C11.8332 3.9692 12.0527 4.4991 12.4434 4.88981C12.8341 5.28051 13.364 5.5 13.9165 5.5C14.469 5.5 14.9989 5.28051 15.3896 4.88981C15.7803 4.4991 15.9998 3.9692 15.9998 3.41667C15.9998 2.86413 15.7803 2.33423 15.3896 1.94353C14.9989 1.55283 14.469 1.33333 13.9165 1.33333ZM8.49984 15.5C6.43234 15.5 4.74984 13.8175 4.74984 11.75V7.79167C4.74984 6.9875 5.404 6.33333 6.20817 6.33333H10.7915C11.5957 6.33333 12.2498 6.9875 12.2498 7.79167V11.75C12.2498 13.8175 10.5673 15.5 8.49984 15.5ZM3.9165 11.75V7.79167C3.9165 7.23833 4.114 6.73 4.44192 6.33333H1.62484C0.820671 6.33333 0.166504 6.9875 0.166504 7.79167V10.5C0.166504 12.3375 1.66234 13.8333 3.49984 13.8333C3.79567 13.8333 4.08317 13.7958 4.35817 13.7208C4.35817 13.7208 4.36275 13.7188 4.3665 13.7175C4.08109 13.1204 3.9165 12.4546 3.9165 11.75ZM13.0832 11.75V7.79167C13.0832 7.23833 12.8857 6.73 12.5578 6.33333H15.3748C16.179 6.33333 16.8332 6.9875 16.8332 7.79167V10.5C16.8332 12.3375 15.3373 13.8333 13.4998 13.8333C13.204 13.8333 12.9165 13.7958 12.6415 13.7208C12.6415 13.7208 12.6369 13.7188 12.6332 13.7175C12.9186 13.1204 13.0832 12.4546 13.0832 11.75Z"
          fill="currentColor"
        />
      </Icon>
    )
  })
)

export default GroupIcon
