import React from 'react'
import { Icon, IconProps } from '@chakra-ui/react'

const ArchiveIcon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  return (
    <Icon viewBox="0 0 20 20" ref={ref} {...props}>
      <path
        d="M0 2.5C0 2.16848 0.131696 1.85054 0.366117 1.61612C0.600537 1.3817 0.918479 1.25 1.25 1.25H18.75C19.0815 1.25 19.3995 1.3817 19.6339 1.61612C19.8683 1.85054 20 2.16848 20 2.5V5C20 5.33152 19.8683 5.64946 19.6339 5.88388C19.3995 6.1183 19.0815 6.25 18.75 6.25V15.625C18.75 16.4538 18.4208 17.2487 17.8347 17.8347C17.2487 18.4208 16.4538 18.75 15.625 18.75H4.375C3.5462 18.75 2.75134 18.4208 2.16529 17.8347C1.57924 17.2487 1.25 16.4538 1.25 15.625V6.25C0.918479 6.25 0.600537 6.1183 0.366117 5.88388C0.131696 5.64946 0 5.33152 0 5V2.5ZM2.5 6.25V15.625C2.5 16.1223 2.69754 16.5992 3.04917 16.9508C3.40081 17.3025 3.87772 17.5 4.375 17.5H15.625C16.1223 17.5 16.5992 17.3025 16.9508 16.9508C17.3025 16.5992 17.5 16.1223 17.5 15.625V6.25H2.5ZM18.75 2.5H1.25V5H18.75V2.5ZM6.25 9.375C6.25 9.20924 6.31585 9.05027 6.43306 8.93306C6.55027 8.81585 6.70924 8.75 6.875 8.75H13.125C13.2908 8.75 13.4497 8.81585 13.5669 8.93306C13.6842 9.05027 13.75 9.20924 13.75 9.375C13.75 9.54076 13.6842 9.69973 13.5669 9.81694C13.4497 9.93415 13.2908 10 13.125 10H6.875C6.70924 10 6.55027 9.93415 6.43306 9.81694C6.31585 9.69973 6.25 9.54076 6.25 9.375Z"
        fill="currentColor"
      />
    </Icon>
  )
})

export default ArchiveIcon