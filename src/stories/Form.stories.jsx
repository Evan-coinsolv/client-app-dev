import Form from "../components/Form"

export default {
  title: "Components/Form",
  component: Form,
}

const Template = args => <div {...args} >
   <div
      style={{
         width: "442px",
         height: "557px",
         backgroundColor: "#e9e9e9",
         justifyContent: "center",
         alignItems: "center",
         radius: "20px",
         }}
      >
   </div>
</div>


export const Login = Template.bind({})
Login.args = {
   backgroundColor: "#FFFFFF",
}
