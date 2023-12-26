import React from 'react';
import cls from './modal.module.scss';
import { useDispatch } from 'react-redux'
import {useTypedSelect} from '../../../shared/Redux/hooks/useTypedSelect'
import { AppDispatch } from '../../../shared/Redux/store/store'
import { setOpen } from '../../../shared/Redux/slices/isShownSlice'

export const Modal = () => {

 	const open = useTypedSelect(state=>state.openReducer.isOpen)
	const dispacth = useDispatch<AppDispatch>()
  
  return (
					<ul className={open ? cls.menu__list__visible: cls.menu__list}>
						<li className={cls.menu__close}>
							<button className={cls.menu__close__button} onClick={()=>dispacth(setOpen(!open))}>
								<img src="/close.svg" alt="Tea" />
							</button>
						</li>
						<li className={cls.menu__item}>
							<a href="#" className={cls.menu__link}>Black</a>
						</li>
						<li className={cls.menu__item}>
							<a href="#" className={cls.menu__link}>Green</a>
						</li>
						<li className={cls.menu__item}>
							<a href="#" className={cls.menu__link}>White</a>
						</li>
						<li className={cls.menu__item}>
							<a href="#" className={cls.menu__link}>Oolong</a>
						</li>
						<li className={cls.menu__item}>
							<a href="#" className={cls.menu__link}>Pu-erh</a>
						</li>
						<li className={cls.mobile__nav}>
							<ul className={cls.mobile__menu}>
								<li className={cls.mobile__menu__item}>
									<a href="#" className={cls.mobile__menu__link}>Contact Us</a>
								</li>
								<li className={cls.mobile__menu__item}>
									<a href="#" className={cls.mobile__menu__link}>Our Blog</a>
								</li>
								<li className={cls.mobile__menu__item}>
									<a href="#" className={cls.mobile__menu__link}>Shipping and Delivery</a>
								</li>
							</ul>
							<ul className={cls.mobile__actions}>
								<li className={cls.mobile__actions__item}>
									<a href="#" className={cls.mobile__actions__link}>
										<img src="/cart.svg" alt="Tea" />
									</a>
								</li>
								<li className={cls.mobile__actions__item}>
									<a href="#" className={cls.mobile__actions__link}>
										<img src="/user.svg" alt="Tea" />
									</a>
								</li>
								<li className={cls.mobile__actions__item__search}>
									<a href="#" className={cls.mobile__actions__link}>
										<img src="/search.svg" alt="" />
									</a>
								</li>
							</ul>
						</li>
					</ul>
  );
};
