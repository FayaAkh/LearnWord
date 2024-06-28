import React from 'react'
import ButtonMenu from '../ButtonMenu/ButtonMenu'
import styles from './Header.module.css'


export default function Header() {
  return (
    <header>
      <ButtonMenu title= 'Войти'/>
        <div>
            <span className={styles.logo} >Learn Words</span>
        </div>
      <div className={styles.presentation}>
        <ButtonMenu title='Попробовать'/>
      </div>
    </header>
  )
}
