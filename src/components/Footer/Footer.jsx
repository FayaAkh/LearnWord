import React from 'react'
import styles from './Footer.module.css'
import ButtonMenu from '../ButtonMenu/ButtonMenu'

export default function Footer() {
  return (
    <footer>
      <div className={styles.btnBox}>
      <ButtonMenu title='Выученные'/>
      <ButtonMenu title='Карточки слов'/>
      <ButtonMenu title='Список слов'/>
      </div>
      
    <p>&copy; 2024 Faya Co.</p>
  </footer>
  )
}
