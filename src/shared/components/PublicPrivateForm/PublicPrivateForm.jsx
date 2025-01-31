'use client';
import { useState } from 'react';
import { Button, Dropdown, Input, InputArea } from '..';
import s from './PublicPrivateForm.module.scss';

import Link from 'next/link';
const PublicPrivateForm = () => {
  const [isChecked, setIseChecked] = useState(false);
  const toggleCheckbox = () => {
    setIseChecked((prev) => !prev);
  };
  return (
    <div className={s.container}>
      <p className={s.title}>
        Надихайте інших –<br /> зробіть свій внесок публічним!
      </p>
      <div className={s.inputContainer}>
        <Input type="text" placeholder="Ім'я" name="name" className={s.input} />
        <Input
          type="text"
          placeholder="Email"
          name="email"
          className={s.input}
        />

        <InputArea placeholder="Повідомлення" style={{ padding: '16px' }} />
      </div>
      <p className={s.destination}>Призначення</p>
      <Dropdown />
      <div className={s.checkboxContainer}>
        <input
          className={s.checkbox}
          value={isChecked}
          onClick={toggleCheckbox}
          type="checkbox"
        />
        <p>Покрити комісію 2%. Без втрат для допомоги.</p>
      </div>
      <Button>
        <Link href="#">До сплати</Link>
      </Button>
      <Link href="#" className={s.payment}>
        Інші способи оплати
      </Link>
    </div>
  );
};

export default PublicPrivateForm;
