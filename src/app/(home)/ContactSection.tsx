import ContactForm from '@/components/form/ContactForm';

const ContactSection = () => {
  return (
    <section id='contact' className='flex min-h-screen flex-col py-20'>
      <h1 className='text-neutral mb-12 text-center text-3xl dark:text-white'>
        Contact Me
      </h1>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
