import MainContact from '../components/Contact/MainContact';

const Contact = () => {
  return (
    <>
      <div className='m-12'>
        <p className='text-center text-4xl font-bold pb-2'>Get In Touch</p>
        <p className='text-sm text-center font-light'>Our Company provide 24/7 support system. Our team member will be there with you all the time in any kind of technical or non technical help.</p>
        <p className='text-sm text-center font-extralight'>Always feel free to contact us for any kind of queries.</p>
      </div>
      <MainContact/>
    </>
  );
};

export default Contact;