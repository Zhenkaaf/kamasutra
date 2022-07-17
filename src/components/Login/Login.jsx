import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input } from '../common/FormsControls/FormsControls';
import * as yup from 'yup';
import style from './Login.module.css';

import { connect } from 'react-redux';
import { loginThunkCreator } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';

const usersSearchFormValidate = (values: any) => {
    /*  const errors = {};
     if (!values.text) {
         errors.text = 'Required';
     } else if (
         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.text)
     ) {
         errors.text = 'Invalid email address';
     }
     return errors; */
}

const LoginForm = (props) => {

    const validationsSchema = yup.object().shape({
        email: yup.string().typeError('должно быть строкой').required('Обязательно'),
        password: yup.string().typeError('должно быть строкой').required('Обязательно'),
       /*  captcha: yup.string().typeError('должно быть строкой').required('Обязательно'), */
    })

    const submit = (values, { setSubmitting, setStatus }) => {
        props.loginThunkCreator(values.email, values.password, values.captcha, values.rememberMe, setStatus);

        setSubmitting(false);
        /*  setTimeout(() => {
             alert(JSON.stringify(values, null, 2));
             setSubmitting(false);
         }, 400); */
    }

    return (
        <Formik
            initialValues={{ email: '', password: '', captcha: '', rememberMe: false }}
            validate={usersSearchFormValidate}
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
                        <Field
                            className={style.input}
                            type="text"
                            name="email"
                            placeholder="login"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {touched.email && errors.email && <p className={style.error}>{errors.email}</p>}
                    </div>


                    <div>
                        <Field
                            className={style.input}
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {touched.password && errors.password && <p className={style.error}>{errors.password}</p>}
                    </div>

                    <div>
                        <label>
                            <Field type="checkbox" name="rememberMe" component={Input} />
                            {/* {`${values.rememberMe}`} */}remember me
                        </label>
                    </div>

                    {props.captchaUrl && <img src={props.captchaUrl} />}
                    {props.captchaUrl && <div>
                        <label>Captcha</label>
                        <Field
                            className={style.input}
                            type="text"
                            name="captcha"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.captcha}
                        />
                       {/*  {touched.captcha && errors.captcha && <p className={style.error}>{errors.captcha}</p>} */}
                    </div>}

                    <button type="submit" disabled={isSubmitting}>
                        Login
                    </button>
                </form>
            )}
        </Formik>
    )
}
const Login = (props) => {
    if (props.isAuth) {
        return <Navigate replace to="/profile" />
    }
    return (
        <div>
            <h1>LOGiN</h1>
            <LoginForm captchaUrl={props.captchaUrl} loginThunkCreator={props.loginThunkCreator} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { loginThunkCreator })(Login);