import { Icon, IconProps } from '@chakra-ui/react'

const BookmarkIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 20 20" {...props}>
      <path
        d="M6.87533 2.08334C5.38702 2.08334 4.16699 3.30337 4.16699 4.79168V17.2917C4.16703 17.4067 4.19881 17.5195 4.25884 17.6177C4.31887 17.7158 4.40482 17.7955 4.50723 17.8479C4.60963 17.9003 4.72452 17.9235 4.83923 17.9148C4.95395 17.9061 5.06404 17.8659 5.15739 17.7987L10.0003 14.3115L14.8433 17.7987C14.9366 17.8659 15.0467 17.9061 15.1614 17.9148C15.2761 17.9235 15.391 17.9003 15.4934 17.8479C15.5958 17.7955 15.6818 17.7158 15.7418 17.6177C15.8018 17.5195 15.8336 17.4067 15.8337 17.2917V4.79168C15.8337 3.30337 14.6136 2.08334 13.1253 2.08334H6.87533ZM6.87533 3.33334H13.1253C13.9379 3.33334 14.5837 3.97915 14.5837 4.79168V16.0718L10.3657 13.0347C10.2593 12.958 10.1315 12.9168 10.0003 12.9168C9.86917 12.9168 9.74134 12.958 9.63493 13.0347L5.41699 16.0718V4.79168C5.41699 3.97915 6.0628 3.33334 6.87533 3.33334Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default BookmarkIcon