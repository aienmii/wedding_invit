import { useState, type ChangeEvent, type FormEvent } from 'react';
import './RSVPForm.css';

interface RSVPFormData {
  name: string;
  attending: string;
  alcohol: string[];
  nonAlcohol: string[];
  wishes: string; 
}

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function RSVPForm() {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [formData, setFormData] = useState<RSVPFormData>({
    name: '',
    attending: '',
    alcohol: [],
    nonAlcohol: [],
    wishes: '' 
  });

  const SCRIPT_URL: string = "https://script.google.com/macros/s/AKfycbw9TXWRLGkDef_Tbur-5DZ0ixmwfu0wkh5CQ519nOHnE7kjtAI_Am_CCt-pkP8jNxS7XQ/exec";
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, category: 'alcohol' | 'nonAlcohol') => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const currentList = prev[category];
      if (checked) {
        return { ...prev, [category]: [...currentList, value] };
      } else {
        return { ...prev, [category]: currentList.filter(item => item !== value) };
      }
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('attending', formData.attending);
    formPayload.append('alcohol', formData.alcohol.join(', '));
    formPayload.append('drink', formData.nonAlcohol.join(', '));
    formPayload.append('wishes', formData.wishes); 

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors'
      });
      
      setStatus('success');
      setFormData({ name: '', attending: '', alcohol: [], nonAlcohol: [], wishes: '' });
    } catch (error) {
      console.error('Error submitting form', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className="rsvp-section" style={{ textAlign: 'center', padding: '40px' }}>
        <h3>Дякуємо!</h3>
        <p>Вашу відповідь успішно збережено.</p>
      </section>
    );
  }

  return (
    <section className="rsvp-section">
      <h2>Анкета Гостя</h2>
      <p style={{ marginBottom: '25px' }}>Просимо відповісти на декілька запитань.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Ваше ім'я та прізвище</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Ім'я..."
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Чи плануєте ви бути на весіллі?</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="attending"
                value="Так"
                required
                checked={formData.attending === 'Так'}
                onChange={handleChange}
              /> Так
            </label>
            <label>
              <input
                type="radio"
                name="attending"
                value="Ні"
                checked={formData.attending === 'Ні'}
                onChange={handleChange}
              /> Ні
            </label>
          </div>
        </div>

        {formData.attending === 'Так' && (
          <>
            <div className="form-group">
              <label>Вкажіть ваші побажання по алкогольним напоям:</label>
              <div className="radio-group">
                {[ 'Коньяк', 'Вино', 'Шампанське', 'Горілка'].map((drink) => (
                  <label key={drink}>
                    <input
                      type="checkbox"
                      value={drink}
                      checked={formData.alcohol.includes(drink)}
                      onChange={(e) => handleCheckboxChange(e, 'alcohol')}
                    /> {drink}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Вкажіть ваші побажання по безалкогольним напоям:</label>
              <div className="radio-group">
                {['Сік', 'Б/А ', 'Солодка вода', 'Мінеральна вода', 'Вода негазована'].map((drink) => (
                  <label key={drink}>
                    <input
                      type="checkbox"
                      value={drink}
                      checked={formData.nonAlcohol.includes(drink)}
                      onChange={(e) => handleCheckboxChange(e, 'nonAlcohol')}
                    /> {drink}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group" style={{ marginTop: '30px' }}>
              <label htmlFor="wishes">Побажання для нас</label>
              <textarea
                id="wishes"
                name="wishes"
                placeholder="Тут ви можете вказати ваші побажання або зазначити будь-яку важливу для вас інформацію, або просто залишити тепле побажання нам :)"
                value={formData.wishes}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        <button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Відправка...' : 'Відправити відповідь'}
        </button>
        
        {status === 'error' && (
          <p className="error-text">
            Виникла помилка. Спробуйте ще раз.
          </p>
        )}
      </form>
    </section>
  );
}