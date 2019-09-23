import React, {useState, useRef} from 'react'
import { Redirect} from 'react-router-dom'
const minYear = 2019
const maxYear = 2022


const AdicionarMes = () => {
    const years = []
    const months = []
    const refAno = useRef()
    const refMes = useRef()
    const [redir,setRedir] = useState('')


    for (let i = minYear; i<= maxYear;i++){
        years.push(i)
    }
    for (let i = 1; i<= 12;i++){
        months.push(i)
    }

    const zeroPad = num => {
        if(num <10){
            return '0'+num
        }
        return num
    }
    
    const verMes = () => {
        setRedir (refAno.current.value + '-' + refMes.current.value)
    }
    if (redir !== ''){
        return <Redirect to={'/movimentacoes/'+redir} />
    }

    
    return(
        <React.Fragment>
            <h2> Adicionar mês</h2>
            <select ref={refAno} >
                {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
            <select ref={refMes}>
                {months.map(zeroPad).map(month => <option key={month} value= {month}>{month}</option>)}
            </select>
            <button onClick={verMes}>Adicionar Mês</button>
        </React.Fragment>
    )
}

export default AdicionarMes