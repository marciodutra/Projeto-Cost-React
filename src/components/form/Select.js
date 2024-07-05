import styles from './Select.module.css'

function Select({text, name,options, handleonchange, value}) {
    return (
        <div className={styles.form_control}>
          <label htmlFor={name}>{text}</label>
          <select name={name} id={name}></select>
          <option>Selecione uma opção</option>
        </div>
    )
}

export default Select