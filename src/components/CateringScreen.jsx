import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '../i18n/useLanguage';

const CateringScreen = () => {
  const { t, lang } = useLanguage();
  const [state, handleSubmit] = useForm('xgodzgby');

  if (state.succeeded) {
    return (
      <section className='relative z-10 py-16 md:py-20 px-4'>
        <div className='mx-auto max-w-3xl rounded-2xl bg-[#25252d] p-6 md:p-10'>
          <h1 className='text-3xl md:text-4xl font-semibold mb-4'>{t('cateringPage.title')}</h1>
          <p className='text-base md:text-lg text-gray-200'>{t('cateringPage.success')}</p>
        </div>
      </section>
    );
  }

  return (
    <section className='relative z-10 py-16 md:py-20 px-4'>
      <div className='mx-auto max-w-3xl rounded-2xl bg-[#25252d] p-6 md:p-10'>
        <h1 className='text-3xl md:text-4xl font-semibold mb-8'>{t('cateringPage.title')}</h1>
        <form className='space-y-5' onSubmit={handleSubmit}>
          <input type='hidden' name='language' value={lang} />
          <div>
            <label className='block text-sm mb-2' htmlFor='name'>
              {t('cateringPage.name')}
            </label>
            <input
              id='name'
              name='name'
              type='text'
              className='w-full rounded-lg border border-[#444] bg-[#1A1A1F] px-4 py-3 text-white outline-none focus:border-[#e99b63]'
              required
            />
            <ValidationError prefix='Name' field='name' errors={state.errors} className='mt-1 text-sm text-red-400' />
          </div>
          <div>
            <label className='block text-sm mb-2' htmlFor='email'>
              {t('cateringPage.email')}
            </label>
            <input
              id='email'
              name='email'
              type='email'
              className='w-full rounded-lg border border-[#444] bg-[#1A1A1F] px-4 py-3 text-white outline-none focus:border-[#e99b63]'
              required
            />
            <ValidationError prefix='Email' field='email' errors={state.errors} className='mt-1 text-sm text-red-400' />
          </div>
          <div>
            <label className='block text-sm mb-2' htmlFor='phone'>
              {t('cateringPage.phone')}
            </label>
            <input
              id='phone'
              name='phone'
              type='tel'
              className='w-full rounded-lg border border-[#444] bg-[#1A1A1F] px-4 py-3 text-white outline-none focus:border-[#e99b63]'
              required
            />
            <ValidationError prefix='Phone' field='phone' errors={state.errors} className='mt-1 text-sm text-red-400' />
          </div>
          <div>
            <label className='block text-sm mb-2' htmlFor='message'>
              {t('cateringPage.message')}
            </label>
            <textarea
              id='message'
              name='message'
              rows={5}
              className='w-full rounded-lg border border-[#444] bg-[#1A1A1F] px-4 py-3 text-white outline-none focus:border-[#e99b63]'
              required
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
              className='mt-1 text-sm text-red-400'
            />
          </div>
          <button
            type='submit'
            disabled={state.submitting}
            className='bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium transition-colors duration-200 hover:bg-white cursor-pointer'
          >
            {state.submitting ? t('cateringPage.submitting') : t('cateringPage.submit')}
          </button>
          <ValidationError errors={state.errors} className='text-sm text-red-400' />
        </form>
      </div>
    </section>
  );
};

export default CateringScreen;
