import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        id: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({ name, label, options, ...rest}) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest}>
                { options.map(option => <option key={option.id} value={option.id}>{option.label}</option>) }
            </select>
        </div>
    )
}

export default Select