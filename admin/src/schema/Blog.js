import * as yup from 'yup';

export const blogSchema = yup.object().shape({
    title:yup.string().required("Title can't be empty ").min(5,"Title must be 5 characters long").max(40,'title cannot exceed 40 characters long'),
    content:yup.string().required("Blog content can't be empty"),
    topic:yup.string().required("Topic can't be empty"),
    seoTitle:yup.string(),
    seoDescription:yup.string(),
    image:yup
        .mixed()
        .nullable() // allowed file to initially null
        .required('please add the image')
        .test(
            'filesize',
            'File is too large, Maximum file is 2mb',
            (value) => value && value.size  <= 2000000 //2mb limit
        )
        .test(
            'filetype',
            'unsUnsupported file type. Please upload a JPEG, PNG, or GIF file.',
            (value) => ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
        ),
    altImage: yup.string().required('Please add alt text to show on image for seo purpose'),
    status:yup.boolean()    
})