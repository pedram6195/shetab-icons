import { Icon, IconProps } from '@chakra-ui/react'

const CategoryIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 48 48" {...props}>
      <path
        d="M14.5 23C9.81301 23 6.00001 19.187 6.00001 14.5C6.00001 9.813 9.81301 6 14.5 6C19.187 6 23 9.813 23 14.5C23 19.187 19.187 23 14.5 23ZM18.96 42H10.04C8.59601 42 7.29601 41.247 6.56301 39.985C5.81401 38.696 5.80801 37.153 6.54701 35.858L11.007 28.043C11.737 26.764 13.042 26 14.5 26C15.958 26 17.263 26.764 17.993 28.043L22.453 35.858C23.192 37.153 23.186 38.696 22.437 39.985C21.705 41.247 20.405 42 18.96 42ZM36.5 22H30.5C28.019 22 26 19.981 26 17.5V11.5C26 9.019 28.019 7 30.5 7H36.5C38.981 7 41 9.019 41 11.5V17.5C41 19.981 38.981 22 36.5 22ZM35.942 41.993C35.938 41.993 35.933 41.993 35.928 41.993L30.944 41.976C28.918 41.969 27.141 40.668 26.521 38.741L24.997 33.996C24.377 32.066 25.065 29.975 26.708 28.79L30.748 25.874C32.391 24.689 34.593 24.696 36.228 25.892L40.25 28.834C41.885 30.03 42.559 32.127 41.926 34.052L40.37 38.786C39.742 40.706 37.963 41.993 35.942 41.993Z"
        fill="currentColor"
      />
    </Icon>
  )
}

export default CategoryIcon