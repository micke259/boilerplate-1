import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../store/store'


export const useTypedSelect:TypedUseSelectorHook<RootState> = useSelector