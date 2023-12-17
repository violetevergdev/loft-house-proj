import * as React from "react";

const Form = ({ className }: React.HTMLAttributes<HTMLFormElement>) => {
  return (
    <form className={className}>
      <input type="text" className="form_input" placeholder="Ваше имя" />
      <input type="text" className="form_input" placeholder="Ваш телефон" />

      <p className="form_privacy">
        *Мы никому не передаем ваши данные. <br /> И не сохраняем ваш номер в
        базу.
      </p>

      <button className="form_btn" type="button">
        Посмотреть район
      </button>
    </form>
  );
};

export default Form;
