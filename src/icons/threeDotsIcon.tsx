import { Icon, IconProps } from '@chakra-ui/react'

const ThreeDotsIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 22 6" {...props}>
      <path
        d="M2.99902 0.249023C1.48859 0.249023 0.248047 1.48957 0.248047 3C0.248047 4.51043 1.48859 5.75098 2.99902 5.75098C4.50914 5.75098 5.75 4.51043 5.75 3C5.75 1.48957 4.50914 0.249023 2.99902 0.249023ZM18.999 0.249023C17.4886 0.249023 16.248 1.48957 16.248 3C16.248 4.51043 17.4886 5.75098 18.999 5.75098C20.5091 5.75098 21.75 4.51043 21.75 3C21.75 1.48957 20.5091 0.249023 18.999 0.249023ZM10.999 0.25C9.48882 0.25 8.24902 1.49034 8.24902 3C8.24902 4.50989 9.48914 5.75 10.999 5.75C12.5089 5.75 13.749 4.50989 13.749 3C13.749 1.49011 12.5089 0.25 10.999 0.25Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default ThreeDotsIcon
