import { toast } from 'react-toastify';

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    toast.success('Your contact succesfuly sent', {
      position: 'top-center',
    });
  };

  return (
    <section className="contacts mt-10" id="contacts">
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form flex flex-col items-center">
          <div className="mb-4 w-full md:w-[50%]">
            <label className="block font-bold mb-2 text-textMain" htmlFor="name">
              Name
            </label>
            <input
              className="contact-form__text contact-form-input w-full px-3 py-2 border rounded bg-gray-100"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="mb-4 w-full md:w-[50%]">
            <label className="block font-bold mb-2 text-textMain" htmlFor="email">
              Email
            </label>
            <input
              className="contact-form__text contact-form-input w-full px-3 py-2 border rounded bg-gray-100"
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="mb-4 w-full md:w-[50%]">
            <label className="block font-bold mb-2 text-textMain" htmlFor="message">
              Message
            </label>
            <textarea
              className="contact-form__text contact-form-message w-full px-3 py-2 border rounded bg-gray-100"
              placeholder="Message"
              id="message"
              name="message"
              required
            ></textarea>
          </div>

          <div className="mb-4 w-full md:w-[50%]">
            <input
              className="contact-form__btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-full"
              type="submit"
              value="Send"
            />
          </div>
        </div>
      </form>
      <div className="mt-8 text-center">
        <p className="mt-4 text-textMain">Phone</p>
        <p className="text-secondary mb-1">+1 234 5555-55-55</p>

        <p className="mt-4 text-textMain">Email</p>
        <p className="text-secondary mb-1">hello@nothing.com</p>

        <p className="mt-4 text-textMain">Adress</p>
        <address className="not-italic">
          <a href="https://www.google.com/maps?q=400+first+ave.+suite+700+Minneapolis,+MN+55401">
            <p className="text-secondary mb-1">400 first ave.</p>
            <p className="text-secondary mb-1">suite 700</p>
            <p className="text-secondary mb-1">Minneapolis, MN 55401</p>
          </a>
        </address>
      </div>
    </section>
  );
};
