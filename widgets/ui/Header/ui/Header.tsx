import { FC } from 'react'
import cls from './header.module.scss'
import {useTypedSelect} from '../../../../shared/Redux/hooks/useTypedSelect'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../shared/Redux/store/store'
import { setOpen } from '../../../../shared/Redux/slices/isShownSlice'
import {Modal} from '../../../../entities/Modal/index'

export const Header:FC = () => {

	const open = useTypedSelect(state=>state.openReducer.isOpen)
	const dispacth = useDispatch<AppDispatch>()
	

  return (
	<header className={cls.header}>
		<div className={cls.container}>
			<div className={cls.header__inner}>
				 <a href="#" className={cls.logo}>
					<img src="/logo.svg" alt="Tea"/>
				</a>
				<nav className={cls.menu}>
					<button className={cls.menu__button} onClick={()=>dispacth(setOpen(!open))}>
						<span className={cls.menu__button__span}></span>
						<span className={cls.menu__button__span}></span>
						<span className={cls.menu__button__span}></span>
						<span className={cls.menu__button__span}></span>
					</button>
					{open && <Modal/>}
				</nav>
				<ul className={cls.user__actions}>
					<li className={cls.user__actions__item}>
						<a href="#" className={cls.user__actions__link}>
							<img src="/cart.svg" alt="Tea" />
						</a>
					</li>
					<li className={cls.user__actions__item}>
						<a href="#" className={cls.user__actions__link}>
							<img src="/user.svg" alt="Tea" />
						</a>
					</li>
					<li className={cls.user__actions__item__search}>
						<a href="#" className={cls.user__actions__link}>
							<img src="/search.svg" alt="" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</header>
  )
}

