import { ChangeEvent, useState } from 'react';
import { Button } from '../../components/Button/index'
import { Input } from '../../components/Inputs/index'
import './style.css'

export const Home = () => {
    const [numberUm, setNumberUm] = useState<string>('')
    const [numberDois, setNumberDois] = useState<string>('')
    const [result, setResult] = useState<number>(0)

    const handleChangedNumberUm = (event: ChangeEvent<HTMLInputElement>) => {
        const valueUm = event.target.value;

        setNumberUm(valueUm)
    };
    const handleChangedNumberDois = (event: ChangeEvent<HTMLInputElement>) => {
        const valueDois = event.target.value;

        setNumberDois(valueDois)
    };

    const handleAddition = () => {
        const calcResult: number = Number(numberUm) + Number(numberDois);
        setResult(calcResult)
    }

    const handleSubtraction = () => {
        const calcResult: number = Number(numberUm) - Number(numberDois);
        setResult(calcResult)
    }

    const handleMultiplication = () => {
        const calcResult: number = Number(numberUm) * Number(numberDois);
        setResult(calcResult)
    }

    const handleDivision = () => {
        const calcResult: number = Number(numberUm) / Number(numberDois);
        setResult(calcResult)
    }

    return (
        <div className='body-container'>
            <div className='screen-container'>
                <div className='input'>
                    <div className='input-container'>
                        <Input label='Número um:' 
                        name='numberUm' 
                        onChange={handleChangedNumberUm}
                        type='number'
                        value={numberUm}/>
                    </div>
                    <div className='input-container'>
                        <Input label='Número dois:' 
                        name='numberDois' 
                        onChange={handleChangedNumberDois}
                        type='number'
                        value={numberDois}/>
                    </div>
                </div>

                <div className='result'>
                    <p>Resultado</p>
                    <span>{result}</span>
                </div>
            </div>


            <span>Executar operação:</span>

            <div className='btn-concatiner'>
                <Button onClick={handleAddition}>
                    Adição
                </Button>
                <Button onClick={handleSubtraction}>
                    Subtração
                </Button>
                <Button onClick={handleMultiplication}>
                    Multiplicação
                </Button>
                <Button onClick={handleDivision}>
                    Divisão
                </Button>
            </div>

        </div>
    )
};