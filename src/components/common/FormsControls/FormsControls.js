import style from './FormsControls.module.css';

export const Textarea = ({ field, ...props }) => {

    const hasError = props.form.errors && props.form.touched;
    return (
        <div className={style.formControl + ' ' + ( hasError.newMessageText ? style.error : '')}>
            <div>
                <textarea type="textarea" {...field} {...props} />
            </div>
        </div>
    )
}

export const Input = ({ field, ...props }) => {

    const hasError = props.form.errors && props.form.touched;
    return (
        <div className={style.formControl + ' ' + ( hasError.newMessageText ? style.error : '')}>
            <div>
                <input {...field} {...props} />
            </div>
        </div>
    )
}