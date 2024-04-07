import { Icon, IconProps } from '@chakra-ui/react'

const CircleIcon = (props: IconProps) => {
  return (
    <Icon {...props} viewBox="0 0 20 20">
         <path
          d="M9.99996 18.3334C5.40496 18.3334 1.66663 14.595 1.66663 10C1.66663 5.40502 5.40496 1.66669 9.99996 1.66669C14.595 1.66669 18.3333 5.40502 18.3333 10C18.3333 14.595 14.595 18.3334 9.99996 18.3334Z"
          fill="currentColor"
        />
    </Icon>
  )
}

export default CircleIcon
