import {
    Form,
    Label,
    TextAreaField,
    TextField,
    Submit,
    FieldError,
    useForm,
    FormError,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/dist/toast'

const CREATE_CONTACT = gql`
    mutation CreateContactMutation($input: CreateContactInput!) {
        createContact(input: $input) {
            id
        }
    }
`

const ContactPage = () => {
    const formMethods = useForm()
    const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
        onCompleted: () => {
            toast.success('thank you for your message')
            formMethods.reset()
        },
    })
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
            <Toaster />
            <Form
                onSubmit={submitHandler}
                formMethods={formMethods}
                error={error}
            >
                <FormError error={error} wrapperClassName="form-error" />
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
                        //pattern: { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g },
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
                <Submit disabled={loading}>Send Message</Submit>
            </Form>
        </>
    )
}

export default ContactPage
