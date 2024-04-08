import { Icon, IconProps } from '@chakra-ui/react'

const BoxIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 48 48" {...props}>
      <path
        d="M13.9042 6C12.5704 6 11.3021 6.59323 10.4471 7.61914L7.04285 11.7051C7.0422 11.7051 7.04154 11.7051 7.04089 11.7051C6.36888 12.5133 5.99988 13.5335 5.99988 14.5859V14.832V36.5C5.99988 36.6887 6.01027 36.8745 6.02917 37.0586C6.0293 37.0599 6.02904 37.0612 6.02917 37.0625C6.29201 39.6513 8.34857 41.7079 10.9374 41.9707C10.9387 41.9708 10.94 41.9706 10.9413 41.9707C11.125 41.9892 11.3113 42 11.4999 42H36.4999C36.6899 42 36.8771 41.9899 37.0624 41.9707C39.6512 41.7079 41.7077 39.6513 41.9706 37.0625C41.9707 37.0612 41.9705 37.0599 41.9706 37.0586C41.9895 36.8745 41.9999 36.6887 41.9999 36.5V14.832V14.5859C41.9999 13.5335 41.6306 12.5138 40.9569 11.7051L37.5526 7.61914C36.6977 6.59323 35.4294 6 34.0956 6H13.9042ZM13.9042 9H34.0956C34.5418 9 34.9629 9.19697 35.2479 9.53906L38.1307 13H9.86707L12.7518 9.53906C13.0369 9.19697 13.458 9 13.9042 9ZM19.4999 20H28.4999C29.3279 20 29.9999 20.671 29.9999 21.5C29.9999 22.329 29.3279 23 28.4999 23H19.4999C18.6719 23 17.9999 22.329 17.9999 21.5C17.9999 20.671 18.6719 20 19.4999 20Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default BoxIcon