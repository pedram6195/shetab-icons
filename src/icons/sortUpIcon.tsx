import { Icon, IconProps } from '@chakra-ui/react'
import { forwardRef, memo } from 'react'

const SortUpIcon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
      <Icon viewBox="0 0 20 20" ref={ref} {...props}>
        <path
          d="M13.7379 2.48861C13.5171 2.49185 13.3065 2.58264 13.1526 2.74103C12.9986 2.89943 12.9138 3.11247 12.9168 3.33334V11.3216L11.4227 9.82748C11.3459 9.7475 11.2539 9.68365 11.1521 9.63966C11.0504 9.59567 10.9408 9.57244 10.83 9.57131C10.7191 9.57018 10.6091 9.59118 10.5065 9.63309C10.4038 9.675 10.3106 9.73697 10.2322 9.81537C10.1538 9.89377 10.0918 9.98702 10.0499 10.0897C10.008 10.1923 9.98699 10.3023 9.98811 10.4132C9.98924 10.524 10.0125 10.6336 10.0565 10.7353C10.1005 10.8371 10.1643 10.9291 10.2443 11.0059L13.161 13.9225C13.3172 14.0788 13.5292 14.1665 13.7501 14.1665C13.9711 14.1665 14.1831 14.0788 14.3393 13.9225L17.256 11.0059C17.336 10.9291 17.3998 10.8371 17.4438 10.7353C17.4878 10.6336 17.5111 10.524 17.5122 10.4132C17.5133 10.3023 17.4923 10.1923 17.4504 10.0897C17.4085 9.98702 17.3465 9.89377 17.2681 9.81537C17.1897 9.73697 17.0965 9.675 16.9938 9.63309C16.8912 9.59118 16.7812 9.57018 16.6703 9.57131C16.5595 9.57244 16.4499 9.59567 16.3482 9.63966C16.2464 9.68365 16.1544 9.7475 16.0776 9.82748L14.5835 11.3216V3.33334C14.585 3.22192 14.5642 3.11132 14.5222 3.00809C14.4802 2.90487 14.418 2.8111 14.3392 2.73234C14.2603 2.65359 14.1665 2.59144 14.0632 2.54958C13.96 2.50771 13.8494 2.48698 13.7379 2.48861ZM3.33348 2.50001C3.22306 2.49845 3.11342 2.51885 3.01095 2.56003C2.90847 2.6012 2.81521 2.66234 2.73656 2.73987C2.65792 2.81741 2.59548 2.90981 2.55285 3.01169C2.51023 3.11357 2.48828 3.2229 2.48828 3.33334C2.48828 3.44378 2.51023 3.55312 2.55285 3.655C2.59548 3.75688 2.65792 3.84927 2.73656 3.92681C2.81521 4.00435 2.90847 4.06548 3.01095 4.10666C3.11342 4.14784 3.22306 4.16824 3.33348 4.16667H4.58348C4.69391 4.16824 4.80355 4.14784 4.90602 4.10666C5.00849 4.06548 5.10176 4.00435 5.1804 3.92681C5.25904 3.84927 5.32149 3.75688 5.36411 3.655C5.40674 3.55312 5.42869 3.44378 5.42869 3.33334C5.42869 3.2229 5.40674 3.11357 5.36411 3.01169C5.32149 2.90981 5.25904 2.81741 5.1804 2.73987C5.10176 2.66234 5.00849 2.6012 4.90602 2.56003C4.80355 2.51885 4.69391 2.49845 4.58348 2.50001H3.33348ZM3.33348 5.83334C3.22306 5.83178 3.11342 5.85218 3.01095 5.89336C2.90847 5.93454 2.81521 5.99567 2.73656 6.07321C2.65792 6.15075 2.59548 6.24314 2.55285 6.34502C2.51023 6.4469 2.48828 6.55624 2.48828 6.66668C2.48828 6.77711 2.51023 6.88645 2.55285 6.98833C2.59548 7.09021 2.65792 7.1826 2.73656 7.26014C2.81521 7.33768 2.90847 7.39881 3.01095 7.43999C3.11342 7.48117 3.22306 7.50157 3.33348 7.50001H6.25015C6.36058 7.50157 6.47021 7.48117 6.57269 7.43999C6.67516 7.39881 6.76843 7.33768 6.84707 7.26014C6.92571 7.1826 6.98816 7.09021 7.03078 6.98833C7.0734 6.88645 7.09535 6.77711 7.09535 6.66668C7.09535 6.55624 7.0734 6.4469 7.03078 6.34502C6.98816 6.24314 6.92571 6.15075 6.84707 6.07321C6.76843 5.99567 6.67516 5.93454 6.57269 5.89336C6.47021 5.85218 6.36058 5.83178 6.25015 5.83334H3.33348ZM3.33348 9.16668C3.22306 9.16511 3.11342 9.18551 3.01095 9.22669C2.90847 9.26787 2.81521 9.329 2.73656 9.40654C2.65792 9.48408 2.59548 9.57647 2.55285 9.67835C2.51023 9.78023 2.48828 9.88957 2.48828 10C2.48828 10.1104 2.51023 10.2198 2.55285 10.3217C2.59548 10.4235 2.65792 10.5159 2.73656 10.5935C2.81521 10.671 2.90847 10.7321 3.01095 10.7733C3.11342 10.8145 3.22306 10.8349 3.33348 10.8333H7.91682C8.02724 10.8349 8.13688 10.8145 8.23935 10.7733C8.34183 10.7321 8.43509 10.671 8.51373 10.5935C8.59238 10.5159 8.65482 10.4235 8.69744 10.3217C8.74007 10.2198 8.76202 10.1104 8.76202 10C8.76202 9.88957 8.74007 9.78023 8.69744 9.67835C8.65482 9.57647 8.59238 9.48408 8.51373 9.40654C8.43509 9.329 8.34183 9.26787 8.23935 9.22669C8.13688 9.18551 8.02724 9.16511 7.91682 9.16668H3.33348ZM3.33348 12.5C3.22306 12.4984 3.11342 12.5188 3.01095 12.56C2.90847 12.6012 2.81521 12.6623 2.73656 12.7399C2.65792 12.8174 2.59548 12.9098 2.55285 13.0117C2.51023 13.1136 2.48828 13.2229 2.48828 13.3333C2.48828 13.4438 2.51023 13.5531 2.55285 13.655C2.59548 13.7569 2.65792 13.8493 2.73656 13.9268C2.81521 14.0043 2.90847 14.0655 3.01095 14.1067C3.11342 14.1478 3.22306 14.1682 3.33348 14.1667H9.58348C9.69391 14.1682 9.80354 14.1478 9.90602 14.1067C10.0085 14.0655 10.1018 14.0043 10.1804 13.9268C10.259 13.8493 10.3215 13.7569 10.3641 13.655C10.4067 13.5531 10.4287 13.4438 10.4287 13.3333C10.4287 13.2229 10.4067 13.1136 10.3641 13.0117C10.3215 12.9098 10.259 12.8174 10.1804 12.7399C10.1018 12.6623 10.0085 12.6012 9.90602 12.56C9.80354 12.5188 9.69391 12.4984 9.58348 12.5H3.33348ZM3.33348 15.8333C3.22306 15.8318 3.11342 15.8522 3.01095 15.8934C2.90847 15.9345 2.81521 15.9957 2.73656 16.0732C2.65792 16.1507 2.59548 16.2431 2.55285 16.345C2.51023 16.4469 2.48828 16.5562 2.48828 16.6667C2.48828 16.7771 2.51023 16.8865 2.55285 16.9883C2.59548 17.0902 2.65792 17.1826 2.73656 17.2601C2.81521 17.3377 2.90847 17.3988 3.01095 17.44C3.11342 17.4812 3.22306 17.5016 3.33348 17.5H11.2501C11.3606 17.5016 11.4702 17.4812 11.5727 17.44C11.6752 17.3988 11.7684 17.3377 11.8471 17.2601C11.9257 17.1826 11.9882 17.0902 12.0308 16.9883C12.0734 16.8865 12.0954 16.7771 12.0954 16.6667C12.0954 16.5562 12.0734 16.4469 12.0308 16.345C11.9882 16.2431 11.9257 16.1507 11.8471 16.0732C11.7684 15.9957 11.6752 15.9345 11.5727 15.8934C11.4702 15.8522 11.3606 15.8318 11.2501 15.8333H3.33348Z"
          fill="currentColor"
        />
      </Icon>
    )
  })
)

export default SortUpIcon
