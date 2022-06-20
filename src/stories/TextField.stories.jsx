import TextField from "../components/TextField"

export default {
  title: "Components/TextField",
  component: TextField,
}

const Template = args => <input {...args} />


export const Field = Template.bind({})
Field.args = {
   backgroundColor: "#FFFFFF",
}