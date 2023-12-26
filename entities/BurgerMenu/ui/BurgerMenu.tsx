import React, { FC} from 'react';
import cls from './BurgerMenu.module.scss'; 
import { useDispatch} from 'react-redux'
import { AppDispatch} from '../../../shared/Redux/store/store'
import {useTypedSelect} from '../../../shared/Redux/hooks/useTypedSelect'
import { setOpen } from '../../../shared/Redux/slices/isShownSlice'
interface BurgerProps{
  className?:string
}


export const BurgerMenu:FC<BurgerProps> = ({className}) => {
  const dispatch = useDispatch<AppDispatch>()
  const Open = useTypedSelect(state=>state.openReducer.isOpen)
  console.log(Open)
  return (
    <div className={`${className} ${cls.burgerMenu} ${Open ? cls.open : ''}`} onClick={()=>dispatch(setOpen(!Open))}>
      <div className={`${cls.bar} ${cls.bar1}`}></div>
      <div className={`${cls.bar} ${cls.bar2}`}></div>
    </div>
  );
};


