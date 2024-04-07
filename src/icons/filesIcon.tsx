import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const FilesIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox="0 0 14 16" ref={ref} {...props}>
        <path
          d="M4.7085 0.083252C3.44475 0.083252 2.41683 1.11117 2.41683 2.37492V11.5416C2.41683 12.8053 3.44475 13.8333 4.7085 13.8333H11.3752C12.6389 13.8333 13.6668 12.8053 13.6668 11.5416V2.37492C13.6668 1.11117 12.6389 0.083252 11.3752 0.083252H4.7085ZM1.5835 2.16659L1.07568 2.50513C0.611934 2.81429 0.333496 3.33476 0.333496 3.89185V11.9583C0.333496 14.1445 2.10558 15.9166 4.29183 15.9166H9.85824C10.4157 15.9166 10.9362 15.6381 11.245 15.1744L11.5835 14.6666H4.29183C2.796 14.6666 1.5835 13.4541 1.5835 11.9583V2.16659Z"
          fill="currentColor"
        />
      </Icon>
    )
  })
)

export default FilesIcon
