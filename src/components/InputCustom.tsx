import clsx from 'clsx';
import _ from 'lodash';
import React from 'react';
import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

type InputCustome = {
  onIncrease: () => void;
  onDecrease: () => void;
  onChange: any;
  className?: string;
  value?: number;
  timeDelayClick?: number;
};

const InputCustom = ({
  onIncrease,
  onDecrease,
  onChange,
  className,
  timeDelayClick = 300,
  value = 0
}: InputCustome) => {
  const [inputOpacity, setInputOpacity] = useState(false);

  const handleIncrease = () => {
    setInputOpacity(true);
    onIncrease();
    setInputOpacity(false);
  };

  const handleDecrease = () => {
    setInputOpacity(true);
    onDecrease();
    setInputOpacity(false);
  };
  return (
    <div
      className={clsx({
        'shopee-input': true,
        className: true,
        opacity: inputOpacity
      })}
    >
      <button
        className="shopee-input__icon"
        onClick={_.debounce(handleDecrease, timeDelayClick)}
      >
        <AiOutlineMinus />
      </button>
      <input type="text" value={value} onChange={onChange} />
      <button
        className="shopee-input__icon"
        onClick={_.debounce(handleIncrease, timeDelayClick)}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default InputCustom;
