import { useState, useEffect } from 'react'

export const useDebounce = ({ value, delay = 500 }) => {
  
  
  /*  Stores input value, which is updated upon "delay-based" timeout  */
  const [debouncedValue, setDebouncedValue] = useState(null)
  console.log(value, debouncedValue)
  
  /*  Debounce is called every time inputs change */
  useEffect(() => {
    
    /*  Wait for defined delay before updating debounced state value  */
    const delayHandler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    
    /*  If new value comes from calling component, cancel and reset handler  */
    return () => clearTimeout(delayHandler)
    
  }, [value,delay])
  
  /*  Current value is accessible from calling file, but can't be directly updated */
  console.log(debouncedValue)
  return debouncedValue
}