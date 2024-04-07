import { Icon, IconProps } from '@chakra-ui/react'

const HelpIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 20 20" {...props}>
      <path
        d="M10 1.66669C5.40505 1.66669 1.66669 5.40505 1.66669 10C1.66669 14.595 5.40505 18.3334 10 18.3334C14.595 18.3334 18.3334 14.595 18.3334 10C18.3334 5.40505 14.595 1.66669 10 1.66669ZM10 2.91669C11.7341 2.91669 13.3186 3.53783 14.5484 4.56789L12.7108 6.40546C11.9425 5.82426 11.0336 5.41669 10 5.41669C8.96646 5.41669 8.05749 5.82426 7.28925 6.40546L5.45168 4.56789C6.6814 3.53783 8.26595 2.91669 10 2.91669ZM4.56789 5.45168L6.40546 7.28925C5.82426 8.0575 5.41669 8.96646 5.41669 10C5.41669 11.0336 5.82426 11.9425 6.40546 12.7108L4.56789 14.5484C3.53783 13.3186 2.91669 11.7341 2.91669 10C2.91669 8.26595 3.53783 6.6814 4.56789 5.45168ZM15.4321 5.45168C16.4622 6.6814 17.0834 8.26595 17.0834 10C17.0834 11.7341 16.4622 13.3186 15.4321 14.5484L13.5946 12.7108C14.1758 11.9425 14.5834 11.0336 14.5834 10C14.5834 8.96646 14.1758 8.0575 13.5946 7.28925L15.4321 5.45168ZM10 6.66669C11.8484 6.66669 13.3334 8.15167 13.3334 10C13.3334 11.8484 11.8484 13.3334 10 13.3334C8.15167 13.3334 6.66669 11.8484 6.66669 10C6.66669 8.15167 8.15167 6.66669 10 6.66669ZM7.28925 13.5946C8.05749 14.1758 8.96646 14.5834 10 14.5834C11.0336 14.5834 11.9425 14.1758 12.7108 13.5946L14.5484 15.4321C13.3186 16.4622 11.7341 17.0834 10 17.0834C8.26595 17.0834 6.6814 16.4622 5.45168 15.4321L7.28925 13.5946Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default HelpIcon
