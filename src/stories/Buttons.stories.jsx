import Button from "../components/Buttons"

export default {
  title: "Components/Buttons",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
}

const Template = args => <Button {...args} />


export const Small = Template.bind({})
Small.args = {
  label: "Press Me",
  size: "sm",
}


export const Login = Template.bind({})
Login.args = {
  label: "Login",
  size: "md",
}