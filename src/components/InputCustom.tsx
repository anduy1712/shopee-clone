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

  const handleIncrease = async () => handleCallBack(onIncrease);

  const handleDecrease = async () => handleCallBack(onDecrease);

  const handleChange = async (e: any) =>
    handleCallBack(async () => {
      const regex = /^-?\d*\.?\d*$/;
      const result = regex.test(e.target.value);
      if (!result) return;
      await onChange(e.target.value === '' ? 1 : +e.target.value);
    });

  const handleCallBack = async (callback: () => void) => {
    setInputOpacity(true);
    await callback();
    setInputOpacity(false);
  };

  return (
    <div
      className={clsx({
        'shopee-input': true,
        'opacity opacity-notclick': inputOpacity
      })}
    >
      <button
        className="shopee-input__icon"
        onClick={_.debounce(handleDecrease, timeDelayClick)}
      >
        <AiOutlineMinus />
      </button>
      <input type="text" value={value} onChange={handleChange} />
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
