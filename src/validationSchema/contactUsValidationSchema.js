import * as Yup from 'yup';

export const ContactUsSchema = Yup.object().shape({
    name: Yup.string().trim()
        .min(2, 'Name must have atleast 2 characters')
        .max(50, 'Name should not have more than 50 characters')
        .required('Please provide your name!'),
    subject: Yup.string().trim()
        .min(2, 'Subject must have atleast 2 characters')
        .max(50, 'Subject should not have more than 50 characters')
        .required('Please provide a subject!'),
    message: Yup.string().trim()
        .min(2, 'Message must have atleast 2 characters')
        .max(200, 'Message should not have more than 200 characters')
        .required('Please provide a message to communicate!'),
    email: Yup.string().email('Invalid email').required('Please provide your email address!'),
});