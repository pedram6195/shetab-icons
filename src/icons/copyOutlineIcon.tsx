import { Icon, IconProps } from '@chakra-ui/react'

const CopyOutlineIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <path
        d="M9.25 2.5C7.74011 2.5 6.5 3.74011 6.5 5.25V16.25C6.5 17.7599 7.74011 19 9.25 19H17.25C18.7599 19 20 17.7599 20 16.25V5.25C20 3.74011 18.7599 2.5 17.25 2.5H9.25ZM9.25 4H17.25C17.9491 4 18.5 4.55089 18.5 5.25V16.25C18.5 16.9491 17.9491 17.5 17.25 17.5H9.25C8.55089 17.5 8 16.9491 8 16.25V5.25C8 4.55089 8.55089 4 9.25 4ZM5.5 5L4.89062 5.40625C4.33412 5.77725 4 6.40181 4 7.07031V16.75C4 19.3735 6.1265 21.5 8.75 21.5H15.4297C16.0987 21.5 16.7233 21.1659 17.0938 20.6094L17.5 20H8.75C6.955 20 5.5 18.545 5.5 16.75V5Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default CopyOutlineIcon
