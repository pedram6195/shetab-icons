import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const PhoneIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox="0 0 13 18" ref={ref} {...props}>
        <path
          d="M5.88184 1.76023L6.59809 3.44981C6.91018 4.18606 6.73726 5.0519 6.16976 5.59023L4.83143 6.86023C4.68059 7.00356 4.60226 7.21148 4.63601 7.41648C4.76518 8.20023 5.05143 8.97315 5.49476 9.73565C5.93726 10.4965 6.47601 11.144 7.11143 11.6777C7.27976 11.819 7.51351 11.8556 7.72184 11.7861L9.28309 11.2652C10.0018 11.0256 10.7843 11.3011 11.2252 11.9486L12.2523 13.4573C12.7648 14.2102 12.6727 15.2486 12.0368 15.8869L11.3552 16.5711C10.6768 17.2519 9.70809 17.499 8.81184 17.2194C6.69601 16.5594 4.75101 14.6002 2.97601 11.3415C1.19851 8.07815 0.571426 5.30898 1.09434 3.03481C1.31434 2.07773 1.99559 1.31565 2.88518 1.03148L3.78226 0.744815C4.62393 0.476898 5.52184 0.911065 5.88184 1.76023Z"
          fill="currentColor"
        />
      </Icon>
    )
  })
)

export default PhoneIcon