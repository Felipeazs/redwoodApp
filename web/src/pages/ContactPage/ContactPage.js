import {
    Form,
    Label,
    TextAreaField,
    TextField,
    Submit,
    FieldError,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'

const CREATE_CONTACT = gql`
    mutation CreateContactMutation($input: CreateContactInput!) {
        createContact(input: $input) {
            id
        }
    }
`

const ContactPage = () => {
    const [create] = useMutation(CREATE_CONTACT)
    const submitHandler = (data) => {
        create({
            variables: {
                input: data,
            },
        })
    }
    return (
        <>
            <MetaTags title="Contact" description="Contact page" />
            <Form onSubmit={submitHandler}>
                <Label name="name" errorClassName="error">
                    Name
                </Label>
                <TextField
                    name="name"
                    errorClassName="error"
                    validation={{ required: true }}
                />
                <FieldError name="name" className="error" />
                <Label name="email" errorClassName="error">
                    Email
                </Label>
                <TextField
                    name="email"
                    errorClassName="error"
                    validation={{
                        required: true,
                        pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g },
                    }}
                />
                <FieldError name="email" className="error" />
                <Label name="message" errorClassName="error">
                    Message
                </Label>
                <TextAreaField
                    name="message"
                    errorClassName="error"
                    validation={{ required: true }}
                />
                <FieldError name="message" className="error" />
                <Submit>Send Message</Submit>
            </Form>
        </>
    )
}

export default ContactPage
