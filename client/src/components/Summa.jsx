import React from 'react';
import '../App.css';

const Summa = props => {

    let sum = 0;
    {
        props.users.map(user => (function () {
            sum += Number(user.sum);
        }()))
    }
    return 'Summa: ' + sum;
};

export default Summa;