import { Icon, IconProps } from '@chakra-ui/react'

const WalletIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 20 20" {...props}>
      <path
        d="M4.37503 2.50006C3.39363 2.50006 2.58603 3.27399 2.51386 4.23834C2.50424 4.28327 2.4996 4.32912 2.50003 4.37506V5.62506V6.25006V15.6251C2.50003 16.6532 3.3469 17.5001 4.37503 17.5001H15.625C16.6532 17.5001 17.5 16.6532 17.5 15.6251V6.87506C17.5 5.84694 16.6532 5.00006 15.625 5.00006H4.37503C4.02232 5.00006 3.75003 4.72777 3.75003 4.37506C3.75003 4.02235 4.02232 3.75006 4.37503 3.75006H14.7917C14.8745 3.75123 14.9567 3.73593 15.0336 3.70505C15.1105 3.67417 15.1804 3.62832 15.2394 3.57016C15.2984 3.51201 15.3452 3.44271 15.3772 3.3663C15.4091 3.28989 15.4256 3.20789 15.4256 3.12506C15.4256 3.04223 15.4091 2.96023 15.3772 2.88382C15.3452 2.80741 15.2984 2.73812 15.2394 2.67996C15.1804 2.62181 15.1105 2.57596 15.0336 2.54508C14.9567 2.51419 14.8745 2.49889 14.7917 2.50006H4.37503ZM3.75003 6.25006H4.37503H15.625C15.9777 6.25006 16.25 6.52235 16.25 6.87506V15.6251C16.25 15.9778 15.9777 16.2501 15.625 16.2501H4.37503C4.02232 16.2501 3.75003 15.9778 3.75003 15.6251V6.25006ZM13.9584 10.0001C13.6821 10.0001 13.4171 10.1098 13.2218 10.3052C13.0264 10.5005 12.9167 10.7655 12.9167 11.0417C12.9167 11.318 13.0264 11.5829 13.2218 11.7783C13.4171 11.9736 13.6821 12.0834 13.9584 12.0834C14.2346 12.0834 14.4996 11.9736 14.6949 11.7783C14.8903 11.5829 15 11.318 15 11.0417C15 10.7655 14.8903 10.5005 14.6949 10.3052C14.4996 10.1098 14.2346 10.0001 13.9584 10.0001Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default WalletIcon