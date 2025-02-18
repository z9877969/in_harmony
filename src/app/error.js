'use client';

export default function GlobalError({ error, reset }) {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Упс! Щось пішло не так</h2>
      <p>{error?.message || 'Невідома помилка'}</p>
      <button
        onClick={() => {
          reset();
          window.location.reload();
        }}
      >
        Спробувати знову
      </button>
    </div>
  );
}
