import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input } from './../../common/FormsControls/FormsControls';
import * as yup from 'yup';
import style from './../../Login/Login.module.css';



const ProfileDataForm = (/* { profile }, */ props) => {

    const validationsSchema = yup.object().shape({
        fullName: yup.string().typeError('должно быть строкой').required('Обязательно'),
        lookingForAJobDescription: yup.string().typeError('должно быть строкой').required('Обязательно'),
        aboutMe: yup.string().typeError('должно быть строкой').required('Обязательно'),
    })
    const setEditMode = props.setEditMode;
    const submit = (values, { setSubmitting, setStatus }) => {
        alert('formbut');
        console.log(values);
        props.saveProfileThunkCreator(values);
        setEditMode(false);
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={{
                fullName: props.profile.fullName,
                lookingForAJobDescription: props.profile.lookingForAJobDescription,
                lookingForAJob: props.profile.lookingForAJob,
                aboutMe: props.profile.aboutMe
            }}
            /*  validate={usersSearchFormValidate} */
            onSubmit={submit}
            validationSchema={validationsSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                dirty,
                status
                /* and other goodies */
            }) => (
                <form className={style.form} onSubmit={handleSubmit}>
                    {status &&
                        <div className={style.errorFromServer}>{status}</div>
                    }
                    <div>
                        <label>Full name</label>
                        <Field
                            className={style.input}
                            type="text"
                            name="fullName"
                            placeholder="full name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.fullName}
                        />
                        {touched.fullName && errors.fullName && <p className={style.error}>{errors.fullName}</p>}
                    </div>

                    <div>
                        <label>Loking for a job:</label>
                        <Field
                            type="checkbox"
                            name="lookingForAJob"
                            component={Input}
                        />
                    </div>

                    <div>
                        <label>Loking FOr a Job Description</label>
                        <Field
                            className={style.input}
                            type="textarea"
                            name="lookingForAJobDescription"
                            as="textarea"
                            placeholder="jobDescription"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.lookingForAJobDescription}
                        />
                        {touched.lookingForAJobDescription && errors.lookingForAJobDescription && <p className={style.error}>{errors.lookingForAJobDescription}</p>}
                    </div>

                    <div>
                        <label>About me</label>
                        <Field
                            className={style.input}
                            type="input"
                            name="aboutMe"
                            as="textarea"
                            placeholder="About me"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.aboutMe}
                        />
                        {touched.aboutMe && errors.aboutMe && <p className={style.error}>{errors.aboutMe}</p>}
                    </div>

                    <div>
                        <label>Contacts:</label>
                        {Object.keys(props.profile.contacts).map(key => {
                            let n = 'contacts.' + key;
                            return (
                                <div key={key}>
                                    <label>{key}</label>
                                    <Field
                                        className={style.input}
                                        type="text"
                                        name={'contacts.' + key}
                                        placeholder={key}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                       /*  value={'values.contacts.' + key} */
                                    />
                                   {/*  {touched.n && errors.n && <p className={style.error}>{errors.n}</p>} */}
                                </div>
                            )
                        })}
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        Save
                    </button>
                </form>
            )}
        </Formik>
    )
}

/* const mapStateToProps = (state) => ({
  
})
export default connect(mapStateToProps, {saveProfileThunkCreator})(ProfileDataForm); */
export default ProfileDataForm;


