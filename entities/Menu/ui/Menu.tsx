import React from 'react'
import { BurgerMenu } from '../../BurgerMenu/ui/BurgerMenu'
import cls from './Menu.module.scss'
import { useTypedSelect } from '../../../shared/Redux/hooks/useTypedSelect'

export const Menu = () => {
	const isOpen = useTypedSelect(state=>state.openReducer.isOpen)

  	return (
		<div className={cls.menuItems}>
			<p className={cls.menuParagraph}>Projects</p>
			<p className={cls.menuParagraph}>Services</p>
			<p className={cls.menuParagraph}>Expertise</p>
			<p className={cls.menuParagraph}>Contancts</p>
			<p className={cls.menuParagraph}>Careers</p>
			<BurgerMenu className={cls.menuParagraph}/>
			<p className={cls.menuParagraph}>{isOpen ? "CLOSE" : "MENU"}</p>
		</div>
  )
}

