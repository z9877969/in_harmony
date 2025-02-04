'use client';
import { useState } from 'react';
import { Button, Dropdown, Input, InputArea, RadioButton } from '..';
import s from './PublicPrivateForm.module.scss';
import data from './data/PublicPrivateForm.json';
import Link from 'next/link';
const PublicPrivateForm = () => {
  const [isChecked, setIseChecked] = useState(false);
  const [isPublic, setIsPublic] = useState(true);

  const haandleChange = () => {
    setIsPublic((prev) => !prev);
  };
  const toggleCheckbox = () => {
    setIseChecked((prev) => !prev);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>{data.title}</h2>

      <div>
        <RadioButton
          options={data.donateOptions}
          name="donateOptions"
          onChange={haandleChange}
        />
        {isPublic && (
          <div className={s.inputContainer}>
            <Input
              type="text"
              placeholder={data.placeholderName}
              name="name"
              className={s.input}
            />
            <Input
              type="text"
              placeholder={data.placeholderEmail}
              name="email"
              className={s.input}
            />

            <InputArea
              placeholder={data.placeholderMessage}
              style={{ padding: '16px' }}
            />
          </div>
        )}
      </div>
      <p className={s.destination}>{data.destination}</p>
      <Dropdown />
      <div className={s.checkboxContainer}>
        <input
          className={s.checkbox}
          value={isChecked}
          onClick={toggleCheckbox}
          type="checkbox"
        />
        <p>{data.coverCommission}</p>
      </div>
      <Button>
        <Link href="#">{data.btnText}</Link>
      </Button>
      <Link href="#" className={s.payment}>
        {data.otherPaymentMethods}
      </Link>
    </div>
  );
};

export default PublicPrivateForm;
